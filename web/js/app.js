// Zonas de paso - Team Warriors
// Los datos vienen de data/tests.js (variables globales: tests, TEST_INFO, INSCRITOS_SIN_OCTUBRE, ESTADOS_OCTUBRE).

const TEST_FEB = '2026-02';
const TEST_OCT = '2026-10';

const ZONAS = [
    { id: 'z1', nombre: 'Zona 1 Recuperación' },
    { id: 'z2', nombre: 'Zona 2 Aeróbica básica' },
    { id: 'z3', nombre: 'Zona 3 Aeróbica alta' },
    { id: 'z4', nombre: 'Zona 4 Umbral' },
    { id: 'z5', nombre: 'Zona 5 VO2 máximo' },
    { id: 'z6', nombre: 'Zona 6 Anaeróbica' },
    { id: 'z7', nombre: 'Zona 7 Neuromuscular' }
];

// Estados oficiales del entrenador para el test de octubre
const ESTADOS = {
    MEJORO: { etiqueta: 'MEJORÓ', badge: 'MEJORÓ ▲', clase: 'estado-mejoro' },
    IGUAL: { etiqueta: 'IGUAL', badge: 'IGUAL =', clase: 'estado-igual' },
    DESMEJORO: { etiqueta: 'DESMEJORÓ', badge: 'DESMEJORÓ ▼', clase: 'estado-desmejoro' },
    FALTA: { etiqueta: 'FALTA', badge: 'FALTA', clase: 'estado-falta' },
    RECUPERACION: { etiqueta: 'EN RECUPERACIÓN', badge: 'EN RECUPERACIÓN', clase: 'estado-recuperacion' },
    INICIAL: { etiqueta: 'INICIAL', badge: 'INICIAL', clase: 'estado-inicial' }
};

// ---------- Helpers de tiempo ----------

// "05:11" -> 311
function toSeconds(mmss) {
    const [m, s] = mmss.split(':').map(Number);
    return m * 60 + s;
}

// 311 -> "05:11"
function toMMSS(totalSegundos) {
    const seg = Math.max(0, Math.round(totalSegundos));
    const m = Math.floor(seg / 60);
    const s = seg % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

// Minúsculas, sin tildes, sin espacios extra
function normalizar(texto) {
    return texto.normalize('NFD').replace(/[̀-ͯ]/g, '')
        .toLowerCase().replace(/\s+/g, ' ').trim();
}

// ---------- Cruce de atletas entre tests ----------

let atletas = [];

function construirAtletas() {
    const porNombre = new Map();
    const obtener = (nombre) => {
        const clave = normalizar(nombre);
        if (!porNombre.has(clave)) porNombre.set(clave, { clave, nombre, tests: {} });
        return porNombre.get(clave);
    };

    // Orden cronológico: el nombre mostrado queda con la grafía del test más reciente
    Object.keys(tests).sort().forEach(idTest => {
        tests[idTest].forEach(registro => {
            const atleta = obtener(registro.nombre);
            atleta.nombre = registro.nombre;
            atleta.tests[idTest] = registro;
        });
    });
    INSCRITOS_SIN_OCTUBRE.forEach(nombre => obtener(nombre));

    const estadoPorClave = new Map();
    Object.entries(ESTADOS_OCTUBRE).forEach(([estadoOct, nombres]) =>
        nombres.forEach(nombre => estadoPorClave.set(normalizar(nombre), estadoOct)));

    atletas = [...porNombre.values()].sort((a, b) => a.clave.localeCompare(b.clave));
    atletas.forEach(atleta => {
        atleta.estadoOct = estadoPorClave.get(atleta.clave) || null;
        // FALTA: su fila de octubre (si existe) son los datos de febrero arrastrados, no un resultado de octubre
        if (atleta.estadoOct === 'FALTA') delete atleta.tests[TEST_OCT];
    });
}

// Respaldo para atletas sin estado oficial del entrenador
function estadoAutomatico(feb, oct) {
    if (!oct) return 'FALTA';
    if (!feb) return 'INICIAL';
    const pct = (oct.metros - feb.metros) / feb.metros * 100;
    return pct > 1 ? 'MEJORO' : pct < -1 ? 'DESMEJORO' : 'IGUAL';
}

function testMasReciente(atleta) {
    const ids = Object.keys(atleta.tests).sort();
    return ids.length ? ids[ids.length - 1] : null;
}

// ---------- Estado ----------

const estado = {
    atleta: null,
    zona: '',
    rango: 'media'
};

const $ = (id) => document.getElementById(id);

// ---------- Buscador con autocompletar ----------

let sugerencias = [];
let indiceActivo = -1;

function iniciarBuscador() {
    const input = $('buscador');
    const lista = $('sugerencias');

    input.addEventListener('input', () => {
        const q = normalizar(input.value);
        indiceActivo = -1;
        sugerencias = q.length >= 2 ? atletas.filter(a => a.clave.includes(q)) : [];
        pintarSugerencias(q);
    });

    input.addEventListener('keydown', (e) => {
        if (lista.hidden || !sugerencias.length) return;
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            indiceActivo = (indiceActivo + 1) % sugerencias.length;
            marcarActiva();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            indiceActivo = (indiceActivo - 1 + sugerencias.length) % sugerencias.length;
            marcarActiva();
        } else if (e.key === 'Enter') {
            e.preventDefault();
            seleccionarAtleta(sugerencias[indiceActivo >= 0 ? indiceActivo : 0]);
        } else if (e.key === 'Escape') {
            cerrarSugerencias();
        }
    });

    // mousedown para que se ejecute antes del blur del input
    lista.addEventListener('mousedown', (e) => {
        const item = e.target.closest('li[data-indice]');
        if (!item) return;
        e.preventDefault();
        seleccionarAtleta(sugerencias[Number(item.dataset.indice)]);
    });

    input.addEventListener('blur', cerrarSugerencias);
}

