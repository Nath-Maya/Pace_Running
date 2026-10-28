// Datos de los Tests de 20' - Club Deportivo Team Warriors
// Archivo generado a partir de datos_entrenamiento.csv (feb) y test_2026-10.csv (oct).
// Ritmos en mm:ss por km. "baja" = ritmo más lento de la zona, "alta" = ritmo más rápido.
// Z7 no tiene rango: "valor" es el límite "<=".
// Correcciones de formato en Z7 de febrero (separador mal digitado en el CSV original):
//   Jeimson Cajiao: Z7 "03.59" -> "03:59"
//   Bernardo Guerrero: Z7 "04 28" -> "04:28"
//   Leonardo Delgado: Z7 "04.39" -> "04:39"
//   Favio Lopez: Z7 "04.50" -> "04:50"
//   Jorge Alberto Ramos: Z7 "04.52" -> "04:52"
//   Carolina Restrepo: Z7 "05.06" -> "05:06"
//   Cristina Arroyo: Z7 "05.25" -> "05:25"
//   Héctor Puerres: Z7 "05.34" -> "05:34"
//   Andrea Lopez: Z7 "05-53" -> "05:53"
//   Dala Mónica: Z7 "06.07" -> "06:07"
//   Yajaira Jurado: Z7 "06-53" -> "06:53"

const TEST_INFO = {
    "2026-02": { etiqueta: "feb 2026", nombreLargo: "Test febrero 2026" },
    "2026-10": { etiqueta: "oct 2026", nombreLargo: "Test octubre 2026 (26 oct)" }
};

