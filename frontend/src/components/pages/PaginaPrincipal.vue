<template>
  <div>
    <!-- Banner -->
    <div class="hero fade-in">
      <h1>Bienvenidos a Nuestra Universidad</h1>
    </div>

    <!-- Noticias -->
    <section class="noticiaS">
  <div class="title-notis">
    <h2>Noticias</h2>
  </div>
  <div class="container-noti">
    <!-- Noticia de Enfermería -->
    <div class="noti">
      <figure>
        <img
          src="@/assets/Pucarani/ENFERMERIA/IMG_20230422_142959.jpg"
          alt="Noticias de Enfermería"
        />
      </figure>
      <div class="contenido-noti">
        <h3>Innovaciones en el Cuidado de Pacientes</h3>
        <p>
          Estudiantes de Enfermería participan en un nuevo programa que utiliza tecnologías avanzadas para mejorar la atención a pacientes en áreas rurales.
        </p>
        <a href="#">Leer Más</a>
      </div>
    </div>

    <!-- Noticia de Fisioterapia -->
    <div class="noti">
      <figure>
        <img
          src="@/assets/FOTOS SELEC UAC PUCARANI/FOTOS FISOTERAPIA/20241008_131452.jpg"
          alt="Noticias de Fisioterapia"
        />
      </figure>
      <div class="contenido-noti">
        <h3>Técnicas Innovadoras de Rehabilitación</h3>
        <p>
          El área de Fisioterapia presenta un taller de técnicas de rehabilitación con expertos internacionales, proporcionando a los estudiantes herramientas modernas de recuperación.
        </p>
        <a href="#">Leer Más</a>
      </div>
    </div>

    <!-- Noticia adicional para Enfermería -->
    <div class="noti">
      <figure>
        <img
          src="@/assets/FOTOS SELEC UAC PUCARANI/FOTOS ENFERMERIA/IMG_20241019_150031.jpg"
          alt="Investigación en Enfermería"
        />
      </figure>
      <div class="contenido-noti">
        <h3>Investigación en Salud Comunitaria</h3>
        <p>
          Profesores y estudiantes de Enfermería lideran un proyecto para mejorar la salud preventiva en comunidades vulnerables.
        </p>
        <a href="#">Leer Más</a>
      </div>
    </div>

    <!-- Noticia adicional para Fisioterapia -->
    <div class="noti">
      <figure>
        <img
          src="@/assets/FOTOS SELEC UAC PUCARANI/FOTOS FISOTERAPIA/20241008_141147.jpg"
          alt="Clínica de Fisioterapia"
        />
      </figure>
      <div class="contenido-noti">
        <h3>Apertura de Clínica de Fisioterapia en Campus</h3>
        <p>
          Los estudiantes de Fisioterapia ahora pueden realizar sus prácticas en la nueva clínica del campus, atendiendo a pacientes y aprendiendo en un ambiente real.
        </p>
        <a href="#">Leer Más</a>
      </div>
    </div>
  </div>
</section>


    <!-- Nuestras Carreras -->
     <section class="carre">
      
    <h1>Nuestras carreras </h1>


   
    <div class="cards-container">

    <div class="card-carreras">
        <div class="face front">
            <img src="@/assets/FOTOS SELEC UAC PUCARANI/FOTOS ENFERMERIA/IMG_20241019_150031.jpg" alt="">
            <h3>Enfermería</h3>
        </div>
        <div class="face back">
            <h3>Licenciatura en Enfermería</h3>
            <p>La Licenciatura en Enfermería forma profesionales con las habilidades y conocimientos necesarios para cuidar la salud de quienes más lo necesitan.</p>
            <div class="link">
                <router-link to="/enfermeria">Ver más</router-link>
            </div>
        </div>
    </div>

    <div class="card-carreras">
        <div class="face front">
            <img src="@/assets/FOTOS SELEC UAC PUCARANI/FOTOS FISOTERAPIA/20241008_134008.jpg" alt="">
            <h3>Fisioterapia y Kinesiología</h3>
        </div>
        <div class="face back">
            <h3>Fisioterapia y Kinesiología</h3>
            <p>La Licenciatura en Fisioterapia y Kinesiología forma profesionales con las habilidades y conocimientos necesarios para promover y restaurar la salud física de quienes más lo necesitan.</p>
            <div class="link">
                <router-link to="/fisioterapia">Ver más</router-link>
            </div>
        </div>
    </div>
</div>
</section>

    <!-- Misión y Visión -->
    <div class="mision-vision-container fade-in">
    <div class="mision-vision-text">
        <h2>Misión</h2>
        <p>Nuestra misión es proporcionar una educación de calidad para formar profesionales altamente calificados.</p>
    </div>

    <div class="mision-vision-logo">
        <img src="@/assets/UAC.png" alt="Logo UAC" />
    </div>

    <div class="mision-vision-text">
        <h2>Visión</h2>
        <p>Nuestra visión es ser una de las mejores universidades del país, reconocida por su excelencia académica.</p>
    </div>
