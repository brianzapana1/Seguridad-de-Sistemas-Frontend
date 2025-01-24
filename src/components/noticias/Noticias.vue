<template>
  <div>
    <!-- Banner de Noticias -->
    <div class="news-banner">
      <div class="news-text">
        <h1>NOTICIAS<br>UAC Pucarani</h1>
        <p>La Universidad Católica Boliviana y la UAC de Pucarani te invitan a estar pendiente de las últimas noticias y novedades.</p>
      </div>
      <img src="@/assets/Pucarani/INFRAESTRUCTURA/Foto.jpg" alt="Imagen de Noticias">
    </div>

    <!-- Secciones de noticias -->
    <section class="news-container">
      <div class="news-card" v-for="(news, index) in newsList" :key="index">
        <div class="news-card-inner">
          <div class="news-card-front">
            <img :src="news.image" alt="Imagen de la noticia" class="news-image"/>
            <h2>{{ news.title }}</h2>
          </div>
          <div class="news-card-back">
            <p>{{ news.description }}</p>
            <button @click="readMore(news.id)">Leer más</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Calendario Académico -->
    <section class="calendar-section">
      <h2>Calendario Académico</h2>
      <div class="calendar">
        <div class="calendar-header">
          <button @click="prevMonth">&lt;</button>
          <h3>{{ monthNames[currentMonth] }} {{ currentYear }}</h3>
          <button @click="nextMonth">&gt;</button>
        </div>
        <div class="calendar-days">
          <div class="day-name" v-for="day in dayNames" :key="day">{{ day }}</div>
          <div
            v-for="day in daysInMonth"
            :key="day.date"
            class="calendar-day"
            :class="{ today: day.isToday, hasEvent: day.hasEvent }"
            @click="showEventDetails(day)"
          >
            {{ day.date.getDate() }}
            <div v-if="day.hasEvent" class="event-indicator"></div>
          </div>
        </div>
      </div>
      <div v-if="selectedEvent" class="event-modal" @click.self="closeEventDetails">
        <div class="event-modal-content">
          <h3>{{ selectedEvent.title }}</h3>
          <p><strong>Fecha:</strong> {{ selectedEvent.date }}</p>
          <p>{{ selectedEvent.description }}</p>
          <button @click="closeEventDetails">Cerrar</button>
        </div>
      </div>
    </section>

    <!-- Dashboard de Estadísticas -->
    <section class="dashboard">
      <h2>Dashboard de Estadísticas</h2>
      <div class="dashboard-grid">
        <div class="dashboard-card">
          <i class="fas fa-user-graduate"></i>
          <h3>Total de Inscritos</h3>
          <p>{{ totalInscritos }}</p>
        </div>
        <div class="dashboard-card">
          <i class="fas fa-graduation-cap"></i>
          <h3>Total de Titulados</h3>
          <p>{{ totalTitulados }}</p>
        </div>
        <div class="dashboard-card" v-for="(data, index) in carrerasData" :key="index">
          <i class="fas fa-book"></i>
          <h3>{{ data.carrera }}</h3>
          <p>Inscritos: {{ data.inscritos }}</p>
          <p>Titulados: {{ data.titulados }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      newsList: [
        { id: 1, title: 'Nueva Clínica de Fisioterapia en UAC Pucarani', description: 'La UAC Pucarani ha inaugurado una clínica moderna de fisioterapia para los estudiantes y la comunidad. Los alumnos tendrán acceso a equipos de última tecnología para prácticas profesionales.', image: '../src/assets/fisioterapia.jpg' },
        { id: 2, title: 'Kinesiología y Robótica: La Revolución en la Rehabilitación', description: 'Estudiantes de kinesiología colaboran en un proyecto innovador con robots para la rehabilitación física de pacientes con movilidad reducida. Un avance pionero en Bolivia.', image: '../src/assets/fisioterapia.jpg' },
        { id: 3, title: 'Enfermería: Atención con Drones en Zonas Rurales', description: 'La carrera de Enfermería ha implementado drones para llevar suministros médicos a áreas de difícil acceso. Esto mejorará la asistencia en comunidades rurales cercanas a Pucarani.', image: '../src/assets/enfermeria.jpg' },
        { id: 4, title: 'Fisioterapia y Realidad Virtual: Nuevas Fronteras en Rehabilitación', description: 'Los estudiantes de fisioterapia ahora utilizan realidad virtual como parte de su formación, simulando entornos clínicos para mejorar la rehabilitación de pacientes con lesiones graves.', image: '../src/assets/fisioterapia.jpg' },
      ],
      monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
      dayNames: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      calendarEvents: [
        { id: 1, title: 'Inicio del Semestre', date: new Date(2024, 1, 1), description: 'Comienzo de las clases para todos los estudiantes.' },
        { id: 2, title: 'Día del Estudiante', date: new Date(2024, 2, 21), description: 'Celebración del Día del Estudiante con eventos y actividades especiales.' },
        { id: 3, title: 'Exámenes Parciales', date: new Date(2024, 3, 10), description: 'Semana de exámenes parciales.' },
        { id: 4, title: 'Feria Universitaria', date: new Date(2024, 4, 25), description: 'Evento donde se presentan proyectos de estudiantes.' }
      ],
      selectedEvent: null,
      totalInscritos: 1200,
      totalTitulados: 400,
      carrerasData: [
        { carrera: 'Fisioterapia', inscritos: 400, titulados: 150 },
        { carrera: 'Kinesiología', inscritos: 300, titulados: 100 },
        { carrera: 'Enfermería', inscritos: 500, titulados: 150 }
      ]
    };
  },
  computed: {
    daysInMonth() {
      const days = [];
      const date = new Date(this.currentYear, this.currentMonth, 1);
      while (date.getMonth() === this.currentMonth) {
        days.push({
          date: new Date(date),
          isToday: date.toDateString() === new Date().toDateString(),
          hasEvent: this.calendarEvents.some(event => event.date.toDateString() === date.toDateString())
        });
        date.setDate(date.getDate() + 1);
      }
      return days;
    }
  },
  methods: {
    prevMonth() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
    nextMonth() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    showEventDetails(day) {
      const event = this.calendarEvents.find(event => event.date.toDateString() === day.date.toDateString());
      if (event) {
        this.selectedEvent = event;
      }
    },
    closeEventDetails() {
      this.selectedEvent = null;
    },
    readMore(id) {
      console.log(`Leyendo más sobre la noticia ${id}`);
    }
  }
};
</script>