function pintarSugerencias(q) {
    const lista = $('sugerencias');
    const input = $('buscador');
    lista.innerHTML = '';

    if (q.length < 2) {
        cerrarSugerencias();
        return;
    }

    if (!sugerencias.length) {
        const li = document.createElement('li');
        li.className = 'sin-resultados';
        li.textContent = 'Sin coincidencias';
        lista.appendChild(li);
    }

    sugerencias.forEach((atleta, i) => {
        const li = document.createElement('li');
        li.id = `sug-${i}`;
        li.dataset.indice = i;
        li.setAttribute('role', 'option');
        const punto = document.createElement('span');
        punto.className = 'punto ' + (atleta.estadoOct ? ESTADOS[atleta.estadoOct].clase : 'sin-estado');
        punto.title = atleta.estadoOct ? ESTADOS[atleta.estadoOct].etiqueta : 'Sin estado oficial';
        li.append(punto, resaltar(atleta.nombre, q));
        lista.appendChild(li);
    });

    lista.hidden = false;
    input.setAttribute('aria-expanded', 'true');
}

// Resalta la coincidencia; la normalización conserva 1 carácter por letra, así que los índices coinciden
function resaltar(nombre, q) {
    const frag = document.createDocumentFragment();
    const plano = nombre.normalize('NFC');
    const inicio = normalizar(plano).indexOf(q);
    if (inicio < 0 || normalizar(plano).length !== plano.length) {
        frag.append(plano);
        return frag;
    }
    const mark = document.createElement('mark');
    mark.textContent = plano.slice(inicio, inicio + q.length);
    frag.append(plano.slice(0, inicio), mark, plano.slice(inicio + q.length));
    return frag;
}

function marcarActiva() {
    const input = $('buscador');
    $('sugerencias').querySelectorAll('li[data-indice]').forEach((li, i) => {
        const activa = i === indiceActivo;
        li.classList.toggle('activa', activa);
        li.setAttribute('aria-selected', activa);
        if (activa) {
            li.scrollIntoView({ block: 'nearest' });
            input.setAttribute('aria-activedescendant', li.id);
        }
    });
}

