<template>
    <div class="noticias-container">
      <div v-for="noticia in noticias" :key="noticia.idNoticia" class="card">
        <img 
          :src="`http://localhost:3001/${noticia.Imagen}`" 
          alt="Imagen de la noticia" 
          class="card-image" 
          @error="onImageError" 
        />
  
        <div class="card-content">
          <h1 class="card-title">{{ noticia.Titulo }}</h1>
          <p class="card-description">{{ obtenerPrimerParrafo(noticia.Contenido) }}</p>
          <p class="card-category"><strong>Categoría:</strong> {{ noticia.Categoria }}</p>
          <p class="card-date">
            <strong>Fecha:</strong> {{ new Date(noticia.Fecha_publicacion).toLocaleDateString() }}
          </p>
  
          <!-- Botones de Editar y Eliminar -->
          <div class="buttons-container">
            <button @click="editarNoticia(noticia)" class="edit-button">Editar</button>
            <button @click="confirmarEliminar(noticia.idNoticia)" class="delete-button">Eliminar</button>
          </div>
        </div>
      </div>
  
      <!-- Formulario de edición (modificar el contenido al ser visible) -->
      <div v-if="isEditing" class="edit-form-overlay" @click.self="closeEditForm">
        <div class="edit-form-container">
          <h1>Editar Noticia</h1>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="Titulo">Título</label>
              <input type="text" v-model="form.Titulo" required placeholder="Escribe el título de la noticia" />
            </div>
  
            <div class="form-group">
              <label for="Contenido">Contenido</label>
              <textarea v-model="form.Contenido" required rows="10" placeholder="Escribe el contenido aquí" class="content-textarea"></textarea>
            </div>
  
            <div class="form-group">
              <label for="Fecha_publicacion">Fecha de Publicación</label>
              <input type="date" v-model="form.Fecha_publicacion" required />
            </div>
  
            <div class="form-group">
              <label for="Categoria">Categoría</label>
              <input type="text" v-model="form.Categoria" required placeholder="Categoría de la noticia" />
            </div>
  
            <div class="form-group">
              <label for="Imagen">Imagen</label>
              <input type="file" @change="handleFileUpload" />
              <div v-if="form.Imagen" class="image-preview">
                <img :src="imagePreview" alt="Imagen seleccionada" />
              </div>
            </div>
  
            <div class="form-group">
              <label for="Autor">Autor</label>
              <input type="text" v-model="form.Autor" placeholder="Nombre del autor" />
            </div>
  
            <button type="submit">Guardar cambios</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "NoticiasList",
    data() {
      return {
        noticias: [],
        isEditing: false,  // Para controlar la visibilidad del formulario de edición
        form: {
          Titulo: "",
          Contenido: "",
          Fecha_publicacion: "",
          Categoria: "",
          Imagen: null,
          Autor: "",
        },
        currentNoticiaId: null,
        imagePreview: "",
      };
    },
    methods: {
      async obtenerNoticias() {
        try {
          const response = await axios.get("http://localhost:3001/noticias/all");
          if (response.data.success) {
            this.noticias = response.data.noticias;
          } else {
            console.error("Error al obtener noticias:", response.data.message);
          }
        } catch (error) {
          console.error("Error al conectar con el servidor:", error);
        }
      },
      obtenerPrimerParrafo(contenido) {
        const primerParrafo = contenido.split("\n")[0];
        return primerParrafo.length > 100
          ? primerParrafo.substring(0, 100) + "..."
          : primerParrafo;
      },
      onImageError(event) {
        event.target.src = "https://via.placeholder.com/300"; // Imagen por defecto
      },
      editarNoticia(noticia) {
        this.isEditing = true;
        this.currentNoticiaId = noticia.idNoticia;
        this.form.Titulo = noticia.Titulo;
        this.form.Contenido = noticia.Contenido;
        this.form.Fecha_publicacion = noticia.Fecha_publicacion.split("T")[0];
        this.form.Categoria = noticia.Categoria;
        this.form.Imagen = noticia.Imagen;
        this.form.Autor = noticia.Autor;
        this.imagePreview = `http://localhost:3001/${noticia.Imagen}`;
      },
      closeEditForm() {
        this.isEditing = false;
      },
      async submitForm() {
        try {
          const formData = new FormData();
          formData.append("Titulo", this.form.Titulo);
          formData.append("Contenido", this.form.Contenido);
          formData.append("Fecha_publicacion", this.form.Fecha_publicacion);
          formData.append("Categoria", this.form.Categoria);
          formData.append("Autor", this.form.Autor);
          if (this.form.Imagen instanceof File) {
            formData.append("Imagen", this.form.Imagen);
          }
  
          const response = await axios.put(`http://localhost:3001/noticias/edit/${this.currentNoticiaId}`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });
  
          if (response.data.success) {
            this.isEditing = false;
            this.obtenerNoticias();
          } else {
            console.error("Error al editar la noticia:", response.data.message);
          }
        } catch (error) {
          console.error("Error al enviar el formulario:", error);
        }
      },
      confirmarEliminar(id) {
        if (confirm("¿Estás seguro de eliminar esta noticia?")) {
          this.eliminarNoticia(id);
        }
      },
      async eliminarNoticia(id) {
        try {
          const response = await axios.delete(`http://localhost:3001/noticias/delete/${id}`);
          if (response.data.success) {
            this.obtenerNoticias();
          } else {
            console.error("Error al eliminar la noticia:", response.data.message);
          }
        } catch (error) {
          console.error("Error al eliminar la noticia:", error);
        }
      },
      handleFileUpload(event) {
        this.form.Imagen = event.target.files[0];
        this.imagePreview = URL.createObjectURL(this.form.Imagen);
      },
    },
    mounted() {
      this.obtenerNoticias();
    },
  };
  </script>
  
  <style scoped>
  /* Contenedor de noticias */
  .noticias-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin-left: 260px; /* Ajusta según el ancho de tu barra */
  }
  
  /* Estilos de las tarjetas de noticias */
  .card {
    width: 300px;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .card:hover {
    transform: translateY(-5px);
  }
  
  .card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .card-content {
    padding: 15px;
  }
  
  .card-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: #333;
  }
  
  .card-description {
    font-size: 1rem;
    margin-bottom: 10px;
    color: #666;
  }
  
  .card-category,
  .card-date {
    font-size: 0.9rem;
    color: #888;
  }
  
  /* Contenedor de botones */
  .buttons-container {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
  }
  
  /* Estilos para los botones */
  .edit-button, .delete-button {
    background-color: #007bff; /* Azul */
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
  }
  
  .edit-button:hover {
    background-color: #fbc02d; /* Amarillo */
  }
  
  .delete-button {
    background-color: #f44336;
  }
  
  .delete-button:hover {
    background-color: #d32f2f;
  }
  
  /* Estilos del formulario emergente */
