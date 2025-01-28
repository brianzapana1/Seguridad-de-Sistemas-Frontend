<template>
    <div class="add-resource">
      <h2>Añadir Recurso Académico</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="Titulo">Título:</label>
          <input type="text" v-model="formData.Titulo" placeholder="Ingresa el título" required />
        </div>
        <div class="form-group">
          <label for="Autor">Autor:</label>
          <input type="text" v-model="formData.Autor" placeholder="Ingresa el autor" required />
        </div>
        <div class="form-group">
          <label for="Tipo">Tipo:</label>
          <input type="text" v-model="formData.Tipo" placeholder="Ingresa el tipo" required />
        </div>
        <div class="form-group">
          <label for="Categoria">Categoría:</label>
          <input type="text" v-model="formData.Categoria" placeholder="Ingresa la categoría" required />
        </div>
        <div class="form-group">
          <label for="Portada">Portada:</label>
          <input id="portada" type="file" @change="handleFileUpload('Portada', $event)" />
        </div>
        <div class="form-group">
          <label for="ArchivoPDF">Archivo PDF:</label>
          <input id="archivoPDF" type="file" @change="handleFileUpload('ArchivoPDF', $event)" />
        </div>
        <button type="submit">Añadir Recurso</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "AddResource",
    data() {
      return {
        formData: {
          Titulo: "",
          Autor: "",
          Tipo: "",
          Categoria: "",
          Portada: null,
          ArchivoPDF: null,
        },
      };
    },
    methods: {
      handleFileUpload(field, event) {
        this.formData[field] = event.target.files[0];
      },
      async submitForm() {
        try {
          const data = new FormData();
          Object.keys(this.formData).forEach((key) => {
            data.append(key, this.formData[key]);
          });
  
          const response = await axios.post("http://localhost:3001/api/recursos/add", data, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
  
          alert("Recurso añadido con éxito");
  
          // Limpieza de formulario
          this.resetForm();
  
          // Emite un evento para refrescar la lista
          this.$emit("resource-added", response.data.recurso);
        } catch (error) {
          console.error(error);
          alert("Error al añadir el recurso");
        }
      },
      resetForm() {
        this.formData = {
          Titulo: "",
          Autor: "",
          Tipo: "",
          Categoria: "",
          Portada: null,
          ArchivoPDF: null,
        };
  
        // Limpia los inputs de archivos
        document.getElementById("portada").value = "";
        document.getElementById("archivoPDF").value = "";
      },
    },
  };
  </script>
  
  <style scoped>
  /* Contenedor principal */
  .add-resource {
    margin-left: 300px; /* Incrementa el margen izquierdo */
    padding: 2rem;
    max-width: 600px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  /* Estilo de los campos del formulario */
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #333;
  }
  
  input[type="text"],
  input[type="file"] {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
  }
  
  input[type="text"]::placeholder {
    color: #aaa;
  }
  
  button {
    background-color: #007bff;
    color: white;
    padding: 0.8rem 2rem;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  h2 {
    margin-bottom: 2rem;
    color: #444;
    text-align: center;
  }
  </style>
  