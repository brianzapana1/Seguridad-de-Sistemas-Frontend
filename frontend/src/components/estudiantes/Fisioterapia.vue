<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <div>
    <!-- Contenido Principal -->
    <section class="banner-fisioterapia">
  <img src="@/assets/FOTOS SELEC UAC PUCARANI/FOTOS FISOTERAPIA/20241008_135438.jpg" alt="Banner de la carrera de Fisioterapia y Kinesiología">
  <h1 class="banner-title">Carrera de Fisioterapia y Kinesiología</h1>
</section>

    <section class="informacion">
      <div class="content-info">
        <h1>Licenciatura en Fisioterapia y Kinesiología</h1>
        <p>
          La Licenciatura en Fisioterapia y Kinesiología forma profesionales con las habilidades y 
          conocimientos necesarios para promover y restaurar la salud física de quienes más lo necesitan. 
          Estos estudiantes desarrollan un pensamiento crítico que les permite tomar decisiones efectivas 
          en diversos escenarios de atención clínica, abordando problemas de movilidad y rehabilitación con 
          responsabilidad y compromiso.
        </p>
      </div>
      <div class="content-img">
        <img src="@/assets/FOTOS SELEC UAC PUCARANI/FOTOS FISOTERAPIA/20241008_132204.jpg" alt="Imagen de fisioterapia y kinesiología">
      </div>
    </section>
    <section class="mas-info">
      <div class="content-img2">
        <img src="@/assets/FOTOS SELEC UAC PUCARANI/FOTOS FISOTERAPIA/20241008_142544.jpg" alt="Imagen de Fisioterapia y Kinesiología">
      </div>
      <div class="accordion">
        <div v-for="(item, index) in items" :key="index" class="accordion-item">
          <div class="accordion-header" @click="toggle(index)">
            <div class="icon">
              <img :src="item.icon" alt="Ícono de la sección" />
            </div>
            <h3>{{ item.title }}</h3>
            <span>{{ activeIndex === index ? '▲' : '▼' }}</span>
          </div>
          <div v-if="activeIndex === index" class="accordion-content">
            <p>{{ item.content }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="career-info-section">
      <div class="career-info">
        <h2>Información de la carrera</h2>
        <div class="info-grid">
          <div class="info-item" @click="animateItem" v-for="(info, index) in careerInfo" :key="index">
            <img :src="info.icon" :alt="'Icono ' + info.title" class="info-icon" />
            <h3>{{ info.title }}</h3>
            <p>{{ info.description }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="malla">
      <div class="malla-curricular">
        <h1>Nuestra malla</h1>
      </div>
      <div class="pdf-malla">
        <iframe src="/src/assets/mallac_kif.pdf" width="100%" height="600px"></iframe>
      </div>
    </section>
    <section class="wp">
      <div class="boton-wp">
        <a href="https://api.whatsapp.com/send/?phone=%2B59167304957&text&type=phone_number&app_absent=0" class="btn-wsp" target="_blank" rel="noopener noreferrer">
          <img src="@/assets/iconos/whatsapp.png" alt="WhatsApp" class="whatsapp-icon" />
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: null,
      items: [
        {
          title: "Objetivo",
          icon: "/src/assets/iconos/publico.png",
          content: "Formar profesionales en el campo de la fisioterapia y kinesiología con un sólido conocimiento teórico y práctico que les permita promover, mantener y restaurar la salud física de las personas, contribuyendo al bienestar social y ofreciendo servicios de calidad en el ámbito de la rehabilitación."
        },
        {
          title: "Misión",
          icon: "/src/assets/iconos/mision.png",
          content: "Nuestra misión es educar y formar a futuros fisioterapeutas y kinesiólogos con una base ética y humanitaria, preparados para atender las necesidades de salud física de la comunidad, capaces de trabajar en diversos contextos, y comprometidos con el aprendizaje continuo y el desarrollo profesional."
        },
        {
          title: "Visión",
          icon: "/src/assets/iconos/vision.png",
          content: "Ser reconocidos como una de las instituciones líderes en la formación de profesionales en fisioterapia y kinesiología, que impactan positivamente en la salud pública y contribuyen a la investigación y desarrollo de prácticas innovadoras en el ámbito de la rehabilitación."
        },
        {
          title: "Campo Laboral",
          icon: "/src/assets/iconos/mercado-laboral.png",
          content: "Los egresados de la carrera de Fisioterapia y Kinesiología pueden desempeñarse en hospitales, clínicas, centros de rehabilitación, organizaciones deportivas y consultorios privados, brindando servicios de rehabilitación y promoviendo la salud física en diferentes áreas especializadas."
        },
        {
          title: "Competencias Profesionales",
          icon: "/src/assets/iconos/empresario.png",
          content: "Al finalizar la carrera, los estudiantes habrán desarrollado habilidades para evaluar, planificar e implementar cuidados de salud física de manera autónoma y colaborativa, con competencias en comunicación, ética profesional, y la capacidad de tomar decisiones basadas en evidencia científica."
        },
        {
          title: "Requisitos para la Inscripción",
          icon: "/src/assets/iconos/requisito.png",
          content: "Para inscribirse en la carrera de Fisioterapia y Kinesiología, se requiere haber culminado los estudios de secundaria, presentar certificado de nacimiento, cédula de identidad, dos fotografías tamaño carnet, y cumplir con una entrevista de admisión. Es recomendable tener un interés genuino por el bienestar de las personas y la salud física."
        }
      ],
      careerInfo: [
        { title: "GRADO ACADÉMICO", icon: "/src/assets/iconos/publico.png", description: "LICENCIATURA" },
        { title: "DURACIÓN DE CARRERA", icon: "/src/assets/iconos/publico.png", description: "4 AÑOS" },
        { title: "AULAS Y LABORATORIOS", icon: "/src/assets/iconos/publico.png", description: "EQUIPADOS" },
        { title: "MODELO DE CLASES", icon: "/src/assets/iconos/publico.png", description: "PRESENCIAL" }
      ]
    };
  },
  methods: {
    toggle(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
    animateItem(event) {
      event.currentTarget.classList.add("animate");
      setTimeout(() => {
        event.currentTarget.classList.remove("animate");
      }, 300);
    }
  }
};
</script>
<style scoped>
body {
  background-color: antiquewhite;
  font-family: 'Arial', sans-serif;
  color: #333;
}
/* Estilos del banner */
.banner-fisioterapia{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 400px; /* Ajusta la altura según tus necesidades */
}

