<template>
  <section class="banner-investigacion">
    <div class="banner">
        <img src="@/assets/Pucarani/INFRAESTRUCTURA/PANO_20241010_113630.jpg" alt="Banner de investigación">
        <h1>Investigaciones</h1>
        <p>Descubre los avances y proyectos de investigación que se están llevando a cabo.</p>
    </div>
</section>
  
  <div class="investigacion-container">

    <!-- Encabezado con Imagen de Fondo -->
    


    <!-- Enlace destacado a la revista con fondo azul -->
    <div class="enlace-investigacion fondo-azul">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST2tpyaBIN5qfsMHs2fj1jVr7xtMhOC5oItg&s" alt="Imagen Investigación" class="enlace-image">
      <a href="https://conr-bo.com/index.php/conr" target="_blank" class="button highlight-link">Nuestra revista</a>
    </div>

    <!-- Tarjetas de Noticias -->
    <div class="noticias-section">
      <h2>NOTICIAS</h2>
      <div class="noticias-grid">
        <div v-for="noticia in noticias" :key="noticia.titulo" class="noticia-card">
          <img :src="noticia.imagen" alt="Imagen Noticia" class="noticia-imagen">
          <div class="noticia-contenido">
            <h3>{{ noticia.titulo }}</h3>
            <p>{{ noticia.descripcion }}</p>
            <p class="noticia-fecha">{{ noticia.fecha }}</p>
            <a :href="noticia.link" target="_blank" class="noticia-link">Más información →</a>
          </div>
        </div>
        <!-- Tarjeta de enlace general a todas las noticias -->
        <div class="noticia-card enlace-general">
          <div class="noticia-contenido">
            <h3>Conoce todas nuestras noticias</h3>
            <p>Junto al Instituto de Investigación Aplicada</p>
            <a href="https://iia.sis-ucb.online/" target="_blank" class="noticia-link">Más información →</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Sección de Proyectos de Investigación -->
    <div class="proyectos-section">
      <h2>Proyectos de Investigación Destacados</h2>
      <div class="proyectos-grid">
        <div class="proyecto-card" v-for="proyecto in proyectos" :key="proyecto.titulo">
          <h3>{{ proyecto.titulo }}</h3>
          <p>{{ proyecto.descripcion }}</p>
          <a :href="proyecto.documento" target="_blank" class="button">Ver Documento</a>
        </div>
      </div>
    </div>

    <!-- Sección de Contactos -->
    <div class="contactos-section">
      <h2>Contactos del Departamento de Investigación</h2>
      <div class="contactos-grid">
        <div class="contacto-card" v-for="contacto in contactos" :key="contacto.email">
          <h3>{{ contacto.nombre }}</h3>
          <p>{{ contacto.cargo }}</p>
          <p>{{ contacto.email }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Investigacion',
  data() {
    return {
      noticias: [
        {
          titulo: 'Ingeniero Civil de la UCB alcanza primer lugar mundial en programa Erasmus Mundus de la Unión Europea',
          descripcion: 'Luis Ignacio Jiménez Astorga, graduado y ex docente de la Universidad Católica Boliviana, logra una...',
          fecha: '30/9/2024',
          imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpw2CsN57V_-FlTWQ8TkSnJHSNVPStcxWJjg&s',
          link: 'https://enlace-noticia-1.com'
        },
        {
          titulo: 'La Universidad Católica Boliviana y CASS promueven la innovación en circuitos electrónicos y neurociencia',
          descripcion: 'El evento realizado en el campus de la UCB exploró avances tecnológicos en circuitos y neurociencia...',
          fecha: '12/9/2024',
          imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj44a7ob3GlI__a92V9RGP27xaLr-QSUdvgg&s',
          link: 'https://enlace-noticia-2.com'
        },
        {
          titulo: 'M.Sc. Gabriel Rojas gana beca de investigación en la Universidad de Delaware',
          descripcion: 'Docente de Ingeniería Mecatrónica trabaja en un proyecto sobre el impacto del calentamiento global e...',
          fecha: '11/9/2024',
          imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrX95tGo-wX83OrnknTTHL0-tCx2arbr1-NA&s',
          link: 'https://enlace-noticia-3.com'
        }
      ],
      proyectos: [
        {
          titulo: 'Proyecto de Salud Comunitaria',
          descripcion: 'Investigación enfocada en el acceso a servicios de salud en áreas rurales, con la colaboración de estudiantes y expertos en el área de medicina y ciencias sociales.',
          documento: 'https://docs.bvsalud.org/biblioref/2018/11/964760/8-guia-fisioterapia-lepra.pdf'
        },
        {
          titulo: 'Rehabilitación Física',
          descripcion: 'Estudio sobre técnicas de fisioterapia para la recuperación de pacientes con diversas condiciones físicas, aplicando teorías modernas en el campo de la rehabilitación.',
          documento: 'https://www.saludcastillayleon.es/profesionales/es/programas-guias-clinicas/guias-practica-clinica/guias-clinicas.ficheros/1105660-Fisioterapia.PDF'
        },
        {
          titulo: 'Enfermería Integral',
          descripcion: 'Análisis de técnicas de enfermería para mejorar el cuidado de pacientes, basado en principios teóricos y prácticas clínicas.',
          documento: 'https://mawil.us/wp-content/uploads/2021/04/fundamentos-teoricos-y-practicos-de-enfermeria.pdf'
        }
      ],
      contactos: [
        { nombre: 'Lic. Carlos Rivera', cargo: 'Coordinador de Investigación', email: 'crivera@ucb.edu.bo' },
        { nombre: 'Dr. Ana Sánchez', cargo: 'Jefa de Proyectos Científicos', email: 'asanchez@ucb.edu.bo' }
      ]
    };
  }
};
</script>

