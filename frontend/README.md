PROYECTO UAC PUCARANI
- Manual de Instalación
1.⁠ ⁠Requisitos Previos
Servidor Web: Asegúrate de contar con un servidor como Apache o Nginx.
Base de Datos: MySQL o PostgreSQL configurado y operativo.
PHP: Versión 7.4 o superior.
Acceso a Internet: Para actualizaciones y acceso a recursos externos.
Certificado SSL: Opcional, recomendado para mejorar la seguridad de la plataforma.
2.⁠ ⁠Configuración Inicial del Entorno
Descarga el Proyecto: Clona o descarga el proyecto desde el repositorio correspondiente.
Descomprime los Archivos: Si el proyecto está en un archivo comprimido, extráelo en el directorio raíz de tu servidor web.
Configura la Base de Datos:
Crea una base de datos en tu servidor de MySQL o PostgreSQL.
Importa el archivo schema.sql (si está disponible) para crear las tablas y relaciones necesarias.
Actualiza el archivo de configuración (como config.php o .env) con las credenciales de la base de datos.
3.⁠ ⁠Instalación de los Módulos Principales
Página de Inicio:

Descripción Institucional, Carreras, Noticias y Calendario:
Configura el contenido inicial en la base de datos o en archivos de configuración para mostrar la descripción institucional, lista de carreras, y enlaces a noticias y eventos.
Para el calendario interactivo, asegúrate de que la base de datos esté sincronizada con el módulo de eventos.
Enlaces a Redes Sociales: Agrega las URL de las redes sociales en el archivo de configuración o panel de administración.
Sección de Carreras Académicas:

Detalles de Enfermería, Fisioterapia y Kinesiología:
Crea las entradas en la base de datos para estas carreras, incluyendo plan de estudios, duración y requisitos de ingreso.
Configura el formulario de contacto asegurándote de que envíe la información al correo electrónico adecuado.
Departamento de Investigación:

Revista Científica:
Asegúrate de tener un sistema de gestión de artículos o documentos (como un CMS).
Configura el módulo de visualización de artículos para que los usuarios puedan acceder a la revista científica.
Noticias y Eventos de Investigación:
Habilita una sección de eventos y conecta el calendario con la base de datos para que los eventos se muestren automáticamente.
Biblioteca Digital:

Recursos Académicos Digitales:
Configura un sistema de almacenamiento para los archivos digitales, asegurándote de que estén organizados por categoría o materia.
Sistema de Registro de Libros:
Instala y configura un sistema de gestión de biblioteca, permitiendo registrar, prestar y devolver libros físicos y digitales.
Funcionalidades Estudiantiles y para Egresados:

Plataforma de Gestión Estudiantil:
Configura el módulo de historial académico, inscripción y pagos.
Vincula el acceso a Moodle si es parte del sistema.
Portal para Egresados y Bolsa de Trabajo:
Configura el módulo para que los egresados puedan ver oportunidades laborales y participar en el sistema de bolsa de trabajo.
Sistema de Normativas y Reserva de Libros:
Añade un repositorio de normativas y habilita el sistema de reservas en la biblioteca.
Noticias, Blog y Funcionalidades Avanzadas:

Noticias y Eventos:
Configura el panel dinámico de noticias y el calendario filtrable en la base de datos.
Testimonios de Estudiantes y Egresados:
Añade un módulo para que los usuarios puedan ver y dejar testimonios.
FAQ, Admisiones y Becas:
Añade un módulo para gestionar preguntas frecuentes, requisitos de admisión y becas.
Blog Institucional y Plataforma Multilingüe:
Configura el blog para que los administradores puedan crear publicaciones y habilita el soporte multilingüe en el sistema.
Actividades Pastorales y Extracurriculares:
Crea una sección en la base de datos para actividades y eventos pastorales y configura un calendario específico para estas actividades.
4.⁠ ⁠Configuración de Seguridad
SSL: Instala un certificado SSL y configura el servidor para que redirija todo el tráfico a HTTPS.
Permisos de Archivos: Asegúrate de que los archivos importantes (como configuraciones) tengan permisos restringidos.
Contraseñas y Roles: Define roles de usuario y contraseñas seguras para limitar el acceso a áreas críticas de la plataforma.
5.⁠ ⁠Pruebas y Despliegue
Revisa Cada Módulo:
Verifica que cada módulo funcione como se espera, incluyendo el acceso a noticias, testimonios, carreras y reservas en la biblioteca.
Pruebas de Usuario:
Realiza pruebas con usuarios para asegurar la usabilidad y el acceso a la información necesaria.
Despliegue Final:
Una vez realizadas las pruebas, despliega la plataforma en un entorno de producción.
6.⁠ ⁠Mantenimiento y Actualizaciones
Actualización de Contenidos: Programa la actualización de noticias, eventos y artículos periódicamente.
Soporte Técnico: Define un procedimiento para el soporte técnico en caso de problemas o necesidades de actualización.

------------------------------------------------------

Manual de Usuario
Página de Inicio y Sección de Carreras Académicas
Página de Inicio