</div>


    <!-- Testimonios de Estudiantes -->
    <div class="card testimonios fade-in">
      <h2>Testimonios de Estudiantes</h2>
      <div class="testimonios-container fade-in">
        <div class="mini-card">
          <img src="@/assets/U/LAMPARA ENFERMERIA 1.png" alt="Testimonio de Enfermería" />
        </div>
        <div class="testimonios-list">
          <div class="testimonio">
            <p>"La carrera de Enfermería me ha brindado la oportunidad de ayudar a las personas en momentos críticos."</p>
            <h4>- Ana Pérez</h4>
          </div>
          <div class="testimonio">
            <p>"Gracias a los profesores, me siento preparada para enfrentar cualquier desafío en el campo."</p>
            <h4>- Luis Gómez</h4>
          </div>
        </div>
      </div>
      <div class="testimonios-container fade-in">
        <div class="mini-card">
          <img src="@/assets/U/LOGO FISIOTERAPIA Y KINESIOLOGIA 22222.png" alt="Testimonio de Fisioterapia" />
        </div>
        <div class="testimonios-list">
          <div class="testimonio">
            <p>"El enfoque práctico de la carrera de Fisioterapia ha sido fundamental para mi formación."</p>
            <h4>- Juan Martínez</h4>
          </div>
          <div class="testimonio">
            <p>"He aprendido técnicas valiosas que me ayudarán en mi carrera profesional."</p>
            <h4>- María López</h4>
          </div>
        </div>
      </div>
      <div class="button-vermas">
        <router-link to="/testimonios">Ver más</router-link>

      </div>
    </div>

    <!-- Galería -->
    <div class="card galeria fade-in">
  <h2>Nuestra Galería</h2>
  <div class="galeria-grid">
    <div class="galeria-item">
      <img src="@/assets/elalto.jpg" alt="Galería 1" />
    </div>
    <div class="galeria-item">
      <img src="@/assets/elalto1.jpg" alt="Galería 2" />
    </div>
    <div class="galeria-item">
      <img src="@/assets/elalto2.jpg" alt="Galería 3" />
    </div>
    <div class="galeria-item">
      <img src="@/assets/elalto3.jpg" alt="Galería 4" />
    </div>
    <div class="galeria-item">
      <img src="@/assets/elalto.jpg" alt="Galería 6" />
    </div>
    <div class="galeria-item">
      <img src="@/assets/elalto.jpg" alt="Galería 6" />
    </div>
    <div class="galeria-item">
      <img src="@/assets/elalto2.jpg" alt="Galería 3" />
    </div>
    <div class="galeria-item">
      <img src="@/assets/elalto.jpg" alt="Galería 6" />
    </div>
  </div>
</div>

  </div>
  

</template>

<script>
export default {
  name: "PaginaPrincipal",
  data() {
    return {
      currentIndex: 0,
      carreraIndex: 0,
      descriptions: {
        enfermeria: false,
        fisioterapia: false,
      },
      autoSlideInterval: null,
      carouselItems: [
        { image: "@/assets/car.jpg", altText: "Carrusel 1", caption: "Primera Imagen" },
        { image: "@/assets/U/1.jpg", altText: "Carrusel 2", caption: "Segunda Imagen" },
        { image: "@/assets/car.jpg", altText: "Carrusel 3", caption: "Tercera Imagen" },
      ],
    };
  },
  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".fade-in");
    sections.forEach((section) => observer.observe(section));

    this.startAutoSlide();
  },
  beforeDestroy() {
    this.stopAutoSlide();
  },
  methods: {
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.carouselItems.length) % this.carouselItems.length;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length;
    },
    goToCareer(carrera) {
      this.$router.push({ name: carrera });
    },
    startAutoSlide() {
      this.autoSlideInterval = setInterval(() => {
        this.nextSlide();
      }, 5000);
    },
    stopAutoSlide() {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    },
    prevCareer() {
      this.carreraIndex = (this.carreraIndex - 1 + 2) % 2;
    },
    nextCareer() {
      this.carreraIndex = (this.carreraIndex + 1) % 2;
    },
  },
};
</script>
<style scoped>
/* Fondo de pantalla (sección completa) */
.hero {
  background-image: url("@/assets/FOTOS SELEC UAC PUCARANI/INFRAESTRUCTURA UAC/IMG_20220317_144458.jpg");
  background-size: cover;
  background-position: center;
  filter: brightness(0.6);
  height: 620px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  font-size: 2rem;
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
/**noticiaS */
/* Estilos para la sección de Noticias */
.noticiaS {
  background-color: #f8f9fa;
  padding: 40px 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.title-notis h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #0056b3;
  margin-bottom: 30px;
  font-weight: bold;
}

.container-noti {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.noti {
  width: 100%;
  max-width: 300px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.noti:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.noti figure {
  margin: 0;
  overflow: hidden;
  height: 180px;
}

.noti img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.noti:hover img {
  transform: scale(1.1);
}

.contenido-noti {
  padding: 20px;
  text-align: center;
}

.contenido-noti h3 {
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 10px;
}

.contenido-noti p {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 15px;
}

.contenido-noti a {
  text-decoration: none;
  color: #0056b3;
  font-weight: bold;
  border: 1px solid #0056b3;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.contenido-noti a:hover {
  background-color: #0056b3;
  color: #fff;
}

/* Responsividad para móviles */
@media only screen and (max-width: 768px) {
  .container-noti {
    flex-direction: column;
    align-items: center;
  }

  .noti {
    max-width: 90%;
  }
}


/* Sección de Carreras */

.cards-container {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
}

.card-carreras {
    position: relative;
    width: 300px;
    height: 350px;
    margin: 20px;
}

.card-carreras .face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 10px;
    overflow: hidden;
    transition: .5s;
}

.card-carreras .front {
    transform: perspective(600px) rotateY(0deg);
    box-shadow: 0 5px 10px #000;
}

.card-carreras .front img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card-carreras .front h3 {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 45px;
    line-height: 45px;
    color: #fff;
    background: rgba(5, 33, 195, 0.4);
    text-align: center;
}

.card-carreras .back {
    transform: perspective(600px) rotateY(180deg);
    background: rgb(24, 106, 187);
    padding: 15px;
    color: #f3f3f3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    box-shadow: 0 5px 10px #000;
}

.card-carreras .back .link {
    border-top: solid 1px #f3f3f3;
    height: 50px;
    line-height: 50px;
}

.card-carreras .back .link a {
    color: #f3f3f3;
}

.card-carreras .back h3 {
    font-size: 30px;
    margin-top: 20px;
    letter-spacing: 2px;
    color:rgb(193, 187, 6);
}

.card-carreras .back p {
    letter-spacing: 1px;
}

.card-carreras:hover .front {
    transform: perspective(600px) rotateY(180deg);
}

.card-carreras:hover .back {
    transform: perspective(600px) rotateY(360deg);
}


button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
}

.galeria {
  padding: 40px 20px;
  text-align: center;
  background-color: #f0f4f8;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.galeria h2 {
  font-size: 2.5rem;
  color: #0056b3;
  margin-bottom: 30px;
  font-weight: bold;
}

.galeria-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
  padding: 20px 0;
}

