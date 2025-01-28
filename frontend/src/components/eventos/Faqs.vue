<template>
    <section class="faq-banner">
      <div class="faq-header">
        <h1>Preguntas Frecuentes</h1>
        <p>Encuentra respuestas a tus dudas sobre la universidad</p>
        <div class="faq-search">
          <input type="text" id="searchInput" placeholder="Buscar..." />
          <button id="searchButton">Buscar</button>
        </div>
      </div>
    </section>
  
    <section class="faq-content">
      <div class="faq-left">
        <h2>¿Tienes preguntas?</h2>
        <img src="@/assets/faqs.jpg" alt="Ilustración FAQ" />
      </div>
  
      <div class="faq-right">
        <div class="faq-item" @click="toggleFaq(0)">
          <h3 class="faq-question">
            ¿Cuáles son los requisitos básicos de inscripción? <span>{{ activeIndex === 0 ? '▲' : '▼' }}</span>
          </h3>
          <div class="faq-answer" :class="{ 'active': activeIndex === 0 }">
            <p>
              Para inscribirte, necesitas tu cédula de identidad, título de bachiller o equivalente, y los documentos solicitados por la universidad.
            </p>
          </div>
        </div>
  
        <div class="faq-item" @click="toggleFaq(1)">
          <h3 class="faq-question">
            ¿Cuáles son los requisitos para las convalidaciones o traspasos a la UCB? <span>{{ activeIndex === 1 ? '▲' : '▼' }}</span>
          </h3>
          <div class="faq-answer" :class="{ 'active': activeIndex === 1 }">
            <p>
              Debes presentar los certificados de notas originales, el plan de estudios de la universidad de origen, y una carta formal de solicitud.
            </p>
          </div>
        </div>
  
        <div class="faq-item" @click="toggleFaq(2)">
          <h3 class="faq-question">
            ¿Cómo puedo acceder al sistema académico? <span>{{ activeIndex === 2 ? '▲' : '▼' }}</span>
          </h3>
          <div class="faq-answer" :class="{ 'active': activeIndex === 2 }">
            <p>
              Accede al sistema académico utilizando tu nombre de usuario y contraseña proporcionados al momento de la inscripción.
            </p>
          </div>
        </div>
  
        <div class="faq-item" @click="toggleFaq(3)">
          <h3 class="faq-question">
            ¿Cómo se hace la asignación de materias? <span>{{ activeIndex === 3 ? '▲' : '▼' }}</span>
          </h3>
          <div class="faq-answer" :class="{ 'active': activeIndex === 3 }">
            <p>
              La asignación de materias se realiza automáticamente en función del semestre en el que te encuentres matriculado. Sin embargo, puedes hacer ajustes desde tu cuenta en el portal de estudiantes.
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeIndex: null, // Almacena el índice de la pregunta activa
      };
    },
    methods: {
      toggleFaq(index) {
        // Alterna la visibilidad de la respuesta al hacer clic
        this.activeIndex = this.activeIndex === index ? null : index;
      },
    },
  };
  </script>
  
  <style scoped>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
  
  h1, h2, h3, p {
    margin: 0;
  }
  
  section {
    padding: 40px 20px;
  }
  
  /* Banner FAQ */
  .faq-banner {
    background-image: url('@/assets/faq1.jpg'); /* Sustituir con tu imagen de fondo */
    background-size: cover;
    background-position: center;
    text-align: center;
    padding: 60px 20px;
    border-radius: 20px;
    color: white;
  }
  
  .faq-header h1 {
    font-size: 48px;
    font-weight: bold;
    color: #0056b3;
    animation: fadeIn 1s ease-in-out;
  }
  
  .faq-header p {
    font-size: 20px;
    animation: fadeIn 1.5s ease-in-out;
  }
  
  .faq-search {
    margin-top: 20px;
    animation: slideDown 1s ease-in-out;
  }
  
  .faq-search input {
    padding: 10px 20px;
    border-radius: 25px;
    border: none;
    width: 250px;
  }
  
  .faq-search button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 25px;
    margin-left: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .faq-search button:hover {
    background-color: #0056b3;
  }
  
  .faq-content {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .faq-left {
    width: 40%;
    text-align: center;
    animation: fadeIn 1s ease-in-out;
  }
  
  .faq-left h2 {
    font-size: 28px;
    margin-bottom: 20px;
  }
  
  .faq-left img {
    width: 80%;
    margin-top: 20px;
    border-radius: 10px;
  }
  
  .faq-right {
    width: 55%;
  }
  
  .faq-item {
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    margin-bottom: 20px;
    padding: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  
  .faq-item:hover {
    background-color: #f7f7f7;
    transform: translateY(-3px);
  }
  
  .faq-question {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    color: #007bff;
    font-weight: bold;
  }
  
  .faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease, opacity 0.5s ease;
    opacity: 0;
  }
  
  .faq-answer.active {
    max-height: 150px; /* Ajusta este valor según la altura del contenido */
    opacity: 1;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes slideDown {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  </style>