const tests = {
    "2026-02": [
    {"nombre":"Jonatan Almache","metros":4920,"ritmo20":"04:04","pasoHora":"04:16","zonas":{"z1":{"baja":"06:34","alta":"05:13"},"z2":{"baja":"05:12","alta":"04:46"},"z3":{"baja":"04:45","alta":"04:31"},"z4":{"baja":"04:30","alta":"04:17"},"z5":{"baja":"04:16","alta":"04:10"},"z6":{"baja":"04:09","alta":"04:00"},"z7":{"valor":"03:59"}}},
    {"nombre":"Jeimson Cajiao","metros":4918,"ritmo20":"04:04","pasoHora":"04:16","zonas":{"z1":{"baja":"06:34","alta":"05:13"},"z2":{"baja":"05:12","alta":"04:46"},"z3":{"baja":"04:45","alta":"04:31"},"z4":{"baja":"04:30","alta":"04:17"},"z5":{"baja":"04:16","alta":"04:10"},"z6":{"baja":"04:09","alta":"04:00"},"z7":{"valor":"03:59"}}},
    {"nombre":"Gio Aldana","metros":4630,"ritmo20":"04:19","pasoHora":"04:32","zonas":{"z1":{"baja":"06:59","alta":"05:33"},"z2":{"baja":"05:32","alta":"05:03"},"z3":{"baja":"05:02","alta":"04:47"},"z4":{"baja":"04:46","alta":"04:33"},"z5":{"baja":"04:32","alta":"04:25"},"z6":{"baja":"04:24","alta":"04:15"},"z7":{"valor":"04:14"}}},
    {"nombre":"Danilo Quiroga","metros":4580,"ritmo20":"04:22","pasoHora":"04:35","zonas":{"z1":{"baja":"07:03","alta":"05:36"},"z2":{"baja":"05:35","alta":"05:07"},"z3":{"baja":"05:06","alta":"04:51"},"z4":{"baja":"04:50","alta":"04:36"},"z5":{"baja":"04:35","alta":"04:28"},"z6":{"baja":"04:27","alta":"04:18"},"z7":{"valor":"04:17"}}},
    {"nombre":"Santiago Herrera","metros":4540,"ritmo20":"04:24","pasoHora":"04:38","zonas":{"z1":{"baja":"07:07","alta":"05:39"},"z2":{"baja":"05:38","alta":"05:09"},"z3":{"baja":"05:08","alta":"04:53"},"z4":{"baja":"04:52","alta":"04:39"},"z5":{"baja":"04:38","alta":"04:30"},"z6":{"baja":"04:29","alta":"04:20"},"z7":{"valor":"04:19"}}},
    {"nombre":"Adolfo Cabezas","metros":4407,"ritmo20":"04:32","pasoHora":"04:46","zonas":{"z1":{"baja":"07:20","alta":"05:50"},"z2":{"baja":"05:49","alta":"05:19"},"z3":{"baja":"05:18","alta":"05:02"},"z4":{"baja":"05:01","alta":"04:47"},"z5":{"baja":"04:46","alta":"04:39"},"z6":{"baja":"04:38","alta":"04:28"},"z7":{"valor":"04:27"}}},
    {"nombre":"Bernardo Guerrero","metros":4400,"ritmo20":"04:33","pasoHora":"04:46","zonas":{"z1":{"baja":"07:21","alta":"05:50"},"z2":{"baja":"05:49","alta":"05:19"},"z3":{"baja":"05:18","alta":"05:02"},"z4":{"baja":"05:01","alta":"04:47"},"z5":{"baja":"04:46","alta":"04:39"},"z6":{"baja":"04:38","alta":"04:29"},"z7":{"valor":"04:28"}}},
    {"nombre":"Jhonny Fontecha","metros":4370,"ritmo20":"04:35","pasoHora":"04:48","zonas":{"z1":{"baja":"07:24","alta":"05:53"},"z2":{"baja":"05:52","alta":"05:21"},"z3":{"baja":"05:20","alta":"05:05"},"z4":{"baja":"05:04","alta":"04:49"},"z5":{"baja":"04:48","alta":"04:41"},"z6":{"baja":"04:40","alta":"04:30"},"z7":{"valor":"04:29"}}},
    {"nombre":"Andrés Aramburo","metros":4363,"ritmo20":"04:35","pasoHora":"04:49","zonas":{"z1":{"baja":"07:24","alta":"05:53"},"z2":{"baja":"05:52","alta":"05:22"},"z3":{"baja":"05:21","alta":"05:05"},"z4":{"baja":"05:04","alta":"04:50"},"z5":{"baja":"04:49","alta":"04:41"},"z6":{"baja":"04:40","alta":"04:31"},"z7":{"valor":"04:30"}}},
    {"nombre":"Leonardo Delgado","metros":4222,"ritmo20":"04:44","pasoHora":"04:58","zonas":{"z1":{"baja":"07:39","alta":"06:05"},"z2":{"baja":"06:04","alta":"05:33"},"z3":{"baja":"05:32","alta":"05:15"},"z4":{"baja":"05:14","alta":"04:59"},"z5":{"baja":"04:58","alta":"04:51"},"z6":{"baja":"04:50","alta":"04:40"},"z7":{"valor":"04:39"}}},
    {"nombre":"Brayan Narvaez","metros":4199,"ritmo20":"04:46","pasoHora":"05:00","zonas":{"z1":{"baja":"07:42","alta":"06:07"},"z2":{"baja":"06:06","alta":"05:34"},"z3":{"baja":"05:33","alta":"05:17"},"z4":{"baja":"05:16","alta":"05:01"},"z5":{"baja":"05:00","alta":"04:52"},"z6":{"baja":"04:51","alta":"04:41"},"z7":{"valor":"04:40"}}},
    {"nombre":"Marcela Fernández","metros":4198,"ritmo20":"04:46","pasoHora":"05:00","zonas":{"z1":{"baja":"07:42","alta":"06:07"},"z2":{"baja":"06:06","alta":"05:34"},"z3":{"baja":"05:33","alta":"05:17"},"z4":{"baja":"05:16","alta":"05:01"},"z5":{"baja":"05:00","alta":"04:52"},"z6":{"baja":"04:51","alta":"04:42"},"z7":{"valor":"04:41"}}},
    {"nombre":"Nathalia Maya","metros":4198,"ritmo20":"04:46","pasoHora":"05:00","zonas":{"z1":{"baja":"07:42","alta":"06:07"},"z2":{"baja":"06:06","alta":"05:34"},"z3":{"baja":"05:33","alta":"05:17"},"z4":{"baja":"05:16","alta":"05:01"},"z5":{"baja":"05:00","alta":"04:52"},"z6":{"baja":"04:51","alta":"04:42"},"z7":{"valor":"04:41"}}},
    {"nombre":"Alfonso Ante","metros":4119,"ritmo20":"04:51","pasoHora":"05:06","zonas":{"z1":{"baja":"07:51","alta":"06:14"},"z2":{"baja":"06:13","alta":"05:41"},"z3":{"baja":"05:40","alta":"05:23"},"z4":{"baja":"05:22","alta":"05:07"},"z5":{"baja":"05:06","alta":"04:58"},"z6":{"baja":"04:57","alta":"04:47"},"z7":{"valor":"04:46"}}},
    {"nombre":"Favio Lopez","metros":4054,"ritmo20":"04:56","pasoHora":"05:11","zonas":{"z1":{"baja":"07:58","alta":"06:20"},"z2":{"baja":"06:19","alta":"05:46"},"z3":{"baja":"05:45","alta":"05:28"},"z4":{"baja":"05:27","alta":"05:12"},"z5":{"baja":"05:11","alta":"05:03"},"z6":{"baja":"05:02","alta":"04:51"},"z7":{"valor":"04:50"}}},
    {"nombre":"Daniel Avendaño","metros":4038,"ritmo20":"04:57","pasoHora":"05:12","zonas":{"z1":{"baja":"08:00","alta":"06:22"},"z2":{"baja":"06:21","alta":"05:48"},"z3":{"baja":"05:47","alta":"05:29"},"z4":{"baja":"05:28","alta":"05:13"},"z5":{"baja":"05:12","alta":"05:04"},"z6":{"baja":"05:03","alta":"04:53"},"z7":{"valor":"04:52"}}},
    {"nombre":"Jorge Alberto Ramos","metros":4028,"ritmo20":"04:58","pasoHora":"05:13","zonas":{"z1":{"baja":"08:01","alta":"06:22"},"z2":{"baja":"06:21","alta":"05:49"},"z3":{"baja":"05:48","alta":"05:30"},"z4":{"baja":"05:29","alta":"05:14"},"z5":{"baja":"05:13","alta":"05:05"},"z6":{"baja":"05:04","alta":"04:53"},"z7":{"valor":"04:52"}}},
    {"nombre":"Alvaro Bohorquez","metros":3970,"ritmo20":"05:02","pasoHora":"05:17","zonas":{"z1":{"baja":"08:08","alta":"06:28"},"z2":{"baja":"06:27","alta":"05:54"},"z3":{"baja":"05:53","alta":"05:35"},"z4":{"baja":"05:34","alta":"05:18"},"z5":{"baja":"05:17","alta":"05:09"},"z6":{"baja":"05:08","alta":"04:58"},"z7":{"valor":"04:57"}}},
    {"nombre":"Adriana Ciro","metros":3899,"ritmo20":"05:08","pasoHora":"05:23","zonas":{"z1":{"baja":"08:17","alta":"06:35"},"z2":{"baja":"06:34","alta":"06:00"},"z3":{"baja":"05:59","alta":"05:41"},"z4":{"baja":"05:40","alta":"05:24"},"z5":{"baja":"05:23","alta":"05:15"},"z6":{"baja":"05:14","alta":"05:03"},"z7":{"valor":"05:02"}}},
    {"nombre":"Carolina Restrepo","metros":3850,"ritmo20":"05:12","pasoHora":"05:27","zonas":{"z1":{"baja":"08:23","alta":"06:40"},"z2":{"baja":"06:39","alta":"06:05"},"z3":{"baja":"06:04","alta":"05:45"},"z4":{"baja":"05:44","alta":"05:28"},"z5":{"baja":"05:27","alta":"05:19"},"z6":{"baja":"05:18","alta":"05:07"},"z7":{"valor":"05:06"}}},
    {"nombre":"Vanessa Ruiz","metros":3850,"ritmo20":"05:12","pasoHora":"05:27","zonas":{"z1":{"baja":"08:23","alta":"06:40"},"z2":{"baja":"06:39","alta":"06:05"},"z3":{"baja":"06:04","alta":"05:45"},"z4":{"baja":"05:44","alta":"05:28"},"z5":{"baja":"05:27","alta":"05:19"},"z6":{"baja":"05:18","alta":"05:07"},"z7":{"valor":"05:06"}}},
    {"nombre":"Karolina Fierro","metros":3850,"ritmo20":"05:12","pasoHora":"05:27","zonas":{"z1":{"baja":"08:23","alta":"06:40"},"z2":{"baja":"06:39","alta":"06:05"},"z3":{"baja":"06:04","alta":"05:45"},"z4":{"baja":"05:44","alta":"05:28"},"z5":{"baja":"05:27","alta":"05:19"},"z6":{"baja":"05:18","alta":"05:07"},"z7":{"valor":"05:06"}}},
    {"nombre":"Cristina Arroyo","metros":3620,"ritmo20":"05:31","pasoHora":"05:48","zonas":{"z1":{"baja":"08:55","alta":"07:05"},"z2":{"baja":"07:04","alta":"06:28"},"z3":{"baja":"06:27","alta":"06:07"},"z4":{"baja":"06:06","alta":"05:49"},"z5":{"baja":"05:48","alta":"05:39"},"z6":{"baja":"05:38","alta":"05:26"},"z7":{"valor":"05:25"}}},
    {"nombre":"Gloria Zuñiga","metros":3615,"ritmo20":"05:32","pasoHora":"05:49","zonas":{"z1":{"baja":"08:56","alta":"07:06"},"z2":{"baja":"07:05","alta":"06:28"},"z3":{"baja":"06:27","alta":"06:08"},"z4":{"baja":"06:07","alta":"05:50"},"z5":{"baja":"05:49","alta":"05:39"},"z6":{"baja":"05:38","alta":"05:27"},"z7":{"valor":"05:26"}}},
    {"nombre":"Héctor Puerres","metros":3530,"ritmo20":"05:40","pasoHora":"05:57","zonas":{"z1":{"baja":"09:09","alta":"07:16"},"z2":{"baja":"07:15","alta":"06:38"},"z3":{"baja":"06:37","alta":"06:17"},"z4":{"baja":"06:16","alta":"05:58"},"z5":{"baja":"05:57","alta":"05:48"},"z6":{"baja":"05:47","alta":"05:35"},"z7":{"valor":"05:34"}}},
    {"nombre":"Andrea Lopez","metros":3340,"ritmo20":"05:59","pasoHora":"06:17","zonas":{"z1":{"baja":"09:40","alta":"07:41"},"z2":{"baja":"07:40","alta":"07:00"},"z3":{"baja":"06:59","alta":"06:38"},"z4":{"baja":"06:37","alta":"06:18"},"z5":{"baja":"06:17","alta":"06:07"},"z6":{"baja":"06:06","alta":"05:54"},"z7":{"valor":"05:53"}}},
    {"nombre":"Claudia Gonzalez","metros":3242,"ritmo20":"06:10","pasoHora":"06:29","zonas":{"z1":{"baja":"09:58","alta":"07:55"},"z2":{"baja":"07:54","alta":"07:13"},"z3":{"baja":"07:12","alta":"06:50"},"z4":{"baja":"06:49","alta":"06:30"},"z5":{"baja":"06:29","alta":"06:18"},"z6":{"baja":"06:17","alta":"06:04"},"z7":{"valor":"06:03"}}},
    {"nombre":"Dala Mónica","metros":3208,"ritmo20":"06:14","pasoHora":"06:33","zonas":{"z1":{"baja":"10:04","alta":"08:00"},"z2":{"baja":"07:59","alta":"07:17"},"z3":{"baja":"07:16","alta":"06:54"},"z4":{"baja":"06:53","alta":"06:34"},"z5":{"baja":"06:33","alta":"06:22"},"z6":{"baja":"06:21","alta":"06:08"},"z7":{"valor":"06:07"}}},
    {"nombre":"Karen Leon","metros":2953,"ritmo20":"06:46","pasoHora":"07:07","zonas":{"z1":{"baja":"10:56","alta":"08:41"},"z2":{"baja":"08:40","alta":"07:55"},"z3":{"baja":"07:54","alta":"07:30"},"z4":{"baja":"07:29","alta":"07:08"},"z5":{"baja":"07:07","alta":"06:55"},"z6":{"baja":"06:54","alta":"06:40"},"z7":{"valor":"06:39"}}},
    {"nombre":"Karen Hernández","metros":2856,"ritmo20":"07:00","pasoHora":"07:21","zonas":{"z1":{"baja":"11:19","alta":"08:59"},"z2":{"baja":"08:58","alta":"08:11"},"z3":{"baja":"08:10","alta":"07:45"},"z4":{"baja":"07:44","alta":"07:22"},"z5":{"baja":"07:21","alta":"07:09"},"z6":{"baja":"07:08","alta":"06:53"},"z7":{"valor":"06:52"}}},
    {"nombre":"Yajaira Jurado","metros":2850,"ritmo20":"07:01","pasoHora":"07:22","zonas":{"z1":{"baja":"11:20","alta":"09:00"},"z2":{"baja":"08:59","alta":"08:12"},"z3":{"baja":"08:11","alta":"07:46"},"z4":{"baja":"07:45","alta":"07:23"},"z5":{"baja":"07:22","alta":"07:10"},"z6":{"baja":"07:09","alta":"06:54"},"z7":{"valor":"06:53"}}},
    {"nombre":"Natalia Builes","metros":2622,"ritmo20":"07:38","pasoHora":"08:01","zonas":{"z1":{"baja":"12:19","alta":"09:47"},"z2":{"baja":"09:46","alta":"08:55"},"z3":{"baja":"08:54","alta":"08:27"},"z4":{"baja":"08:26","alta":"08:02"},"z5":{"baja":"08:01","alta":"07:48"},"z6":{"baja":"07:47","alta":"07:30"},"z7":{"valor":"07:29"}}}
],
    "2026-10": [
    {"nombre":"Jonatan Almache","metros":4960,"ritmo20":"04:02","pasoHora":"04:14","zonas":{"z1":{"baja":"06:31","alta":"05:11"},"z2":{"baja":"05:10","alta":"04:43"},"z3":{"baja":"04:42","alta":"04:28"},"z4":{"baja":"04:27","alta":"04:15"},"z5":{"baja":"04:14","alta":"04:08"},"z6":{"baja":"04:07","alta":"03:58"},"z7":{"valor":"03:57"}}},
    {"nombre":"Jeimson Cajiao","metros":4918,"ritmo20":"04:04","pasoHora":"04:16","zonas":{"z1":{"baja":"06:34","alta":"05:13"},"z2":{"baja":"05:12","alta":"04:46"},"z3":{"baja":"04:45","alta":"04:31"},"z4":{"baja":"04:30","alta":"04:17"},"z5":{"baja":"04:16","alta":"04:10"},"z6":{"baja":"04:09","alta":"04:00"},"z7":{"valor":"03:59"}}},
    {"nombre":"Danilo Quiroga","metros":4830,"ritmo20":"04:08","pasoHora":"04:21","zonas":{"z1":{"baja":"06:41","alta":"05:19"},"z2":{"baja":"05:18","alta":"04:51"},"z3":{"baja":"04:50","alta":"04:36"},"z4":{"baja":"04:35","alta":"04:22"},"z5":{"baja":"04:21","alta":"04:14"},"z6":{"baja":"04:13","alta":"04:05"},"z7":{"valor":"04:04"}}},
    {"nombre":"Jhonny Fontecha","metros":4640,"ritmo20":"04:19","pasoHora":"04:32","zonas":{"z1":{"baja":"06:58","alta":"05:32"},"z2":{"baja":"05:31","alta":"05:03"},"z3":{"baja":"05:02","alta":"04:47"},"z4":{"baja":"04:46","alta":"04:33"},"z5":{"baja":"04:32","alta":"04:25"},"z6":{"baja":"04:24","alta":"04:15"},"z7":{"valor":"04:14"}}},
    {"nombre":"Gio Aldana","metros":4630,"ritmo20":"04:19","pasoHora":"04:32","zonas":{"z1":{"baja":"06:59","alta":"05:33"},"z2":{"baja":"05:32","alta":"05:03"},"z3":{"baja":"05:02","alta":"04:47"},"z4":{"baja":"04:46","alta":"04:33"},"z5":{"baja":"04:32","alta":"04:25"},"z6":{"baja":"04:24","alta":"04:15"},"z7":{"valor":"04:14"}}},
    {"nombre":"Camilo Paeres","metros":4590,"ritmo20":"04:21","pasoHora":"04:35","zonas":{"z1":{"baja":"07:02","alta":"05:36"},"z2":{"baja":"05:35","alta":"05:06"},"z3":{"baja":"05:05","alta":"04:50"},"z4":{"baja":"04:49","alta":"04:36"},"z5":{"baja":"04:35","alta":"04:28"},"z6":{"baja":"04:27","alta":"04:18"},"z7":{"valor":"04:17"}}},
    {"nombre":"Bernardo Guerrero","metros":4552,"ritmo20":"04:24","pasoHora":"04:37","zonas":{"z1":{"baja":"07:06","alta":"05:39"},"z2":{"baja":"05:38","alta":"05:09"},"z3":{"baja":"05:08","alta":"04:52"},"z4":{"baja":"04:51","alta":"04:38"},"z5":{"baja":"04:37","alta":"04:30"},"z6":{"baja":"04:29","alta":"04:20"},"z7":{"valor":"04:19"}}},
    {"nombre":"Nathalia Maya","metros":4550,"ritmo20":"04:24","pasoHora":"04:37","zonas":{"z1":{"baja":"07:06","alta":"05:39"},"z2":{"baja":"05:38","alta":"05:09"},"z3":{"baja":"05:08","alta":"04:52"},"z4":{"baja":"04:51","alta":"04:38"},"z5":{"baja":"04:37","alta":"04:30"},"z6":{"baja":"04:29","alta":"04:20"},"z7":{"valor":"04:19"}}},
    {"nombre":"Santiago Herrera","metros":4540,"ritmo20":"04:24","pasoHora":"04:38","zonas":{"z1":{"baja":"07:07","alta":"05:39"},"z2":{"baja":"05:38","alta":"05:09"},"z3":{"baja":"05:08","alta":"04:53"},"z4":{"baja":"04:52","alta":"04:39"},"z5":{"baja":"04:38","alta":"04:30"},"z6":{"baja":"04:29","alta":"04:20"},"z7":{"valor":"04:19"}}},
    {"nombre":"Brayan Narvaez","metros":4498,"ritmo20":"04:27","pasoHora":"04:40","zonas":{"z1":{"baja":"07:11","alta":"05:43"},"z2":{"baja":"05:42","alta":"05:12"},"z3":{"baja":"05:11","alta":"04:56"},"z4":{"baja":"04:55","alta":"04:41"},"z5":{"baja":"04:40","alta":"04:33"},"z6":{"baja":"04:32","alta":"04:23"},"z7":{"valor":"04:22"}}},
    {"nombre":"Adolfo Cabezas","metros":4407,"ritmo20":"04:32","pasoHora":"04:46","zonas":{"z1":{"baja":"07:20","alta":"05:50"},"z2":{"baja":"05:49","alta":"05:19"},"z3":{"baja":"05:18","alta":"05:02"},"z4":{"baja":"05:01","alta":"04:47"},"z5":{"baja":"04:46","alta":"04:39"},"z6":{"baja":"04:38","alta":"04:28"},"z7":{"valor":"04:27"}}},
    {"nombre":"Andrés Aramburo","metros":4363,"ritmo20":"04:35","pasoHora":"04:49","zonas":{"z1":{"baja":"07:24","alta":"05:53"},"z2":{"baja":"05:52","alta":"05:22"},"z3":{"baja":"05:21","alta":"05:05"},"z4":{"baja":"05:04","alta":"04:50"},"z5":{"baja":"04:49","alta":"04:41"},"z6":{"baja":"04:40","alta":"04:31"},"z7":{"valor":"04:30"}}},
    {"nombre":"Favio Lopez","metros":4054,"ritmo20":"04:56","pasoHora":"05:11","zonas":{"z1":{"baja":"07:58","alta":"06:20"},"z2":{"baja":"06:19","alta":"05:46"},"z3":{"baja":"05:45","alta":"05:28"},"z4":{"baja":"05:27","alta":"05:12"},"z5":{"baja":"05:11","alta":"05:03"},"z6":{"baja":"05:02","alta":"04:51"},"z7":{"valor":"04:50"}}},
    {"nombre":"Marcela Fernández","metros":3910,"ritmo20":"05:07","pasoHora":"05:22","zonas":{"z1":{"baja":"08:16","alta":"06:34"},"z2":{"baja":"06:33","alta":"05:59"},"z3":{"baja":"05:58","alta":"05:40"},"z4":{"baja":"05:39","alta":"05:23"},"z5":{"baja":"05:22","alta":"05:14"},"z6":{"baja":"05:13","alta":"05:02"},"z7":{"valor":"05:01"}}},
    {"nombre":"Adriana Ciro","metros":3899,"ritmo20":"05:08","pasoHora":"05:23","zonas":{"z1":{"baja":"08:17","alta":"06:35"},"z2":{"baja":"06:34","alta":"06:00"},"z3":{"baja":"05:59","alta":"05:41"},"z4":{"baja":"05:40","alta":"05:24"},"z5":{"baja":"05:23","alta":"05:15"},"z6":{"baja":"05:14","alta":"05:03"},"z7":{"valor":"05:02"}}},
    {"nombre":"Carolina Restrepo","metros":3850,"ritmo20":"05:12","pasoHora":"05:27","zonas":{"z1":{"baja":"08:23","alta":"06:40"},"z2":{"baja":"06:39","alta":"06:05"},"z3":{"baja":"06:04","alta":"05:45"},"z4":{"baja":"05:44","alta":"05:28"},"z5":{"baja":"05:27","alta":"05:19"},"z6":{"baja":"05:18","alta":"05:07"},"z7":{"valor":"05:06"}}},
    {"nombre":"Vanessa Ruiz","metros":3850,"ritmo20":"05:12","pasoHora":"05:27","zonas":{"z1":{"baja":"08:23","alta":"06:40"},"z2":{"baja":"06:39","alta":"06:05"},"z3":{"baja":"06:04","alta":"05:45"},"z4":{"baja":"05:44","alta":"05:28"},"z5":{"baja":"05:27","alta":"05:19"},"z6":{"baja":"05:18","alta":"05:07"},"z7":{"valor":"05:06"}}},
    {"nombre":"Karolina Fierro","metros":3850,"ritmo20":"05:12","pasoHora":"05:27","zonas":{"z1":{"baja":"08:23","alta":"06:40"},"z2":{"baja":"06:39","alta":"06:05"},"z3":{"baja":"06:04","alta":"05:45"},"z4":{"baja":"05:44","alta":"05:28"},"z5":{"baja":"05:27","alta":"05:19"},"z6":{"baja":"05:18","alta":"05:07"},"z7":{"valor":"05:06"}}},
    {"nombre":"Álvaro Bohorquez","metros":3835,"ritmo20":"05:13","pasoHora":"05:29","zonas":{"z1":{"baja":"08:25","alta":"06:42"},"z2":{"baja":"06:41","alta":"06:06"},"z3":{"baja":"06:05","alta":"05:47"},"z4":{"baja":"05:46","alta":"05:30"},"z5":{"baja":"05:29","alta":"05:20"},"z6":{"baja":"05:19","alta":"05:08"},"z7":{"valor":"05:07"}}},
    {"nombre":"Gloria Zuñiga","metros":3615,"ritmo20":"05:32","pasoHora":"05:49","zonas":{"z1":{"baja":"08:56","alta":"07:06"},"z2":{"baja":"07:05","alta":"06:28"},"z3":{"baja":"06:27","alta":"06:08"},"z4":{"baja":"06:07","alta":"05:50"},"z5":{"baja":"05:49","alta":"05:39"},"z6":{"baja":"05:38","alta":"05:27"},"z7":{"valor":"05:26"}}},
    {"nombre":"Andrea Lopez","metros":3550,"ritmo20":"05:38","pasoHora":"05:55","zonas":{"z1":{"baja":"09:06","alta":"07:14"},"z2":{"baja":"07:13","alta":"06:35"},"z3":{"baja":"06:34","alta":"06:15"},"z4":{"baja":"06:14","alta":"05:56"},"z5":{"baja":"05:55","alta":"05:46"},"z6":{"baja":"05:45","alta":"05:33"},"z7":{"valor":"05:32"}}},
    {"nombre":"Gustavo Navarro","metros":3545,"ritmo20":"05:39","pasoHora":"05:55","zonas":{"z1":{"baja":"09:07","alta":"07:14"},"z2":{"baja":"07:13","alta":"06:36"},"z3":{"baja":"06:35","alta":"06:15"},"z4":{"baja":"06:14","alta":"05:56"},"z5":{"baja":"05:55","alta":"05:46"},"z6":{"baja":"05:45","alta":"05:33"},"z7":{"valor":"05:32"}}},
    {"nombre":"Héctor Puerres","metros":3530,"ritmo20":"05:40","pasoHora":"05:57","zonas":{"z1":{"baja":"09:09","alta":"07:16"},"z2":{"baja":"07:15","alta":"06:38"},"z3":{"baja":"06:37","alta":"06:17"},"z4":{"baja":"06:16","alta":"05:58"},"z5":{"baja":"05:57","alta":"05:48"},"z6":{"baja":"05:47","alta":"05:35"},"z7":{"valor":"05:34"}}},
    {"nombre":"Aura Gómez","metros":3490,"ritmo20":"05:44","pasoHora":"06:01","zonas":{"z1":{"baja":"09:15","alta":"07:21"},"z2":{"baja":"07:20","alta":"06:42"},"z3":{"baja":"06:41","alta":"06:21"},"z4":{"baja":"06:20","alta":"06:02"},"z5":{"baja":"06:01","alta":"05:52"},"z6":{"baja":"05:51","alta":"05:38"},"z7":{"valor":"05:37"}}},
    {"nombre":"Cristina Arroyo","metros":3300,"ritmo20":"06:04","pasoHora":"06:22","zonas":{"z1":{"baja":"09:47","alta":"07:47"},"z2":{"baja":"07:46","alta":"07:05"},"z3":{"baja":"07:04","alta":"06:43"},"z4":{"baja":"06:42","alta":"06:23"},"z5":{"baja":"06:22","alta":"06:12"},"z6":{"baja":"06:11","alta":"05:58"},"z7":{"valor":"05:57"}}},
    {"nombre":"Dala Mónica","metros":3270,"ritmo20":"06:07","pasoHora":"06:25","zonas":{"z1":{"baja":"09:53","alta":"07:51"},"z2":{"baja":"07:50","alta":"07:09"},"z3":{"baja":"07:08","alta":"06:47"},"z4":{"baja":"06:46","alta":"06:26"},"z5":{"baja":"06:25","alta":"06:15"},"z6":{"baja":"06:14","alta":"06:01"},"z7":{"valor":"06:00"}}},
    {"nombre":"Claudia Gonzalez","metros":3242,"ritmo20":"06:10","pasoHora":"06:29","zonas":{"z1":{"baja":"09:58","alta":"07:55"},"z2":{"baja":"07:54","alta":"07:13"},"z3":{"baja":"07:12","alta":"06:50"},"z4":{"baja":"06:49","alta":"06:30"},"z5":{"baja":"06:29","alta":"06:18"},"z6":{"baja":"06:17","alta":"06:04"},"z7":{"valor":"06:03"}}},
    {"nombre":"María Fernanda Alomia","metros":3080,"ritmo20":"06:30","pasoHora":"06:49","zonas":{"z1":{"baja":"10:29","alta":"08:20"},"z2":{"baja":"08:19","alta":"07:36"},"z3":{"baja":"07:35","alta":"07:12"},"z4":{"baja":"07:11","alta":"06:50"},"z5":{"baja":"06:49","alta":"06:38"},"z6":{"baja":"06:37","alta":"06:23"},"z7":{"valor":"06:22"}}},
    {"nombre":"Karen Hernández","metros":2856,"ritmo20":"07:00","pasoHora":"07:21","zonas":{"z1":{"baja":"11:19","alta":"08:59"},"z2":{"baja":"08:58","alta":"08:11"},"z3":{"baja":"08:10","alta":"07:45"},"z4":{"baja":"07:44","alta":"07:22"},"z5":{"baja":"07:21","alta":"07:09"},"z6":{"baja":"07:08","alta":"06:53"},"z7":{"valor":"06:52"}}},
    {"nombre":"Natalia Builes","metros":2622,"ritmo20":"07:38","pasoHora":"08:01","zonas":{"z1":{"baja":"12:19","alta":"09:47"},"z2":{"baja":"09:46","alta":"08:55"},"z3":{"baja":"08:54","alta":"08:27"},"z4":{"baja":"08:26","alta":"08:02"},"z5":{"baja":"08:01","alta":"07:48"},"z6":{"baja":"07:47","alta":"07:30"},"z7":{"valor":"07:29"}}},
    {"nombre":"Jorge Alberto Ramos","metros":2530,"ritmo20":"07:54","pasoHora":"08:18","zonas":{"z1":{"baja":"12:46","alta":"10:08"},"z2":{"baja":"10:07","alta":"09:14"},"z3":{"baja":"09:13","alta":"08:45"},"z4":{"baja":"08:44","alta":"08:19"},"z5":{"baja":"08:18","alta":"08:05"},"z6":{"baja":"08:04","alta":"07:46"},"z7":{"valor":"07:45"}}},
    {"nombre":"Jackelin Rosero","metros":2380,"ritmo20":"08:24","pasoHora":"08:49","zonas":{"z1":{"baja":"13:34","alta":"10:47"},"z2":{"baja":"10:46","alta":"09:49"},"z3":{"baja":"09:48","alta":"09:18"},"z4":{"baja":"09:17","alta":"08:50"},"z5":{"baja":"08:49","alta":"08:35"},"z6":{"baja":"08:34","alta":"08:16"},"z7":{"valor":"08:15"}}}
]
};