Descripción Institucional: Al ingresar, encontrarás una introducción sobre la misión, visión y valores de la institución.
Carreras Ofrecidas: En esta sección, podrás ver un listado de todas las carreras que la institución ofrece. Haz clic en cada carrera para ver más detalles.
Noticias y Actualizaciones: Visualiza las noticias más recientes y relevantes para la comunidad académica. Para ver más, haz clic en la noticia de tu interés.
Calendario Interactivo: Consulta eventos próximos, exámenes y actividades académicas. Puedes hacer clic en cada fecha para obtener más detalles.
Enlaces a Redes Sociales: Acceso directo a las redes sociales de la institución en la parte inferior de la página.
Instrucciones de Uso:

Navega por la página de inicio y selecciona las áreas de interés haciendo clic en los enlaces proporcionados para obtener más detalles.
Sección de Carreras Académicas

Detalles de Enfermería, Fisioterapia y Kinesiología: Cada carrera incluye información detallada como el plan de estudios, duración y requisitos de ingreso.
Formulario de Contacto: Puedes enviar consultas específicas relacionadas con cada carrera.
Instrucciones de Uso:

Accede a "Carreras Académicas" desde el menú principal, selecciona la carrera deseada y utiliza el formulario de contacto si tienes preguntas específicas.
Departamentos Académicos y Biblioteca
Departamento de Investigación

Acceso a la Revista Científica: Permite consultar artículos de investigación relevantes y actualizados en el campo de estudio de los usuarios.
Noticias y Eventos de Investigación: Información sobre próximos eventos, conferencias y actividades de investigación.
Instrucciones de Uso:

Accede a "Departamento de Investigación" en el menú principal, selecciona "Revista Científica" o "Eventos" para consultar el contenido.
Biblioteca Digital

Recursos Académicos Digitales: Puedes acceder a una amplia variedad de recursos digitales, como libros, artículos y materiales de estudio.
Sistema de Registro de Libros: Para los bibliotecarios, se ofrece una opción de registro que permite gestionar préstamos y devoluciones.
Instrucciones de Uso:

Desde el menú, dirígete a "Biblioteca Digital" para explorar los recursos. Los bibliotecarios pueden gestionar préstamos a través del sistema de registro.
Funcionalidades Estudiantiles y para Egresados
Registro y Toma de Datos Estudiantiles

Plataforma de Gestión Estudiantil: Los estudiantes pueden acceder a su historial académico, realizar inscripciones y gestionar pagos.
Acceso a Moodle: Redirección a la plataforma de aprendizaje para acceder a cursos en línea.
Instrucciones de Uso:

Accede a "Gestión Estudiantil" en el menú para revisar tu historial académico o realizar inscripciones, y selecciona "Moodle" para acceder a tus cursos.
Portal para Egresados y Bolsa de Trabajo

Portal para Egresados: Acceso a información relevante para egresados, como oportunidades laborales y eventos.
Bolsa de Trabajo: Consulta ofertas laborales disponibles para egresados.
Instrucciones de Uso:

Dirígete a "Portal para Egresados" y selecciona la opción deseada para explorar oportunidades y ofertas laborales.
Módulo de Normativas y Reglamentos

Normativas y Reglamentos: Consulta documentos oficiales, incluyendo el reglamento estudiantil y normativas académicas.
Instrucciones de Uso:

Selecciona "Normativas" en el menú para acceder a la lista de documentos descargables.
Sistema de Reserva de Libros

Reserva de Libros: Los estudiantes pueden realizar reservas de libros en la biblioteca desde esta sección.
Instrucciones de Uso:

Accede a "Biblioteca" y selecciona "Reserva de Libros" para realizar la reserva del material deseado.
Noticias, Blog y Funcionalidades Avanzadas
Noticias y Eventos

Panel Dinámico y Calendario Filtrable: Sección donde se presentan noticias recientes y un calendario que permite filtrar eventos por fechas.
Instrucciones de Uso:

En "Noticias y Eventos", explora el panel dinámico o utiliza el filtro del calendario para encontrar eventos específicos.
Testimonios de Estudiantes y Egresados

Testimonios: Experiencias y relatos de estudiantes y egresados compartidos en esta sección.
Instrucciones de Uso:

Accede a "Testimonios" en el menú para leer sobre las experiencias de otros estudiantes y egresados.
Preguntas Frecuentes (FAQ)

FAQ: Respuestas a las dudas más comunes sobre el uso de la plataforma, admisiones y becas.
Instrucciones de Uso:

Selecciona "FAQ" en el menú y utiliza el buscador para encontrar respuestas a tus preguntas.
Sección de Admisiones y Becas

Admisiones y Becas: Información sobre los requisitos y el proceso de solicitud para becas y admisiones.
Instrucciones de Uso:

En el menú, selecciona "Admisiones y Becas" para conocer más sobre los requisitos y el proceso de aplicación.
Blog Institucional

Blog: Publicaciones y artículos de interés académico y profesional.
Instrucciones de Uso:

Ve a "Blog" en el menú principal para explorar publicaciones recientes.
Plataforma Multilingüe

Idioma: Cambia el idioma de la plataforma para facilitar la navegación a usuarios de diferentes lenguas.
Instrucciones de Uso:

Selecciona el idioma deseado en la parte superior de la plataforma para cambiar el idioma de la interfaz.
Actividades Pastorales y Extracurriculares

Actividades Pastorales: Información sobre actividades de desarrollo personal y espiritual para estudiantes.
Instrucciones de Uso:

Selecciona "Actividades Pastorales" en el menú para ver el calendario y registrarte en actividades de interés.
