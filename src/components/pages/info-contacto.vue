<template>
  <div class="admin-container">
    <h1 class="admin-title">Administración de Contenidos</h1>

    <!-- Contenedor para la barra lateral y el contenido principal -->
    <div class="content-container">
      <!-- Barra lateral con listado de Noticias y Libros -->
      <aside class="sidebar">
        <h2 class="sidebar-title">Contenido Actual</h2>
        
        <!-- Listado de Noticias Existentes -->
        <div class="sidebar-section">
          <h3>Noticias Existentes</h3>
          <ul>
            <li v-for="noticia in noticias" :key="noticia.id" class="sidebar-item">
              <h4>{{ noticia.titulo }}</h4>
              <button @click="editarNoticia(noticia)" class="btn-edit-sidebar">Editar</button>
              <button @click="eliminarNoticia(noticia.id)" class="btn-delete-sidebar">Eliminar</button>
            </li>
          </ul>
        </div>

        <!-- Listado de Libros Existentes -->
        <div class="sidebar-section">
          <h3>Libros Existentes</h3>
          <ul>
            <li v-for="libro in libros" :key="libro.id" class="sidebar-item">
              <h4>{{ libro.titulo }}</h4>
              <button @click="editarLibro(libro)" class="btn-edit-sidebar">Editar</button>
              <button @click="eliminarLibro(libro.id)" class="btn-delete-sidebar">Eliminar</button>
            </li>
          </ul>
        </div>
      </aside>

      <!-- Contenido principal de administración -->
      <main class="admin-main">
        <!-- Sección de Noticias -->
        <section class="admin-section">
          <h2 class="section-title">Gestión de Noticias</h2>
          
          <!-- Formulario para agregar o actualizar una noticia -->
          <div class="form-container">
            <h3 class="form-title">Agregar/Actualizar Noticia</h3>
            <form @submit.prevent="agregarActualizarNoticia">
              <input type="text" v-model="nuevaNoticia.titulo" placeholder="Título de la noticia" required />
              <textarea v-model="nuevaNoticia.descripcion" placeholder="Descripción de la noticia" rows="4" required></textarea>
              <input type="url" v-model="nuevaNoticia.imagen" placeholder="URL de la imagen" required />
              <button type="submit" class="btn-submit">Guardar Noticia</button>
            </form>
          </div>
        </section>

        <!-- Sección de Biblioteca Digital -->
        <section class="admin-section">
          <h2 class="section-title">Gestión de Biblioteca Digital</h2>
          
          <!-- Formulario para agregar o actualizar un libro -->
          <div class="form-container">
            <h3 class="form-title">Agregar/Actualizar Libro</h3>
            <form @submit.prevent="agregarActualizarLibro">
              <input type="text" v-model="nuevoLibro.titulo" placeholder="Título del libro" required />
              <input type="text" v-model="nuevoLibro.autor" placeholder="Autor del libro" required />
              <input type="url" v-model="nuevoLibro.url" placeholder="URL de descarga del libro" required />
              <button type="submit" class="btn-submit">Guardar Libro</button>
            </form>
          </div>

          <!-- Sección para Subir PDFs -->
          <div class="upload-section">
            <h2>Subir Documento Del Libro en PDF</h2>
            <form @submit.prevent="uploadPdf">
              <label for="pdfUpload">Seleccionar PDF:</label>
              <input type="file" id="pdfUpload" @change="onFileChange" accept=".pdf" required />
              <button type="submit">Subir PDF</button>
            </form>
            <div v-if="uploadMessage" class="upload-message">{{ uploadMessage }}</div>
          </div>
        </section>
      </main>
    </div>

    <!-- Nueva Sección de Vista Previa del Dashboard y Botón de Acceso -->
    <div class="dashboard-section">
      <!-- Card de Vista Previa del Dashboard -->
      <div class="dashboard-preview-card">
        <h3>Vista Previa del Dashboard</h3>
        <div class="preview-cards">
          <div class="card" v-for="(item, index) in previewItems" :key="index">
            <h4>{{ item.title }}</h4>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>

      <!-- Botón de Acceso al Dashboard -->
      <div class="access-dashboard">
        <button @click="navigateToDashboard" class="access-button">
          Acceder al Dashboard Universitario
        </button>
      </div>
    </div>
  </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        noticias: [
          { id: 1, titulo: 'Título de ejemplo de noticia', descripcion: 'Descripción de la noticia.', imagen: 'https://example.com/imagen.jpg' }
        ],
        nuevaNoticia: { titulo: '', descripcion: '', imagen: '' },
        
        libros: [
          { id: 1, titulo: 'Título de ejemplo de libro', autor: 'Autor del libro', url: 'https://example.com/libro.pdf' }
        ],
        nuevoLibro: { titulo: '', autor: '', url: '' },
        
        pdfFile: null, // Archivo PDF seleccionado
        uploadMessage: "", // Mensaje de confirmación o error
  
        // Datos para la vista previa del dashboard
        previewItems: [
          { title: 'Usuarios Registrados', description: 'Estadísticas de usuarios registrados en el sistema.' },
          { title: 'Libros Más Leídos', description: 'Datos de los libros más populares entre los estudiantes.' },
          { title: 'Carreras Populares', description: 'Carreras con mayor número de estudiantes registrados.' },
          { title: 'Distribución de Género', description: 'Distribución de género en las diferentes carreras.' }
        ]
      };
    },
    methods: {
      // Métodos para gestión de noticias
      agregarActualizarNoticia() {
        if (this.nuevaNoticia.id) {
          const index = this.noticias.findIndex(n => n.id === this.nuevaNoticia.id);
          if (index !== -1) this.noticias.splice(index, 1, { ...this.nuevaNoticia });
        } else {
          this.nuevaNoticia.id = Date.now();
          this.noticias.push({ ...this.nuevaNoticia });
        }
        this.nuevaNoticia = { titulo: '', descripcion: '', imagen: '' };
      },
      editarNoticia(noticia) {
        this.nuevaNoticia = { ...noticia };
      },
      eliminarNoticia(id) {
        this.noticias = this.noticias.filter(n => n.id !== id);
      },
  
      // Métodos para gestión de libros
      agregarActualizarLibro() {
        if (this.nuevoLibro.id) {
          const index = this.libros.findIndex(l => l.id === this.nuevoLibro.id);
          if (index !== -1) this.libros.splice(index, 1, { ...this.nuevoLibro });
        } else {
          this.nuevoLibro.id = Date.now();
          this.libros.push({ ...this.nuevoLibro });
        }
        this.nuevoLibro = { titulo: '', autor: '', url: '' };
      },
      editarLibro(libro) {
        this.nuevoLibro = { ...libro };
      },
      eliminarLibro(id) {
        this.libros = this.libros.filter(l => l.id !== id);
      },
  
      // Métodos para gestión de PDFs
      onFileChange(event) {
        const file = event.target.files[0];
        if (file && file.type === "application/pdf") {
          this.pdfFile = file;
          this.uploadMessage = "";
        } else {
          this.uploadMessage = "Por favor, selecciona un archivo PDF válido.";
        }
      },
      uploadPdf() {
        if (this.pdfFile) {
          // Lógica para subir el archivo al servidor (simulada)
          this.uploadMessage = `Archivo ${this.pdfFile.name} subido con éxito.`;
          this.pdfFile = null;
          document.getElementById("pdfUpload").value = ""; // Limpia el input
        } else {
          this.uploadMessage = "No se ha seleccionado ningún archivo.";
        }
      },
  
      // Método para redirigir al dashboard
      navigateToDashboard() {
        this.$router.push('/dashboard'); // Asegúrate de que esté configurado en Vue Router
      }
    }
  };
  </script>
  
  <style scoped>
  .admin-container {
    display: flex;
    padding: 20px;
    background-color: #f8f9fa;
    color: #333;
    max-width: 1200px;
    margin: 0 auto;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .admin-title {
    font-size: 2rem;
    color: #082447;
    text-align: center;
    width: 100%;
    margin-bottom: 20px;
  }
  
  .sidebar {
    width: 25%;
    padding: 20px;
    background-color: #082447;
    color: #fff;
    border-radius: 8px;
    margin-right: 20px;
  }
  
  .sidebar-title {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
  
  .sidebar-section {
    margin-bottom: 20px;
  }
  
  .sidebar-item {
    margin-bottom: 10px;
    padding: 10px;
    background-color: #134382;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .btn-edit-sidebar,
  .btn-delete-sidebar {
    font-size: 0.8rem;
    padding: 4px 8px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
  }
  
  .btn-edit-sidebar {
    background-color: #007bff;
    color: #fff;
  }
  
  .btn-delete-sidebar {
    background-color: #dc3545;
    color: #fff;
  }
  
  .admin-main {
    width: 75%;
  }
  
  .admin-section {
    margin-bottom: 40px;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .section-title {
    font-size: 1.5rem;
    color: #082447;
    margin-bottom: 20px;
  }
  
  .form-container {
    margin-bottom: 20px;
  }
  
  .form-title {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 10px;
  }
  
  form input,
  form textarea {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
  }
  
  .btn-submit {
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #082447;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .upload-section {
  margin-top: 30px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.upload-section h2 {
  font-size: 1.8rem;
  margin-bottom: 15px;
}

.upload-section label {
  font-size: 1rem;
  margin-bottom: 10px;
  display: block;
}

.upload-section input[type="file"] {
  margin-bottom: 15px;
}

.upload-section button {
  background-color: #082447;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.upload-section button:hover {
  background-color: #0056a6;
}

.upload-message {
  margin-top: 15px;
  font-size: 1rem;
  color: green;
}


.access-dashboard {
  margin: 2rem 0;
  text-align: center;
}

.access-button {
  padding: 0.7rem 1.5rem;
  font-size: 1.2rem;
  color: #fff;
  background-color: #42A5F5;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}
.access-button:hover {
  background-color: #1E88E5;
}

.dashboard-preview-card {
  margin-top: 2rem;
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.dashboard-preview-card h3 {
  text-align: center;
  margin-bottom: 1rem;
}

.preview-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.card {
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.card h4 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.card p {
  font-size: 0.9rem;
  color: #666;
}

.admin-container {
  display: flex;
  flex-direction: column;
}

.content-container {
  display: flex;
}

.sidebar {
  width: 250px;
  /* Ajustes adicionales para la barra lateral */
}

.admin-main {
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.dashboard-section {
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dashboard-preview-card {
  width: 90%;
  max-width: 1200px;
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.dashboard-preview-card h3 {
  text-align: center;
  margin-bottom: 1rem;
}

.preview-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.card {
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.card h4 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.card p {
  font-size: 0.9rem;
  color: #666;
}

.access-dashboard {
  margin-top: 1rem;
  text-align: center;
}

.access-button {
  padding: 0.7rem 1.5rem;
  font-size: 1.2rem;
  color: #fff;
  background-color: #42A5F5;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.access-button:hover {
  background-color: #1E88E5;
}

  </style>