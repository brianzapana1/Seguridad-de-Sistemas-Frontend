<template>
  <div class="resource-list">
    <h2 class="title">Lista de Recursos Académicos</h2>
    <div v-if="resources.length === 0" class="no-resources">
      No hay recursos disponibles.
    </div>
    <div class="card" v-for="resource in resources" :key="resource.idRecurso">
      <img 
        :src="`http://localhost:3001/${resource.Portada}`" 
        alt="Portada del recurso" 
        class="card-image"
      />
      <h3 class="card-title">{{ resource.Titulo }}</h3>
      <p class="card-info">Autor: {{ resource.Autor }}</p>
      <p class="card-info">Tipo: {{ resource.Tipo }}</p>
      <p class="card-info">Categoría: {{ resource.Categoria }}</p>
      <div class="card-buttons">
        <button class="edit-button" @click="openEditModal(resource)">Editar</button>
        <button class="delete-button" @click="deleteResource(resource.idRecurso)">Eliminar</button>
      </div>
    </div>

    <!-- Modal de Edición -->
    <div v-if="isEditModalOpen" class="modal-overlay">
      <div class="modal">
        <h3>Editar Recurso</h3>
        <form @submit.prevent="updateResource">
          <div class="form-group">
            <label for="Titulo">Título:</label>
            <input type="text" id="Titulo" v-model="editForm.Titulo" />
          </div>

          <div class="form-group">
            <label for="Autor">Autor:</label>
            <input type="text" id="Autor" v-model="editForm.Autor" />
          </div>

          <div class="form-group">
            <label for="Tipo">Tipo:</label>
            <input type="text" id="Tipo" v-model="editForm.Tipo" />
          </div>

          <div class="form-group">
            <label for="Categoria">Categoría:</label>
            <input type="text" id="Categoria" v-model="editForm.Categoria" />
          </div>

          <div class="form-group">
            <label for="Portada">Portada:</label>
            <input type="file" id="Portada" @change="handleFileUpload('Portada')" />
            <img 
              v-if="editForm.previewPortada" 
              :src="editForm.previewPortada" 
              alt="Vista previa de portada" 
              class="preview-image" 
            />
          </div>

          <div class="form-group">
            <label for="ArchivoPDF">Archivo PDF:</label>
            <input type="file" id="ArchivoPDF" @change="handleFileUpload('ArchivoPDF')" />
          </div>

          <div class="modal-buttons">
            <button type="submit" class="save-button">Guardar</button>
            <button type="button" class="cancel-button" @click="closeEditModal">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ResourceList",
  data() {
    return {
      resources: [],
      isEditModalOpen: false,
      editForm: {
        idRecurso: null,
        Titulo: "",
        Autor: "",
        Tipo: "",
        Categoria: "",
        Portada: null,
        previewPortada: null,
        ArchivoPDF: null,
      },
    };
  },
  async created() {
    await this.fetchResources();
  },
  methods: {
    async fetchResources() {
      try {
        const response = await axios.get("http://localhost:3001/api/recursos/all");
        this.resources = response.data.recursos;
      } catch (error) {
        console.error(error);
        alert("Error al cargar los recursos");
      }
    },
    openEditModal(resource) {
      this.editForm = { 
        ...resource, 
        Portada: null, 
        ArchivoPDF: null,
        previewPortada: `http://localhost:3001/${resource.Portada}`,
      };
      this.isEditModalOpen = true;
    },
    closeEditModal() {
      this.isEditModalOpen = false;
      this.editForm = {
        idRecurso: null,
        Titulo: "",
        Autor: "",
        Tipo: "",
        Categoria: "",
        Portada: null,
        previewPortada: null,
        ArchivoPDF: null,
      };
    },
    handleFileUpload(type) {
      const file = event.target.files[0];
      if (type === "Portada") {
        this.editForm.Portada = file;
        this.editForm.previewPortada = URL.createObjectURL(file);
      } else if (type === "ArchivoPDF") {
        this.editForm.ArchivoPDF = file;
      }
    },
    async updateResource() {
      const formData = new FormData();
      formData.append("Titulo", this.editForm.Titulo);
      formData.append("Autor", this.editForm.Autor);
      formData.append("Tipo", this.editForm.Tipo);
      formData.append("Categoria", this.editForm.Categoria);
      if (this.editForm.Portada) {
        formData.append("Portada", this.editForm.Portada);
      }
      if (this.editForm.ArchivoPDF) {
        formData.append("ArchivoPDF", this.editForm.ArchivoPDF);
      }

      try {
        const response = await axios.put(
          `http://localhost:3001/api/recursos/edit/${this.editForm.idRecurso}`,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        if (response.data.success) {
          alert("Recurso actualizado con éxito");
          this.closeEditModal();
          await this.fetchResources();
        } else {
          alert("Error al actualizar el recurso");
        }
      } catch (error) {
        console.error(error);
        alert("Error al actualizar el recurso");
      }
    },
    async deleteResource(id) {
      if (confirm("¿Estás seguro de que deseas eliminar este recurso?")) {
        try {
          await axios.delete(`http://localhost:3001/api/recursos/delete/${id}`);
          alert("Recurso eliminado con éxito");
          this.fetchResources();
        } catch (error) {
          console.error(error);
          alert("Error al eliminar el recurso");
        }
      }
    },
  },
};
</script>

<style scoped>
/* Contenedor principal */
.resource-list {
  margin-left: 260px; /* Ajusta según el diseño */
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

/* Título principal */
.title {
  width: 100%;
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
}

/* Mensaje de no recursos */
.no-resources {
  font-size: 1.2rem;
  color: #555;
  text-align: center;
  width: 100%;
}

/* Tarjetas de recursos */
.card {
  border: 1px solid #ddd;
  padding: 1.5rem;
  width: 220px;
  text-align: center;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Imagen de la tarjeta */
.card-image {
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 5px;
}

/* Títulos y texto */
.card-title {
  font-size: 1.2rem;
  color: #333;
  margin: 1rem 0 0.5rem;
}

.card-info {
  font-size: 1rem;
  color: #666;
  margin: 0.3rem 0;
}

/* Botones dentro de la tarjeta */
.card-buttons {
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
}

.edit-button,
.delete-button {
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.edit-button {
  background-color: #4caf50;
  color: white;
}

.delete-button {
  background-color: #f44336;
  color: white;
}

.edit-button:hover,
.delete-button:hover {
  transform: scale(1.05);
  opacity: 0.9;
}

/* Superposición del modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* Contenedor del modal */
.modal {
  background: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  animation: fadeIn 0.3s ease;
}

/* Animación de entrada */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Botones del modal */
.modal-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
}

.save-button,
.cancel-button {
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.save-button {
  background-color: #4caf50;
  color: white;
}

.cancel-button {
  background-color: #f44336;
  color: white;
}
.preview-image {
  margin-top: 1rem;
  max-width: 100%;
  max-height: 150px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid #ddd;
}
</style>
