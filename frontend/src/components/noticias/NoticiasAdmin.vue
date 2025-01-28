<template>
    <div class="add-news">
      <div class="form-container">
        <h1>Añadir Noticia</h1>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="Titulo">Título</label>
            <input type="text" v-model="form.Titulo" required placeholder="Escribe el título de la noticia" />
          </div>
  
          <div class="form-group">
            <label for="Contenido">Contenido</label>
            <textarea
              v-model="form.Contenido"
              required
              rows="10"
              placeholder="Escribe el contenido aquí"
              class="content-textarea"
            ></textarea>
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
            <!-- Mostrar una previsualización de la imagen seleccionada (opcional) -->
            <div v-if="form.Imagen" class="image-preview">
              <img :src="imagePreview" alt="Imagen seleccionada" />
            </div>
          </div>
  
          <div class="form-group">
            <label for="Autor">Autor</label>
            <input type="text" v-model="form.Autor" placeholder="Nombre del autor" />
          </div>
  
          <button type="submit">Añadir Noticia</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        form: {
          Titulo: "",
          Contenido: "",
          Fecha_publicacion: "",
          Categoria: "",
          Imagen: null,
          Autor: "",
        },
        imagePreview: null, // Variable para almacenar la vista previa de la imagen
      };
    },
    methods: {
      handleFileUpload(event) {
        this.form.Imagen = event.target.files[0];
        if (this.form.Imagen) {
          this.imagePreview = URL.createObjectURL(this.form.Imagen); // Generar vista previa de la imagen
        }
      },
  
      submitForm() {
        // Validación de campos requeridos
        if (!this.form.Contenido || !this.form.Titulo || !this.form.Fecha_publicacion || !this.form.Categoria) {
          alert("Todos los campos son obligatorios");
          return;
        }
  
        const formData = new FormData();
        for (const key in this.form) {
          formData.append(key, this.form[key]);
        }
  
        axios
          .post("http://localhost:3001/noticias/add", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((response) => {
            alert("Noticia añadida exitosamente!");
            this.$emit("news-added", response.data.noticia);
            this.clearForm();  // Limpiar formulario después de enviar
          })
          .catch((error) => {
            console.error(error);
            alert("Error al añadir noticia.");
          });
      },
  
      clearForm() {
        // Limpiar todos los campos del formulario
        this.form.Titulo = "";
        this.form.Contenido = "";
        this.form.Fecha_publicacion = "";
        this.form.Categoria = "";
        this.form.Imagen = null;
        this.form.Autor = "";
        this.imagePreview = null; // Limpiar la vista previa de la imagen
        // Limpiar el campo de entrada de archivo
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) {
          fileInput.value = ""; // Esto limpia la selección del archivo
        }
      },
    },
  };
  </script>
  
  <style lang="scss">
  .add-news {
    display: flex;
    justify-content: flex-start;
    padding: 20px;
    min-height: 100vh;
    background-color: #f0f0f0;
  
    .form-container {
      max-width: 800px;
      width: 100%;
      margin-left: 250px;
      padding: 40px;
      background-color: #fff;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      transition: all 0.3s ease;
    }
  
    h1 {
      font-size: 2.2rem;
      font-weight: 600;
      color: #333;
      margin-bottom: 30px;
    }
  
    .form-group {
      margin-bottom: 20px;
  
      label {
        display: block;
        margin-bottom: 8px;
        font-weight: bold;
        font-size: 1rem;
        color: #333;
      }
  
      input,
      textarea {
        width: 100%;
        padding: 12px 16px;
        border: 1px solid #ccc;
        border-radius: 8px;
        font-size: 1rem;
        box-sizing: border-box;
        transition: all 0.3s ease;
        background-color: #f9f9f9;
      }
  
      input:focus,
      textarea:focus {
        border-color: #007bff;
        background-color: #f1faff;
        outline: none;
      }
  
      textarea {
        resize: none;
        transition: background-color 0.3s ease;
      }
    }
  
    button {
      width: 100%;
      padding: 12px 16px;
      background-color: #007bff;
      color: #fff;
      font-size: 1.2rem;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2);
    }
  
    button:hover {
      background-color: #0056b3;
      box-shadow: 0 6px 12px rgba(0, 123, 255, 0.4);
    }
  
    /* Estilo para la vista previa de la imagen */
    .image-preview {
      margin-top: 10px;
      img {
        max-width: 100%;
        max-height: 200px;
        object-fit: cover;
        border-radius: 8px;
      }
    }
  
    @media (max-width: 768px) {
      .form-container {
        margin-left: 0;
        padding: 20px;
      }
  
      h1 {
        font-size: 1.8rem;
      }
  
      button {
        font-size: 1rem;
      }
    }
  }
  </style>
  