<template>
  <div>
    <!-- Sección de Contacto -->
    <section class="contact-banner">
      <img src="@/assets/Pucarani/INFRAESTRUCTURA/PANO_20241010_113630.jpg" alt="Banner de contacto">
      <h1 class="contact-title">Contacto - UAC Pucarani</h1>
    </section>

    <section class="contact-info">
      <div class="contact-details">
        <h2>Información de Contacto</h2>
        <p>Si tienes alguna consulta o deseas obtener más información sobre nuestros programas, no dudes en ponerte en contacto con nosotros.</p>
        <div class="contact-item">
          <i class="fas fa-phone-alt"></i>
          <p><strong>Teléfono:</strong> +591 67304957</p>
        </div>
        <div class="contact-item">
          <i class="fas fa-envelope"></i>
          <p><strong>Email:</strong> contacto@uacpucarani.edu.bo</p>
        </div>
        <div class="contact-item">
          <i class="fas fa-map-marker-alt"></i>
          <p><strong>Dirección:</strong> Unidad Académica Campesina de Pucarani, Bolivia</p>
        </div>
      </div>
      <!--mapa-->
    </section>

    <!-- Formulario de Contacto en Tarjeta -->
    <section class="contact-form">
      <div class="contact-form-card">
        <h2>Envíanos un Mensaje</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Nombre:</label>
            <input type="text" id="name" v-model="form.name" required>
          </div>
          <div class="form-group">
            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" v-model="form.email" required>
          </div>
          <div class="form-group">
            <label for="message">Mensaje:</label>
            <textarea id="message" v-model="form.message" rows="4" required></textarea>
          </div>
          <button type="submit" class="btn-submit">Enviar Mensaje</button>
        </form>
      </div>
    </section>
    <section class="mapa">
  <div class="map-container">
    <h1>Visitanos</h1>
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d489726.0299223018!2d-68.408866!3d-16.476317!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915eedf1827d78c3%3A0x27ecf35b8f5a874d!2sUniversidad%20Cat%C3%B3lica%20Carrera%20de%20Enfermer%C3%ADa!5e0!3m2!1ses-419!2sbo!4v1730989488157!5m2!1ses-419!2sbo"
      width="600" 
      height="450" 
      style="border:0;" 
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </div>
</section>


    <!-- WhatsApp -->
    <section class="whatsapp-contact">
      <a href="https://api.whatsapp.com/send/?phone=%2B59167304957&text&type=phone_number&app_absent=0" class="btn-wsp" target="_blank" rel="noopener noreferrer">
        <img src="/src/assets/iconos/whatsapp.png" alt="WhatsApp" class="whatsapp-icon" />
        Contactar por WhatsApp
      </a>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Aquí puedes agregar la lógica para enviar el formulario, como una petición API.
      console.log('Formulario Enviado', this.form);
      alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
};
</script>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
  background-color: #f8f8f8;
  color: #333;
}

/* Sección del Banner de Contacto */
.contact-banner {
  position: relative;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #08346d;
  color: white;
}

.contact-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.5); /* Oscurece la imagen para mejorar la visibilidad del texto */
}

.contact-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.5em;
  font-weight: bold;
  text-align: center;
  z-index: 1;
}

.contact-info {
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.contact-details h2 {
  color: #08346d;
  font-size: 2em;
  margin-bottom: 20px;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.contact-item i {
  font-size: 1.5em;
  color: #08346d;
  margin-right: 10px;
}

.contact-form {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.contact-form-card {
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 500px;
  animation: fadeIn 0.5s ease-out;
}

.contact-form-card h2 {
  font-size: 2em;
  color: #08346d;
  margin-bottom: 20px;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-size: 1.1em;
  margin-bottom: 8px;
}

input, textarea {
  width: 100%;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 4px;
}

textarea {
  resize: vertical;
}

.btn-submit {
  display: block;
  width: 100%;
  padding: 15px;
  background-color: #08346d;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.2em;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-submit:hover {
  background-color: #0c5a8f;
}

/* Animación de desvanecimiento para el formulario */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* WhatsApp Button */
.whatsapp-contact {
  text-align: center;
  margin: 20px 0;
}

.whatsapp-icon {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.btn-wsp {
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  background-color: #25d366;
  color: white;
  font-size: 1.2em;
  border-radius: 5px;
  text-decoration: none;
}

.btn-wsp:hover {
  background-color: #128c7e;
}
/**mapa */
.mapa {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.map-container {
  width: 100%;
  max-width: 800px; /* Ancho máximo para una buena presentación en pantallas grandes */
  border-radius: 12px;
  overflow: hidden;
 
}

.map-container iframe {
  width: 100%;
  height: 450px;
  border: 0;
  border-radius: 12px; /* Bordes redondeados */
}

</style>