<style scoped>
/* Estilo del Banner de Noticias */
.news-banner {
  position: relative;
  color: white;
  display: flex;
  align-items: center;
  background-color: #1f2957;
  animation: fadeIn 1.5s ease-in-out;
}

.news-banner img {
  width: 100%;
  height: 550px;
  object-fit: cover;
  opacity: 0.7;
}

.news-text {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  color: #ffdd57;
  max-width: 400px;
}

.news-text h1 {
  font-size: 2.5em;
  font-weight: bold;
}

.news-text p {
  font-size: 1.2em;
  margin-top: 10px;
}

/* Estilo de las Noticias */
.news-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 50px 20px;
  background-color: #f7f7f7;
}

.news-card {
  perspective: 1000px;
}

.news-card-inner {
  position: relative;
  width: 100%;
  height: 300px;
  text-align: center;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.news-card:hover .news-card-inner {
  transform: rotateY(180deg);
}

.news-card-front,
.news-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.news-card-front {
  background: white;
}

.news-card-front h2 {
  color: #333;
  padding: 10px;
}

.news-card-back {
  background-color: #064c96;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotateY(180deg);
  padding: 20px;
}

.news-card-back button {
  background-color: white;
  color: #007bff;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.news-card-back button:hover {
  background-color: #0056b3;
  color: white;
}

/* Estilo del Calendario Académico */
.calendar-section {
  background-color: #1f2957;
  color: white;
  padding: 50px 20px;
  text-align: center;
}

.calendar-section h2 {
  font-size: 2rem;
  margin-bottom: 30px;
  color: #ffdd57;
}

.calendar {
  background-color: #2d3b64;
  padding: 20px;
  border-radius: 10px;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.calendar-header h3 {
  font-size: 1.5rem;
  color: #ffdd57;
}

.calendar-header button {
  background: none;
  border: none;
  color: #ffdd57;
  font-size: 1.2rem;
  cursor: pointer;
}

.calendar-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
}

.day-name, .calendar-day {
  text-align: center;
  font-size: 1rem;
  padding: 10px;
  color: #e0e0e0;
}

.day-name {
  font-weight: bold;
  color: #ffdd57;
}

.calendar-day {
  border-radius: 5px;
  position: relative;
  transition: transform 0.3s, box-shadow 0.3s;
}

.calendar-day.today {
  background-color: #ffdd57;
  color: #2d3b64;
}

.calendar-day.hasEvent {
  background-color: #3a4466;
  color: #ffdd57;
}

.calendar-day:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.event-indicator {
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 8px;
  height: 8px;
  background-color: #ffdd57;
  border-radius: 50%;
}

/* Estilo del Modal de Evento */
.event-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.event-modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 90%;
  max-width: 400px;
  color: #1f2957;
}

.event-modal-content h3 {
  font-size: 1.5rem;
  color: #007bff;
  margin-bottom: 10px;
}

.event-modal-content p {
  margin-bottom: 10px;
}

.event-modal-content button {
  background-color: #007bff;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.event-modal-content button:hover {
  background-color: #0056b3;
}

/* Estilo del Dashboard */
.dashboard {
  background-color: #f3f3f3;
  padding: 50px 20px;
  text-align: center;
}

.dashboard h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 40px;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.dashboard-card {
  background-color: #007bff;
  color: white;
  padding: 30px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s;
}

.dashboard-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.dashboard-card i {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.dashboard-card h3 {
  font-size: 1.3rem;
  margin: 15px 0 10px;
}

.dashboard-card p {
  font-size: 1.1rem;
}
</style>
