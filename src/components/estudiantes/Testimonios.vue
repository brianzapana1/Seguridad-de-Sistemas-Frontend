<template>
  <section class="testimonials">
    <div class="container">
      <h2>Lo que dicen nuestros estudiantes</h2>
      <p class="description">
        Experiencias de quienes han formado parte de nuestras carreras en el área de la salud.
      </p>

      <div class="carousel">
        <button @click="prevSlide" class="carousel-control prev">&#10094;</button>
        <div class="carousel-track-container">
          <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div
              v-for="(testimony, index) in testimonies"
              :key="index"
              class="testimonial-card"
            >
              <div class="testimonial-content">
                <img :src="testimony.image" :alt="testimony.name" class="testimonial-image" />
                <div class="testimonial-info">
                  <h3>{{ testimony.name }}</h3>
                  <p class="role">{{ testimony.role }}</p>
                  <p class="quote">"{{ testimony.quote }}"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button @click="nextSlide" class="carousel-control next">&#10095;</button>
      </div>

      <!-- Indicadores del carrusel -->
      <div class="carousel-indicators">
        <span
          v-for="(testimony, index) in testimonies"
          :key="index"
          :class="['indicator', { active: index === currentIndex }]"
          @click="setSlide(index)"
        ></span>
      </div>

      <!-- Formulario para añadir comentario -->
      <div class="add-comment-section">
        <input
          type="email"
          v-model="email"
          placeholder="Ingresa tu correo institucional"
          class="email-input"
        />
        <button @click="addComment" class="add-comment-button">Añadir Comentario</button>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      email: "",
      errorMessage: "",
      testimonies: [
        {
          name: "Laura Gómez",
          role: "Graduada en Enfermería",
          image: "/src/assets/FOTOS SELEC UAC PUCARANI/FOTOS ENFERMERIA/20241005_102709.jpg",
          quote: "Estudiar Enfermería ha sido una de las decisiones más importantes de mi vida. Aquí encontré no solo una formación académica de calidad, sino también un entorno de apoyo constante por parte de mis profesores y compañeros.",
        },
        {
          name: "Carlos Medina",
          role: "Estudiante de Fisioterapia",
          image: "/src/assets/FOTOS SELEC UAC PUCARANI/FOTOS ENFERMERIA/20241005_104906.jpg",
          quote: "La carrera de Fisioterapia me ha dado las herramientas para entender el cuerpo humano y su recuperación. El enfoque práctico y las horas de pasantía me han permitido aplicar lo aprendido en casos reales.",
        },
        {
          name: "Roberto Sánchez",
          role: "Graduado en Kinesiología",
          image: "/src/assets/FOTOS SELEC UAC PUCARANI/FOTOS FISOTERAPIA/20241008_130747.jpg",
          quote: "Gracias a mi formación en Kinesiología, ahora puedo ayudar a muchas personas en su rehabilitación física. El plan de estudios es muy completo, con una excelente combinación de teoría y práctica.",
        },
        {
          name: "María Torres",
          role: "Estudiante de Enfermería",
          image: "/src/assets/FOTOS SELEC UAC PUCARANI/FOTOS FISOTERAPIA/20241008_133731.jpg",
          quote: "Lo que he recibido durante mis estudios de Enfermería ha sido invaluable. Las prácticas en hospitales me han permitido experimentar de primera mano la atención a pacientes, lo cual es invaluable.",
        }
      ]
    };
  },
  methods: {
    nextSlide() {
      if (this.currentIndex < this.testimonies.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.testimonies.length - 1;
      }
    },
    setSlide(index) {
      this.currentIndex = index;
    },
    addComment() {
      const institutionalDomain = "@institucion.edu.bo"; // Cambia esto al dominio de tu institución
      if (this.email.endsWith(institutionalDomain)) {
        this.errorMessage = "";
        alert("¡Puedes añadir tu comentario!");
        // Aquí podrías abrir un modal o un formulario para que el usuario ingrese su comentario
      } else {
        this.errorMessage = `Por favor, ingresa un correo institucional que termine en ${institutionalDomain}`;
      }
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@400;700&display=swap');

.testimonials {
  text-align: center;
  padding: 60px 0;
  background: linear-gradient(135deg, #f0f4f8, #e6ecf3);
  font-family: 'Roboto', sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

h2 {
  font-size: 2.5rem;
  color: #004080;
  font-family: 'Playfair Display', serif;
  margin-bottom: 10px;
}

.description {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 50px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.carousel {
  position: relative;
  display: flex;
  align-items: center;
}

.carousel-track-container {
  overflow: hidden;
  width: 100%;
}

.carousel-track {
  display: flex;
  transition: transform 0.6s ease;
}

.carousel-control {
  background-color: #004080;
  border: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.carousel-control:hover {
  background-color: #007bff;
}

.testimonial-card {
  background: linear-gradient(145deg, #ffffff, #e0e5ec);
  border-radius: 15px;
  padding: 30px 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.testimonial-card:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.testimonial-image {
  border-radius: 50%;
  width: 90px;
  height: 90px;
  object-fit: cover;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.testimonial-info h3 {
  font-size: 1.5rem;
  color: #333;
  font-weight: bold;
  margin-bottom: 5px;
}

.role {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 20px;
}

.quote {
  font-size: 1rem;
  color: #444;
  font-style: italic;
  line-height: 1.5;
}

/* Indicadores del carrusel */
.carousel-indicators {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.indicator {
  width: 10px;
  height: 10px;
  background-color: #ccc;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.indicator.active {
  background-color: #004080;
}

.indicator:hover {
  background-color: #007bff;
}

.add-comment-section {
  margin-top: 30px;
  text-align: center;
}

.email-input {
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-right: 10px;
  width: 250px;
}

.add-comment-button {
  background-color: #004080;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-comment-button:hover {
  background-color: #007bff;
}

.error-message {
  color: red;
  margin-top: 10px;
  font-size: 0.9rem;
}
</style>
