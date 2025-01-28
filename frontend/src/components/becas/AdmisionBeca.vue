<template>
  <div class="admisiones-becas-container" ref="admisionesBecas">
    <h1>Sección de Admisiones y Becas</h1>

    <!-- Navegación de pestañas -->
    <div class="tab-nav">
      <button @click="activeTab = 'admisiones'" :class="{ active: activeTab === 'admisiones' }">
        Información de Admisiones
      </button>
      <button @click="activeTab = 'becas'" :class="{ active: activeTab === 'becas' }">
        Solicitar Beca
      </button>
    </div>

    <!-- Contenido de las pestañas -->
    <div v-if="activeTab === 'admisiones'" class="admisiones-section">
      <h2>Información de Admisiones</h2>
      <div class="info-content">
        <h3>PREGRADO</h3>
        <h4>REQUISITOS</h4>
        <ul>
          <li>Examen de dispensación</li>
          <li>Curso preuniversitario</li>
        </ul>
        
        <h4>Premio a la Excelencia</h4>
        <ul>
          <li>Becas de excelencia</li>
        </ul>

        <h4>Facilidades para Estudiantes</h4>
        <ul>
          <li>Biblioteca especializada</li>
          <li>Laboratorios de enseñanza</li>
          <li>Internet</li>
          <li>Granjas de práctica</li>
          <li>Internado</li>
          <li>Comedor</li>
          <li>Complejos deportivos</li>
        </ul>

        <h4>Actividades Paralelas a la Formación</h4>
        <ul>
          <li>Interacción social</li>
          <li>Trabajo con proyectos de intervención</li>
          <li>Participación en ferias educativas</li>
          <li>Actividades culturales y deportivas</li>
        </ul>

        <h4>Convenios con Instituciones (Prácticas)</h4>
        <p>Gobiernos municipales de El Alto, Tihuanacu, Batallas, Pucarani.</p>

        <button class="btn-download">
          <a :href="downloadLink" target="_blank">Más información</a>
        </button>
      </div>
    </div>

    <div v-if="activeTab === 'becas'" class="becas-section">
      <h2>Solicitud de Beca</h2>
      <form @submit.prevent="enviarFormulario" class="beca-form">
        <!-- Nombre Completo -->
        <div class="form-group">
          <label for="nombre">Nombre Completo</label>
          <input type="text" id="nombre" v-model="nombre" placeholder="Ingresa tu nombre completo" required />
        </div>

        <!-- Correo Electrónico -->
        <div class="form-group">
          <label for="correo">Correo Electrónico</label>
          <input type="email" id="correo" v-model="correo" placeholder="Ingresa tu correo" required />
        </div>

        <!-- Programa de Estudio -->
        <div class="form-group">
          <label for="programa">Programa de Estudio</label>
          <select id="programa" v-model="programa" required>
            <option disabled value="">Selecciona un programa</option>
            <option value="Enfermería">Enfermería</option>
            <option value="Fisioterapia y Kinesiología">Fisioterapia y Kinesiología</option>
          </select>
        </div>

        <!-- Nivel de Necesidad -->
        <div class="form-group">
          <label for="necesidad">Nivel de Necesidad Financiera</label>
          <input type="range" id="necesidad" v-model="necesidad" min="1" max="10" />
          <p>Nivel: {{ necesidad }}</p>
        </div>

        <!-- Comentarios Adicionales -->
        <div class="form-group">
          <label for="comentarios">Comentarios Adicionales</label>
          <textarea id="comentarios" v-model="comentarios" placeholder="Explica brevemente por qué solicitas esta beca"></textarea>
        </div>

        <!-- Botón de Envío -->
        <button type="submit" class="btn-submit">Enviar Solicitud</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'admisiones',
      nombre: '',
      correo: '',
      programa: '',
      necesidad: 5,
      comentarios: '',
      downloadLink: 'https://uacucb.edu.bo/carreras9/infopuca.htm' // Cambia el enlace aquí cuando esté disponible
    };
  },
  mounted() {
    this.scrollToSection();
  },
  watch: {
    activeTab() {
      this.scrollToSection();
    }
  },
  methods: {
    enviarFormulario() {
      if (this.nombre && this.correo && this.programa) {
        alert('Formulario enviado exitosamente');
      } else {
        alert('Por favor, completa todos los campos obligatorios.');
      }
    },
    scrollToSection() {
      this.$nextTick(() => {
        this.$refs.admisionesBecas.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }
};
</script>

<style scoped>
.admisiones-becas-container {
  max-width: 800px;
  margin: 40px auto;
  padding: 40px;
  background-color: #fdfdfd;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-family: 'Roboto', sans-serif;
}

h1 {
  text-align: center;
  color: #004080;
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.tab-nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
}

.tab-nav button {
  background-color: #e0e0e0;
  border: none;
  padding: 12px 30px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 50px;
}

.tab-nav button.active,
.tab-nav button:hover {
  background-color: #004080;
  color: white;
}

.admisiones-section, .becas-section {
  padding: 20px;
  font-size: 1rem;
  line-height: 1.6;
}

.info-content h3,
.info-content h4 {
  color: #003366;
  margin-top: 15px;
}

.info-content ul {
  list-style: none;
  padding-left: 0;
}

.info-content ul li {
  padding: 5px 0;
  font-size: 0.95rem;
}

.info-content p {
  margin-top: 10px;
}

.beca-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

label {
  color: #555;
  font-weight: bold;
  font-size: 0.9rem;
  margin-bottom: 5px;
  display: block;
}

input, select, textarea {
  width: 100%;
  padding: 12px;
  font-size: 0.9rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

textarea {
  min-height: 100px;
}

input[type="range"] {
  width: 100%;
}

.btn-submit {
  background-color: #004080;
  color: white;
  padding: 15px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-align: center;
}

.btn-submit:hover {
  background-color: #003366;
}

.btn-download a {
  color: white;
  text-decoration: none;
}

.btn-download {
  background-color: #0073e6;
  color: white;
  padding: 12px 25px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;
  display: inline-block;
}

.btn-download:hover {
  background-color: #005bb5;
}
</style>