.edit-form-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.edit-form-container {
  background-color: white;
  border-radius: 8px;
  padding: 120px 100px; /* Ajustado el padding */
  width: 350px; /* Ancho ajustado */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  max-height: 60vh; /* Limita la altura del formulario */
  overflow-y: auto; /* Permite el desplazamiento si el contenido excede la altura */
}

.edit-form-container img {
  max-width: 100%; /* La imagen no excederá el ancho del contenedor */
  height: auto; /* Mantiene la proporción de la imagen */
}

.edit-form-container h1 {
  margin-bottom: 10px; /* Reducido el margen inferior */
  font-size: 1.4rem; /* Tamaño de fuente ajustado */
  color: #333;
}

.form-group {
  margin-bottom: 10px; /* Reducido el margen entre campos */
}

.form-group label {
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 6px 10px; /* Reducido el padding */
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem; /* Tamaño de fuente ajustado */
}

.form-group textarea {
  resize: vertical;
  min-height: 80px; /* Ajustado el tamaño mínimo del textarea */
}

.edit-form-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.edit-form-buttons button {
  padding: 8px 12px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.edit-form-buttons button.save {
  background-color: #4CAF50;
  color: white;
}

.edit-form-buttons button.cancel {
  background-color: #f44336;
  color: white;
}

/* Estilos adicionales para el overlay y el cierre */
.edit-form-overlay {
  z-index: 9999;
}

.edit-form-overlay .close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 20px;
  cursor: pointer;
  color: #333;
}
  </style>
  