<style scoped>
  /* Estilo para la sección de investigación */
.banner-investigacion {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  overflow: hidden;
}


.banner-investigacion .banner img {
  width: 100%;
  height: auto;
  filter: brightness(0.5); 
  /* Oscurece la imagen para resaltar el texto */
}

.banner-investigacion .banner h1 {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3em;
    font-weight: bold;
    margin: 0;
    padding: 0;
    color: #ffffff;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7); /* Sombra en el texto */
}

.banner-investigacion .banner p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.2em;
    color: #ffffff;
    max-width: 70%;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7); /* Sombra en el texto */
    margin: 0;
    padding: 10px;
    line-height: 1.5;
}



.highlight-text {
  font-size: 1.2em;
  font-weight: bold;
  color: #ffdd57;
}

.enlace-investigacion.fondo-azul {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
  background-color: #004080; /* Fondo azul */
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);

}

.enlace-image {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
  transition: transform 0.3s ease;
}

.enlace-image:hover {
  transform: scale(1.1);
}

.highlight-link {
  font-size: 1.2em;
  font-weight: bold;
  color: #ffffff;
  background-color: #ffdd57;
  padding: 14px 28px;
  border-radius: 10px;
  transition: background-color 0.3s, transform 0.3s;
}

.highlight-link:hover {
  background-color: #ffc107;
  transform: scale(1.05);
}

.noticias-section {
  margin-top: 40px;
}

.noticias-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.noticia-card {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.noticia-card:hover {
  transform: translateY(-5px);
}

.noticia-imagen {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.noticia-contenido {
  padding: 15px;
  text-align: left;
}

.noticia-fecha {
  font-size: 0.9em;
  color: #777;
  margin-bottom: 10px;
}

.noticia-link {
  display: inline-block;
  margin-top: 10px;
  font-weight: bold;
  color: #007bff;
  text-decoration: none;
}

.noticia-link:hover {
  text-decoration: underline;
}

.enlace-general {
  background-color: #4a4a4a;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.enlace-general .noticia-link {
  color: #ffdd57;
}

.proyectos-section,
.contactos-section {
  margin-top: 40px;
  text-align: center;
}

.contacto-card{
  margin-bottom: 50px;
}

.proyectos-grid,
.contactos-grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.proyecto-card,
.contacto-card {
  width: 300px;
  padding: 20px;
  background-color: #e0f7fa;
  color: #050771;
  border: 1px solid #cccccc;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.proyecto-card:hover,
.contacto-card:hover {
  transform: scale(1.05);
}

.button {
  font-size: 1.1em;
  padding: 10px 20px;
  background-color: #050771;
  color: #ffffff;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.button:hover {
  background-color: #050771;
  transform: scale(1.05);
}
</style>
