<template>
    <div class="container">
        <section class="sec-banner">
            <div class="banner">
                <img src="@/assets/reglas.png" alt="banner del reglas">
                <h1>Módulo de Normativas y Reglamentos</h1>
            </div>
        </section>

        <section class="sec-intro">
            <div class="info-block">
                <div class="intro-1">
                    <h1>Módulo de Normativas y Reglamentos</h1>
                    <p>Conoce las políticas y estatutos que guían a nuestra universidad. En esta sección, encontrarás las
                    normativas que promueven la convivencia respetuosa, el cumplimiento de derechos y deberes, y 
                    la excelencia en el ámbito académico y administrativo. Estas reglas son fundamentales para
                    asegurar un entorno saludable, ordenado y comprometido con los valores institucionales.</p>
                </div>
                <div class="info-2">
                    <img src="/src/assets/regla1.png" alt="img de la introduccion">
                </div>
            </div>
        </section>

        <section class="modulos">
            <div class="modulo-container">
                <div class="modulo-1">
                    <h1>Módulos de la Universidad</h1>
                    <p>En esta sección, encontrarás información y acceso a los diferentes módulos de la universidad que están diseñados para apoyar tanto a los estudiantes como al personal administrativo.</p>

                    <div class="modulo-grid">
                        <div class="modulo-item">
                            <img src="/src/assets/pdf.png" alt="pdf">
                            <a href="/src/assets/pdf/disciplinario.pdf" class="modulo-boton" download="Disciplinario.pdf">Módulo Disciplinario</a>
                        </div>

                        <div class="modulo-item">
                            <img src="/src/assets/pdf.png" alt="pdf">
                            <a href="/src/assets/pdf/normativa-examenes.pdf" class="modulo-boton" download="Normativa_Examenes.pdf">Módulo de Exámenes</a>
                        </div>

                        <div class="modulo-item">
                            <img src="/src/assets/pdf.png" alt="pdf">
                            <a href="/src/assets/pdf/etica-academica.pdf" class="modulo-boton" download="Politica_Plagio_Etica_Academica.pdf">Módulo de Ética Académica</a>
                        </div>
                    </div>

                    <p>Recuerda que el acceso y cumplimiento de estos módulos es obligatorio para asegurar el correcto funcionamiento de la universidad y el desarrollo académico.</p>
                </div>

                <div class="modulo-2">
                    <img src="/src/assets/regla.jpg" alt="imagen de regla">
                </div>
            </div>
        </section>

        <section class="reglamentos">
            <div class="reglamentos-container">
                <div class="reglamento-1">
                    <h1>Reglamentos de la Universidad</h1>
                    <p>En esta sección, encontrarás los reglamentos más importantes que rigen la vida académica, administrativa y disciplinaria en nuestra universidad. Estos documentos son de cumplimiento obligatorio para todos los estudiantes, docentes y personal administrativo.</p>

                    <div class="reglamento-grid">
                        <div class="reglamento-item">
                            <img src="/src/assets/pdf.png" alt="pdf">
                            <a href="#" class="reglamento-boton" download="Reglamento_Academico.pdf">Reglamento Académico</a>
                        </div>

                        <div class="reglamento-item">
                            <img src="/src/assets/pdf.png" alt="pdf">
                            <a href="#" class="reglamento-boton" download="Reglamento_Convivencia.pdf">Reglamento de Convivencia</a>
                        </div>

                        <div class="reglamento-item">
                            <img src="/src/assets/pdf.png" alt="pdf">
                            <a href="#" class="reglamento-boton" download="Reglamento_Administrativo.pdf">Reglamento Administrativo</a>
                        </div>
                    </div>

                    <p>Es importante familiarizarse con estos reglamentos para garantizar un desarrollo armónico de las actividades académicas y administrativas dentro de nuestra comunidad universitaria.</p>
                </div>

                <div class="reglamento-2">
                    <img src="/src/assets/regla.jpg" alt="imagen de reglamento">
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
/* Añadir espacio entre secciones */
section {
    margin-bottom: 40px; /* Ajusta el valor según el espacio que necesites */
}

.sec-banner {
    position: relative;
    text-align: center;
    margin-bottom: 40px; /* Espacio debajo del banner */
}

.banner img {
    width: 100%;
    height: auto;
}

.banner h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 36px;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

/* Estilo para las secciones */
.reglamentos-container,
.modulo-container {
    display: grid;
    grid-template-columns: 1fr 1fr; /* Dos columnas de igual tamaño */
    gap: 20px; /* Espacio entre los bloques */
    align-items: start;
}

.reglamento-1, .reglamento-2,
.modulo-1, .modulo-2 {
    padding: 20px;
    border-radius: 5px;
}

.reglamento-2 img,
.modulo-2 img {
    width: 100%;
    height: auto;
    border-radius: 5px;
}

.reglamento-grid,
.modulo-grid {
    display: grid;  
    grid-template-columns: 1fr;
    gap: 15px;
}

.reglamento-item,
.modulo-item {
    display: flex;
    align-items: center;
    gap: 10px; /* Espacio entre la imagen y el texto */
}

.reglamento-item img,
.modulo-item img {
    width: 40px; /* Tamaño pequeño y profesional para el icono PDF */
    height: auto;
    border-radius: 5px;
}

.reglamento-boton,
.modulo-boton {
    display: block;
    padding: 10px;
    background-color: #00123f;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    width: 100%;
}

.reglamento-boton:hover,
.modulo-boton:hover {
    background-color: #000b2b;
}

/* Asegurar que en pantallas más pequeñas los bloques se adapten */
@media (max-width: 768px) {
    .modulo-container,
    .reglamentos-container {
        grid-template-columns: 1fr; /* Una columna en pantallas pequeñas */
    }
}

</style>