function cerrarSugerencias() {
    const lista = $('sugerencias');
    lista.hidden = true;
    $('buscador').setAttribute('aria-expanded', 'false');
    $('buscador').removeAttribute('aria-activedescendant');
}

function seleccionarAtleta(atleta) {
    if (!atleta) return;
    estado.atleta = atleta;
    $('buscador').value = atleta.nombre;
    cerrarSugerencias();
    $('buscador').blur();
    pintarAtleta();
    // Lleva al usuario a la selección de zona
    $('panel-atleta').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ---------- Comparación de tests ----------

function pintarAtleta() {
    const atleta = estado.atleta;
    $('panel-atleta').hidden = false;

    const feb = atleta.tests[TEST_FEB];
    const oct = atleta.tests[TEST_OCT];
    const estadoOct = atleta.estadoOct || estadoAutomatico(feb, oct);

    pintarTarjetaTest('card-feb', `Test ${TEST_INFO[TEST_FEB].etiqueta}`, feb, estadoOct === 'INICIAL'
        ? { valor: 'SIN TEST PREVIO', detalle: 'Primer test en octubre', clase: 'card-solida estado-inicial' }
        : { valor: '—', detalle: 'Sin test de febrero', clase: 'card-neutra' });
    pintarTarjetaTest('card-oct', `Test ${TEST_INFO[TEST_OCT].etiqueta}`, oct, estadoOct === 'RECUPERACION'
        ? { valor: 'EN RECUPERACIÓN', detalle: 'Sin test de octubre', clase: 'card-solida estado-recuperacion' }
        : { valor: 'NO REALIZADO', detalle: 'No realizó el test de octubre', clase: 'card-solida estado-falta' });
    pintarTarjetaMejora(estadoOct, feb, oct);

    // Zonas: se habilitan solo si hay al menos un test
    const reciente = testMasReciente(atleta);
    const zonaSelect = $('zona-select');
    zonaSelect.disabled = !reciente;
    $('sin-datos').hidden = !!reciente;
    $('zona-seccion').hidden = !reciente;
    $('aviso-feb').hidden = reciente !== TEST_FEB;
    if (!reciente) estado.zona = '';
    zonaSelect.value = estado.zona;
    pintarZona();
}

function pintarTarjetaTest(id, titulo, registro, falta) {
    const card = $(id);
    card.className = 'card' + (registro ? '' : ` ${falta.clase}`);
    card.querySelector('.card-titulo').textContent = titulo;
    card.querySelector('.card-valor').textContent = registro ? `${registro.metros} m` : falta.valor;
    card.querySelector('.card-detalle').textContent = registro
        ? `Ritmo 20': ${registro.ritmo20} /km`
        : falta.detalle;
}

// El estado oficial define color, badge y nota; el % se calcula solo si hay ambos tests
function pintarTarjetaMejora(estadoOct, feb, oct) {
    const card = $('card-mejora');
    const info = ESTADOS[estadoOct];
    const pct = feb && oct ? (oct.metros - feb.metros) / feb.metros * 100 : null;
    const signo = pct > 0 ? '+' : '';
    const textoPct = pct === null ? '—' : `${signo}${pct.toFixed(1).replace('.', ',')}%`;

    let clase = 'card-neutra';
    let valor = '—';
    let detalle;
    switch (estadoOct) {
        case 'MEJORO':
        case 'IGUAL':
        case 'DESMEJORO':
            clase = `card-estado ${info.clase}`;
            valor = textoPct;
            detalle = pct === null ? 'Sin dato de febrero para calcular' : `${signo}${oct.metros - feb.metros} m vs febrero`;
            break;
        case 'RECUPERACION':
            valor = textoPct;
            detalle = pct === null ? 'En recuperación' : 'En recuperación – referencial';
            break;
        case 'INICIAL':
            detalle = 'Primer test – línea base';
            break;
        default:
            detalle = 'No realizó el test de octubre';
    }
    if (!estado.atleta.estadoOct) detalle += ' · estado calculado (sin estado oficial)';

    card.className = `card ${clase}`;
    card.querySelector('.card-valor').textContent = valor;
    card.querySelector('.card-detalle').textContent = detalle;
    const badge = card.querySelector('.card-badge');
    badge.className = `card-badge badge ${info.clase}`;
    badge.textContent = info.badge;
}

// ---------- Selector de zona y tabla del reloj ----------

function iniciarZonas() {
    const zonaSelect = $('zona-select');
    ZONAS.forEach(z => {
        const option = document.createElement('option');
        option.value = z.id;
        option.textContent = z.nombre;
        zonaSelect.appendChild(option);
    });

    zonaSelect.addEventListener('change', () => {
        estado.zona = zonaSelect.value;
        pintarZona();
    });

    document.querySelectorAll('.rango-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            estado.rango = btn.dataset.rango;
            pintarZona();
        });
    });
}

