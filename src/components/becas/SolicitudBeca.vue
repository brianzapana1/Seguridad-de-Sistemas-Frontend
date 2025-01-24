<template>
  <div class="page-container">
    <!-- Aquí va tu navbar, que debe estar fuera del contenedor del formulario -->
    <nav class="navbar">
      
      <!-- Coloca aquí el contenido de tu barra de navegación -->
    </nav>

    <!-- Contenedor del formulario que ocupa el espacio restante en pantalla -->
    <div class="background-overlay">
      <div class="beca-container">
        <h1>Solicitud de Beca</h1>
        
        <form @submit.prevent="enviarFormulario" class="beca-form">
          <!-- Nombre Completo -->
          <div class="form-group">
            <label for="nombre">Nombre Completo</label>
            <input 
              type="text" 
              id="nombre" 
              v-model="nombre" 
              placeholder="Ingresa tu nombre completo" 
              required
            />
          </div>

          <!-- Correo Electrónico -->
          <div class="form-group">
            <label for="correo">Correo Electrónico</label>
            <input 
              type="email" 
              id="correo" 
              v-model="correo" 
              placeholder="Ingresa tu correo" 
              required
            />
          </div>

          <!-- Programa de Estudio -->
          <div class="form-group">
            <label for="programa">Programa de Estudio</label>
            <select id="programa" v-model="programa" required>
              <option disabled value="">Selecciona un programa</option>
              <option value="Fisioterapia">Fisioterapia</option>
              <option value="Enfermería">Enfermería</option>
            </select>
          </div>

          <!-- Nivel de Necesidad -->
          <div class="form-group">
            <label for="necesidad">Nivel de Necesidad Financiera</label>
            <input 
              type="range" 
              id="necesidad" 
              v-model="necesidad" 
              min="1" 
              max="10" 
              step="1" 
              list="tickmarks"
            />
            <datalist id="tickmarks">
              <option value="1" label="1"></option>
              <option value="2"></option>
              <option value="3" label="3"></option>
              <option value="4"></option>
              <option value="5" label="5"></option>
              <option value="6"></option>
              <option value="7" label="7"></option>
              <option value="8"></option>
              <option value="9"></option>
              <option value="10" label="10"></option>
            </datalist>
            <p>Nivel: {{ necesidad }}</p>
          </div>

          <!-- Comentarios Adicionales -->
          <div class="form-group">
            <label for="comentarios">Comentarios Adicionales</label>
            <textarea 
              id="comentarios" 
              v-model="comentarios" 
              placeholder="Explica brevemente por qué solicitas esta beca"
            ></textarea>
          </div>

          <!-- Botón de Envío -->
          <button type="submit" class="btn-submit">Enviar Solicitud</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      correo: '',
      programa: '',
      necesidad: 5,
      comentarios: ''
    };
  },
  methods: {
    enviarFormulario() {
      if (this.nombre && this.correo && this.programa) {
        alert('Formulario enviado exitosamente');
        // Aquí podrías manejar el envío real a un servidor
      } else {
        alert('Por favor, completa todos los campos obligatorios.');
      }
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  width: 100%;
}

.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.navbar {
  background-color: #082447;
  color: white;
  padding: 15px 20px;
  font-family: 'Playfair Display', serif;
  text-align: center;
}

.background-overlay {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background: url('https://auip.org/images/stories/DATOS/BANNERS/banner_movilidad_dobles_titulaciones.jpg') no-repeat center center fixed;
  background-size: cover;
  overflow: hidden;
}

.background-overlay::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Overlay oscuro para mejorar legibilidad */
  z-index: 1;
}

.beca-container {
  position: relative;
  z-index: 2; /* Asegura que el formulario esté encima del overlay */
  max-width: 600px;
  width: 90%;
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  font-family: 'Playfair Display', serif;
  text-align: center;
}

h1 {
  color: #004080;
  margin-bottom: 20px;
  font-size: 2.2rem;
}

.beca-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

label {
  margin-bottom: 5px;
  color: #004080;
  font-weight: bold;
}

input, select, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  font-family: 'Playfair Display', serif;
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
  padding: 12px;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;
}

.btn-submit:hover {
  background-color: #003366;
}
</style>
