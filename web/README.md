# Calculador de Zonas de Entrenamiento - Versión Web

## 📱 Características
- ✅ Responsive (funciona en celular, tablet y desktop)
- ✅ Interfaz moderna y fácil de usar
- ✅ Cálculo automático de zonas con variaciones de ±5 segundos
- ✅ Datos ordenados alfabéticamente
- ✅ Diseño atractivo con gradientes y animaciones

## 🚀 Cómo usar localmente

1. Abre el archivo `web/index.html` en tu navegador
2. Escribe 2+ letras de tu nombre o apellido y elige tu nombre (flechas + Enter o clic)
3. Revisa la comparación feb 2026 vs oct 2026
4. Elige zona y rango (Baja / Media / Alta) y verás los rangos para configurar el reloj

## 🌐 Cómo publicar en internet (GRATIS)

### Opción 1: GitHub Pages (Recomendada)

1. Crea una cuenta en GitHub.com (si no tienes)
2. Crea un nuevo repositorio
3. Sube estos archivos:
   ```
   la carpeta web/ completa
   ```
4. Ve a Settings > Pages
5. Selecciona la rama "main" y carpeta "root"
6. ¡Tu app estará en: https://tu-usuario.github.io/nombre-repositorio/

### Opción 2: Netlify (Más fácil)

1. Ve a netlify.com
2. Arrastra la carpeta `web` al navegador
3. ¡Listo! Te dará un link para compartir

### Opción 3: Vercel

1. Ve a vercel.com
2. Importa tu proyecto
3. Deploy automático

## 📂 Estructura de archivos

```
web/
├── index.html                    # Página principal
├── css/styles.css                # Estilos responsive
├── js/app.js                     # Lógica de la aplicación
├── data/tests.js                 # Datos que usa la app (todos los tests)
├── data/datos_entrenamiento.csv  # CSV original test feb 2026 (referencia)
├── data/test_2026-10.csv         # CSV original test oct 2026 (referencia)
└── README.md                     # Este archivo
```

## 🔧 Personalización

Para cambiar datos o agregar un test nuevo, edita `data/tests.js`: agrega una clave nueva en `tests`
(ej. `"2027-03": [...]`) y su etiqueta en `TEST_INFO`. Los datos están en un `.js` (no en el CSV) para que
la app funcione abriendo `index.html` directamente, sin servidor.

## 💡 Compartir con otras personas

Una vez publicado en GitHub Pages, Netlify o Vercel:
- Copia el link
- Compártelo por WhatsApp, email, etc.
- Cualquier persona puede abrirlo en su celular o computadora
- No necesitan instalar nada

## 📱 Probado en:
- ✅ iPhone/Safari
- ✅ Android/Chrome
- ✅ Desktop/Chrome, Firefox, Safari, Edge