.banner-fisioterapia img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.5); /* Oscurece la imagen para mejorar la visibilidad del texto */
}

.banner-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 3em;
  text-align: center;
  z-index: 1;
  font-weight: bold;
}

@media (max-width: 768px) {
  .banner-fisioterapia {
    height: 300px; /* Ajusta la altura para pantallas más pequeñas */
  }

  .banner-title {
    font-size: 2em; /* Reduce el tamaño de fuente en pantallas pequeñas */
  }
}

.informacion {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 10px;
  text-align: center; /* Centra el texto dentro del div */
}

.content-info h1 {
  font-size: 2em;
  margin-bottom: 15px;
  color: #2c3e50;
}

.content-info p {
  font-size: 1em;
  line-height: 1.6;
  color: #34495e;
}

.content-img {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.content-img img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 450px; /* Agranda la imagen */
}

@media (min-width: 768px) {
  .informacion {
    flex-direction: row;
    text-align: left; /* Para pantallas grandes, el texto se alinea a la izquierda */
  }

  .content-info,
  .content-img {
    flex: 1;
  }
}

.mas-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  align-items: start;
}
.content-img2 img {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 10px;
}
.accordion-item {
  border-bottom: 1px solid #ddd;
  padding: 15px 0;
}
.accordion-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
.accordion-header h3 {
  font-size: 1.2em;
  color: #2c3e50;
  text-align: center;
  width: 100%;
}
.accordion-header .icon img {
  width: 30px;
  height: 30px;
}
.career-info-section {
  padding: 40px 20px;
  background-color: #082447;
}
.career-info-section h2{
  color: #FFCB00;
}
.career-info h2 {
  font-size: 1.8em;
  margin-bottom: 20px;
  text-align: center;
  
}
.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.info-item {
  background-color: #e0e0e0;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.info-item:hover {
  transform: translateY(-5px);
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
}
.info-item.animate {
  transform: scale(1.05);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.4);
}
.info-icon {
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
}
.info-item h3 {
  font-size: 1.1em;
  color: #333;
  margin: 10px 0;
}
.info-item p {
  font-size: 1em;
  color: #666;
}
@media (max-width: 768px) {
  .info-grid {
    grid-template-columns: 1fr;
  }
}
/**pdf */
.malla {
  padding: 20px;
  background-color: #f9f9f9;
}
.malla-curricular {
  text-align: center;
  margin-bottom: 20px;
}
.malla-curricular h1 {
  color: #333;
  font-size: 2em;
}
.pdf-malla {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
.btn-wsp {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 25px;
  right: 25px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.3);
  z-index: 100;
  transition: all 300ms ease;
}
.btn-wsp:hover {
  background: #20ba5a;
}
.whatsapp-icon {
  width: 35px;
  height: 35px;
}
@media only screen and (min-width: 320px) and (max-width: 768px) {
  .btn-wsp {
    width: 63px;
    height: 63px;
  }
  .whatsapp-icon {
    width: 38px;
    height: 38px;
  }
}
</style>
