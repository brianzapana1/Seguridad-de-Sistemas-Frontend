<template>
  <div class="biblioteca-container" aria-label="Digital Nursing and Physiotherapy Platform">
    <h1 class="titulo-biblioteca">Biblioteca Digital</h1>

    <!-- Search and Filter Section -->
    <div class="search-filter">
      <input 
        type="text" 
        v-model="searchQuery" 
        placeholder="Buscar por temas de enfermería o fisioterapia..." 
        class="input-search" 
        aria-label="Search resources" 
      />
      <select v-model="selectedCategory" aria-label="Filter by category" class="select-category">
        <option value="">Todas las Categorías</option>
        <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
      </select>
    </div>

    <!-- Nursing and Physiotherapy Content Section -->
    <section class="recursos">
      <h2 class="subtitulo">Noticias de Enfermería y Fisioterapia</h2>
      <div class="recursos-grid" role="list">
        <div
          v-for="(recurso, index) in filteredResources"
          :key="index"
          class="recurso-card"
          role="listitem"
        >
          <img :src="recurso.imagen" :alt="`Imagen de ${recurso.titulo}`" class="recurso-img" />
          <div class="card-content">
            <h3 class="recurso-titulo">{{ recurso.titulo }}</h3>
            <p class="recurso-descripcion">{{ recurso.descripcion }}</p>
            <p class="recurso-fecha">{{ recurso.fecha }}</p>
            <button @click="openResourceModal(recurso)" class="btn-ver" aria-label="Preview resource">Más información</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal for Book Details -->
    <div v-if="showModal" class="modal-overlay" role="dialog" aria-labelledby="resource-title" @click.self="closeModal">
      <div class="modal-content">
        <img :src="currentResource.imagen" :alt="`Imagen de ${currentResource.titulo}`" class="modal-img" />
        <h3 id="resource-title">{{ currentResource.titulo }}</h3>
        <p><strong>Descripción:</strong> {{ currentResource.descripcion }}</p>
        <p><strong>Autor:</strong> {{ currentResource.autor }}</p>
        <button @click="descargarRecurso(currentResource.id)" class="btn-descargar">Descargar</button>
        <button @click="closeModal" class="btn-cerrar">Cerrar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BibliotecaDigital',
  data() {
    return {
      recursos: [
        { 
          id: 1, 
          titulo: 'Técnicas de cuidado intensivo en enfermería', 
          descripcion: 'Nuevas guías para mejorar la atención en unidades críticas.', 
          imagen: '/f1.jpg',
          fecha: '7/11/2024',
          autor: 'Dr. María Pérez',
          categoria: 'Enfermería'
        },
        { 
          id: 2, 
          titulo: 'Rehabilitación física post-COVID', 
          descripcion: 'Estudios recientes sobre fisioterapia y recuperación post-viral.', 
          imagen: '/E1.jpg',
          fecha: '5/11/2024',
          autor: 'Dr. Juan López',
          categoria: 'Fisioterapia'
        },
        { 
          id: 3, 
          titulo: 'Innovación en equipos médicos', 
          descripcion: 'Nuevos avances en tecnología para fisioterapia.', 
          imagen: '/E2.jpg',
          fecha: '1/11/2024',
          autor: 'Dra. Ana González',
          categoria: 'Fisioterapia'
        },
        { 
          id: 4, 
          titulo: 'Terapia respiratoria en pacientes críticos', 
          descripcion: 'Un enfoque moderno para el tratamiento de afecciones respiratorias graves.', 
          imagen: '/F2.jpg',
          fecha: '3/11/2024',
          autor: 'Dr. Luis Martínez',
          categoria: 'Enfermería'
        },
        { 
          id: 5, 
          titulo: 'Fisioterapia deportiva avanzada', 
          descripcion: 'Guía para optimizar el rendimiento físico y prevenir lesiones.', 
          imagen: '/E3.jpg',
          fecha: '29/10/2024',
          autor: 'Dra. Isabel Gómez',
          categoria: 'Fisioterapia'
        },
        { 
          id: 6, 
          titulo: 'Cuidados paliativos en enfermería', 
          descripcion: 'Mejorando la calidad de vida de los pacientes terminales.', 
          imagen: '/F3.jpg',
          fecha: '25/10/2024',
          autor: 'Dr. Roberto Sánchez',
          categoria: 'Enfermería'
        }
      ],
      searchQuery: '',
      selectedCategory: '',
      categories: ['Enfermería', 'Fisioterapia'],
      showModal: false,
      currentResource: {}
    };
  },
  computed: {
    filteredResources() {
      return this.recursos.filter(recurso => 
        recurso.titulo.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
        (this.selectedCategory === '' || recurso.categoria === this.selectedCategory)
      );
    }
  },
  methods: {
    openResourceModal(recurso) {
      this.currentResource = recurso;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    descargarRecurso(id) {
      alert(`Descargando recurso con ID: ${id}`);
    }
  }
};
</script>

<style scoped>
/* General Styles */
.biblioteca-container {
  padding: 20px;
  background-image: url('/Libros.jpg'); /* Cambia esta URL por la imagen que desees */
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  color: #1c4b81;
  min-height: 100vh;
  text-align: center;
}
.titulo-biblioteca {
  color: yellow;
  font-size: 2.5em;
  margin-bottom: 20px;
}
.search-filter {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
}
.input-search {
  padding: 15px;
  border-radius: 8px;
  font-size: 1.1em;
  border: 1px solid #ccc;
  width: 40%;
}
.select-category {
  padding: 15px;
  border-radius: 8px;
  font-size: 1.1em;
  border: 1px solid #ccc;
}
.recursos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
.recurso-card {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s;
}
.recurso-card:hover {
  transform: translateY(-5px);
}
.recurso-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}
.card-content {
  padding: 15px;
}
.recurso-titulo {
  font-size: 18px;
  font-weight: bold;
  color: #0056b3;
}
.recurso-descripcion {
  font-size: 14px;
  color: #2b4e7b;
  margin: 10px 0;
}
.recurso-fecha {
  font-size: 12px;
  color: #999;
  margin-bottom: 10px;
}
.btn-ver {
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  background-color: #0056b3;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
}
.btn-ver:hover {
  background-color: #003d80;
}
/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: white;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  width: 90%;
  max-width: 500px;
}
.modal-img {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}
.btn-descargar,
.btn-cerrar {
  padding: 10px 20px;
  margin: 10px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
}
.btn-descargar {
  background-color: #28a745;
  color: white;
}
.btn-descargar:hover {
  background-color: #218838;
}
.btn-cerrar {
  background-color: #dc3545;
  color: white;
}
.btn-cerrar:hover {
  background-color: #c82333;
}
</style>