.galeria-item {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.galeria-item:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.galeria-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.galeria-item:hover img {
  transform: scale(1.1);
}

.fade-in {
  opacity: 0;
  animation: fadeInAnimation 1s forwards;
}

@keyframes fadeInAnimation {
  to {
    opacity: 1;
  }
}

.testimonios-container {
  display: flex;
  margin-bottom: 20px;
}

.mini-card {
  width: 150px;
  margin-right: 20px;
}

.mini-card img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.testimonios-list {
  flex-grow: 1;
}

.testimonio {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
}

.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

.mision-vision-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 40px; /* Espacio entre los elementos */
    padding: 40px;
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1); /* Sombra suave */
    max-width: 1200px;
    margin: 0 auto; /* Centrado horizontal */
    animation: fade-in 0.5s ease-in-out;
}

.mision-vision-text {
    flex: 1;
    text-align: center;
}

.mision-vision-text h2 {
    font-size: 1.8em;
    color: #003366; /* Color profesional y formal */
    margin-bottom: 10px;
}

.mision-vision-text p {
    font-size: 1.1em;
    color: #333;
    line-height: 1.6;
}

.mision-vision-logo img {
    width: 150px; /* Ajusta según el tamaño deseado */
    height: auto;
    display: block;
    margin: 0 auto;
    border-radius: 50%; /* Opcional, hace que el logo sea circular */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); /* Sombra alrededor del logo */
}

.fade-in {
    opacity: 0;
    animation: fadeInAnimation 1s forwards;
}

@keyframes fadeInAnimation {
    to {
        opacity: 1;
    }
}
/**boton ver mas de testimonios */
.button-vermas {
  text-align: center;
  margin-top: 20px;
}

.button-vermas a {
  display: inline-block;
  padding: 12px 24px;
  color: #ffffff;
  background-color: #0056b3;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.button-vermas a:hover {
  background-color: #003d82;
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.button-vermas a:active {
  background-color: #003d82;
  transform: scale(0.98);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
}
/* Añadir espacio entre secciones */
section, .hero, .mision-vision-container, .card {
  margin-bottom: 40px;
}

/* Ajuste específico para la galería */
.galeria {
  padding: 40px 20px;
  margin-top: 20px; /* Espacio adicional en la parte superior */
  margin-bottom: 40px; /* Espacio adicional en la parte inferior */
  text-align: center;
  background-color: #f0f4f8;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

/* Espacio entre elementos de testimonios */
.testimonios-container {
  display: flex;
  margin-bottom: 20px;
}

/* Espacio adicional para cada noticia */
.container-noti {
  margin-bottom: 40px;
}

/* Espacio adicional para el botón "Ver más" */
.button-vermas {
  text-align: center;
  margin-top: 20px;
}


</style>