// Atletas inscritos que no presentaron el test de octubre (sin datos en ningún test).
const INSCRITOS_SIN_OCTUBRE = [
    "Norha Caceres",
    "Ivonne Gonzalez",
    "Liliana García",
    "Andrés de la Espriella",
    "Isabel Valderrama",
    "Victor Alexander Moreno",
    "Danilo Bernate",
    "Richard Johnston",
    "Minakshi Brand",
    "Ana Milena Claros",
    "Jhon Pereira",
    "Claudia Verónica Saavedra"
];

// Estado oficial del entrenador en el test de octubre (color del nombre en la tabla de octubre).
// Tiene prioridad sobre el cálculo automático del % de mejora.
// FALTA: no hicieron el test. Si tienen fila en tests["2026-10"], esos valores son los de febrero
// arrastrados: la app los ignora como resultado de octubre y usa febrero para zonas y reloj.
const ESTADOS_OCTUBRE = {
    MEJORO: ["Jonatan Almache", "Danilo Quiroga", "Jhonny Fontecha", "Bernardo Guerrero", "Nathalia Maya",
        "Brayan Narvaez", "Andrea Lopez", "Dala Mónica"],
    IGUAL: ["Camilo Paeres", "Vanessa Ruiz"],
    DESMEJORO: ["Marcela Fernández", "Álvaro Bohorquez", "Cristina Arroyo"],
    RECUPERACION: ["Adriana Ciro", "Gloria Zuñiga", "Héctor Puerres", "Jorge Alberto Ramos", "Norha Caceres",
        "Ivonne Gonzalez", "Liliana García"],
    INICIAL: ["Gustavo Navarro", "Aura Gómez", "Jackelin Rosero"],
    FALTA: ["Jeimson Cajiao", "Gio Aldana", "Santiago Herrera", "Adolfo Cabezas", "Andrés Aramburo", "Favio Lopez",
        "Carolina Restrepo", "Karolina Fierro", "Claudia Gonzalez", "María Fernanda Alomia", "Karen Hernández",
        "Natalia Builes", "Andrés de la Espriella", "Isabel Valderrama", "Victor Alexander Moreno", "Danilo Bernate",
        "Richard Johnston", "Minakshi Brand", "Ana Milena Claros", "Jhon Pereira", "Claudia Verónica Saavedra"]
};
