<template>
  <div>


    <!-- Contenido Principal -->
    <div class="content">
      <img src="@/assets/car.jpg" alt="Eventos" class="hero-image" />
      <h1>Eventos de Actualización Profesional</h1>
      <p>
        La Facultad de Ciencias de la Salud invita a sus estudiantes y profesionales a participar en
        los eventos de actualización profesional que se realizan cada año. Los congresos y jornadas
        están enfocados en mejorar las competencias en áreas de la salud, incluyendo medicina y fisioterapia.
      </p>

      <h2>Próximos Congresos</h2>
      <div class="events-section">
        <div class="event-card" v-for="(event, index) in congresses" :key="index">
          <img :src="event.image" :alt="event.title" class="event-image" />
          <h3>{{ event.title }}</h3>
          <p>{{ event.description }}</p>
          <video v-if="event.video" controls class="event-video">
            <source :src="event.video" type="video/mp4">
            Tu navegador no soporta el video.
          </video>
        </div>
      </div>

      <h2>Jornadas Profesionales</h2>
      <div class="events-section">
        <div class="event-card" v-for="(event, index) in workshops" :key="index">
          <img :src="event.image" :alt="event.title" class="event-image" />
          <h3>{{ event.title }}</h3>
          <p>{{ event.description }}</p>
          <video v-if="event.video" controls class="event-video">
            <source :src="event.video" type="video/mp4">
            Tu navegador no soporta el video.
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventosActualizacion',
  data() {
    return {
      congresses: [
        {
          title: "Congreso Internacional de Medicina",
          description: "Evento de tres días con especialistas de renombre en diversas áreas de la medicina.",
          image: "../assets/congreso_medicina.jpg",
          video: "../assets/congreso_medicina.mp4",
        },
        {
          title: "Congreso de Fisioterapia y Rehabilitación",
          description: "Aprende sobre las últimas técnicas en fisioterapia en este evento exclusivo.",
          image: "../assets/congreso_fisioterapia.jpg",
          video: null,
        },
      ],
      workshops: [
        {
          title: "Jornada de Actualización en Cardiología",
          description: "Un día completo de ponencias y talleres sobre avances en cardiología.",
          image: "../assets/jornada_cardiologia.jpg",
          video: "../assets/jornada_cardiologia.mp4",
        },
        {
          title: "Jornada de Rehabilitación Física",
          description: "Explora las técnicas de rehabilitación con expertos.",
          image: "../assets/jornada_rehabilitacion.jpg",
          video: null,
        },
      ],
    };
  },
};
</script>

<style scoped>
body {
  background-color: #eef2f3; /* Color de fondo suave */
  font-family: 'Arial', sans-serif;
}

/* Banner de Evento Destacado */
.highlighted-event {
  position: relative;
  text-align: center;
  margin: 0 auto 40px;
  border-radius: 10px;
  overflow: hidden;
}

.highlighted-image {
  width: 100%;
  max-width: 1200px;
  height: auto;
  transition: transform 0.3s;
}

.highlighted-image:hover {
  transform: scale(1.05);
}

.highlighted-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 2.5em;
  font-weight: bold;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
}

.signup-button {
  display: inline-block;
  margin-top: 20px;
  padding: 15px 30px;
  font-size: 1.2em;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
}

.signup-button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

/* Contenido Principal */
.content {
  padding: 50px;
  text-align: center;
}

.hero-image {
  width: 80%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  margin-bottom: 30px;
  color: #007bff;
  font-size: 2.5em;
}

h2 {
  margin-top: 40px;
  color: #007bff;
  font-size: 2em;
}

/* Estilos de la Sección de Eventos */
.events-section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  margin: 20px auto;
  max-width: 1000px;
}

.event-card {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  text-align: center;
  padding: 15px;
  animation: fadeIn 0.5s; /* Animación de aparición */
}

.event-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.event-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 12px 12px 0 0; /* Bordes redondeados en la parte superior */
}

.event-card h3 {
  color: #333;
  margin: 10px 0;
  font-size: 1.5em;
}

.event-card p {
  color: #666;
  font-size: 1em;
  padding: 0 10px; /* Espaciado en el texto */
}

.event-video {
  width: 100%;
  height: auto;
  margin-top: 10px;
  border-radius: 8px;
}

/* Animación de aparición */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