function pintarZona() {
    const esZ7 = estado.zona === 'z7';
    const zonaSelect = $('zona-select');
    zonaSelect.className = 'select-input' + (estado.zona ? ` borde-${estado.zona}` : '');

    document.querySelectorAll('.rango-btn').forEach(btn => {
        btn.disabled = esZ7 || !estado.zona;
        btn.classList.toggle('activo', !esZ7 && btn.dataset.rango === estado.rango);
        btn.setAttribute('aria-pressed', !esZ7 && btn.dataset.rango === estado.rango);
    });
    $('z7-nota').hidden = !esZ7;

    const idTest = estado.atleta && testMasReciente(estado.atleta);
    if (!estado.zona || !idTest) {
        $('reloj-panel').hidden = true;
        $('zona-resumen').hidden = true;
        return;
    }

    const zonas = estado.atleta.tests[idTest].zonas[estado.zona];
    pintarResumenZona(zonas, esZ7);
    let segundos, rangoTexto;
    if (esZ7) {
        segundos = toSeconds(zonas.valor);
        rangoTexto = 'zona completa (≤)';
    } else if (estado.rango === 'media') {
        segundos = Math.round((toSeconds(zonas.baja) + toSeconds(zonas.alta)) / 2);
        rangoTexto = 'Media';
    } else {
        segundos = toSeconds(zonas[estado.rango]);
        rangoTexto = estado.rango === 'baja' ? 'Baja' : 'Alta';
    }

    const zonaInfo = ZONAS.find(z => z.id === estado.zona);
    $('reloj-panel').hidden = false;
    $('reloj-panel').className = `reloj-panel zona-${estado.zona}` + (esZ7 ? '' : ` rango-${estado.rango}`);
    $('lim-menos').textContent = toMMSS(segundos - 5);
    $('lim-zona').textContent = toMMSS(segundos);
    $('lim-mas').textContent = toMMSS(segundos + 5);
    $('reloj-fuente').textContent =
        `${estado.atleta.nombre} · ${zonaInfo.nombre} · ${rangoTexto} · ${TEST_INFO[idTest].nombreLargo}`;
}

// "Tu Zona X va desde Y a Z /km" con el rango completo de la zona (de baja a alta)
function pintarResumenZona(zonas, esZ7) {
    const resumen = $('zona-resumen');
    const valor = (texto) => {
        const strong = document.createElement('strong');
        strong.textContent = texto;
        return strong;
    };
    const nombreZona = ZONAS.find(z => z.id === estado.zona).nombre;

    resumen.textContent = '';
    if (esZ7) {
        resumen.append(`Tu ${nombreZona} es de `, valor(zonas.valor), ' /km o más rápido');
    } else {
        resumen.append(`Tu ${nombreZona} va desde `, valor(zonas.baja), ' a ', valor(zonas.alta), ' /km');
    }
    resumen.style.setProperty('--zona', `var(--${estado.zona})`);
    resumen.hidden = false;
}

// ---------- Inicio ----------

document.addEventListener('DOMContentLoaded', () => {
    construirAtletas();
    iniciarBuscador();
    iniciarZonas();
});
