<template>
    <div class="revista-container">
      <h1 class="titulo-revista">Revista Científica</h1>
      
      <!-- Carrusel de artículos -->
      <div class="carousel">
        <div class="carousel-track">
          <div
            v-for="(articulo, index) in articulos"
            :key="index"
            class="carousel-item"
          >
            <img :src="articulo.imagen" :alt="articulo.titulo" class="carousel-img" />
            <div class="carousel-content">
              <h3 class="articulo-titulo">{{ articulo.titulo }}</h3>
              <p class="articulo-resumen">{{ articulo.resumen }}</p>
              <a :href="articulo.enlace" target="_blank" class="button">Leer más</a>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Sección de Cards -->
      <div class="cards">
        <div v-for="(articulo, index) in articulos" :key="index" class="card">
          <img :src="articulo.imagen" alt="articulo-titulo" class="card-img" />
          <h3 class="card-titulo">{{ articulo.titulo }}</h3>
          <p class="card-resumen">{{ articulo.resumen }}</p>
          <a :href="articulo.enlace" target="_blank" class="button">Leer más</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Revista',
    data() {
      return {
        articulos: [
          {
            id: 1,
            titulo: 'IA en la Educación',
            resumen: 'Un análisis sobre el impacto de la IA en la enseñanza moderna...',
            imagen: 'https://uacucb.edu.bo/Assets/images/uac_pucarani_ucb_enfermeria2.jpg',
            enlace: 'https://conr-bo.com/index.php/conr'
          },
          {
            id: 2,
            titulo: 'Desarrollo Web Futuro',
            resumen: 'Explorando nuevas tendencias y tecnologías en desarrollo web...',
            imagen: 'https://uacucb.edu.bo/Assets/images/uac_pucarani_ucb_slider1_enfermeria.jpg',
            enlace: 'https://conr-bo.com/index.php/conr'
          },
          {
            id: 3,
            titulo: 'Salud y Tecnología',
            resumen: 'La fusión de la tecnología con la atención médica...',
            imagen: 'https://uacucb.edu.bo/Assets/images/uac_pucarani_ucb_enfermeria.jpg',
            enlace: 'https://conr-bo.com/index.php/conr'
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Estilos generales */
  .revista-container {
    padding: 20px;
    background-color: #082447; /* Azul oscuro */
    color: white;
    min-height: 100vh;
  }
  
  .titulo-revista {
    font-size: 2.5rem;
    color: #FFCC00; /* Amarillo */
    margin-bottom: 20px;
    text-align: center;
  }
  
  /* Carrusel de artículos */
  .carousel {
    overflow: hidden;
    margin-bottom: 40px;
  }
  
  .carousel-track {
    display: flex;
    gap: 20px;
    transition: transform 0.5s ease-in-out;
  }
  
  .carousel-item {
    min-width: 300px;
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .carousel-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .carousel-content {
    padding: 15px;
  }
  
  .articulo-titulo {
    font-size: 1.5rem;
    color: #004080; /* Azul más oscuro */
    margin: 10px 0;
  }
  
  .articulo-resumen {
    color: #333;
    margin-bottom: 15px;
  }
  
  /* Cards */
  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  
  .card {
    background-color: white;
    border: 1px solid #ccc;
    padding: 20px;
    width: 300px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .card-img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
  }
  
  .card-titulo {
    font-size: 1.3rem;
    color: #004080; /* Azul */
    margin: 10px 0;
  }
  
  .card-resumen {
    color: #333;
    margin-bottom: 15px;
  }
  
  /* Botón Leer más */
  .button {
    display: inline-block;
    padding: 10px 15px;
    background-color: #FFCC00; /* Amarillo */
    color: #082447; /* Azul */
    text-decoration: none;
    border-radius: 4px;
    font-weight: bold;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .button:hover {
    background-color: #082447; /* Azul */
    color: #FFCC00; /* Amarillo */
  }
  </style>
  
