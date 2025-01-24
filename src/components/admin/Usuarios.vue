<template>
    <div class="crud-page">
      <!-- Encabezado -->
      <header class="crud-header">
        <h1>Gestión de Usuarios</h1>
        <button class="btn-add" @click="openModal('create')">+ Añadir Usuario</button>
      </header>
  
      <!-- Barra de búsqueda -->
      <div class="search-bar">
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="Buscar por nombre o correo..." 
          @input="filterData" 
        />
      </div>
  
      <!-- Tabla -->
      <table class="crud-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Rol</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in filteredData" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.role }}</td>
            <td>
              <span :class="{'active': user.isActive, 'inactive': !user.isActive}">
                {{ user.isActive ? 'Activo' : 'Inactivo' }}
              </span>
            </td>
            <td>
              <button @click="openModal('edit', user)">Editar</button>
              <button @click="confirmDelete(user.id)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- Paginación -->
      <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 1">Anterior</button>
        <span>Página {{ currentPage }}</span>
        <button @click="nextPage" :disabled="currentPage >= totalPages">Siguiente</button>
      </div>
  
      <!-- Modal -->
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <h2>{{ modalAction === 'create' ? 'Crear Usuario' : 'Editar Usuario' }}</h2>
          <form @submit.prevent="handleSubmit">
            <input 
              type="text" 
              v-model="formData.name" 
              placeholder="Nombre" 
              required 
            />
            <input 
              type="email" 
              v-model="formData.email" 
              placeholder="Correo" 
              required 
            />
            <select v-model="formData.role" required>
              <option value="admin">Administrador</option>
              <option value="user">Usuario</option>
            </select>
            <button type="submit">
              {{ modalAction === 'create' ? 'Añadir' : 'Guardar' }}
            </button>
          </form>
          <button @click="closeModal">Cerrar</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        users: [], // Datos originales
        filteredData: [], // Datos filtrados
        searchQuery: "",
        showModal: false,
        modalAction: "create", // 'create' o 'edit'
        formData: {}, // Datos del formulario
        currentPage: 1,
        itemsPerPage: 5,
      };
    },
    computed: {
      totalPages() {
        return Math.ceil(this.filteredData.length / this.itemsPerPage);
      },
    },
    methods: {
      filterData() {
        this.filteredData = this.users.filter(
          (user) =>
            user.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
      prevPage() {
        if (this.currentPage > 1) this.currentPage--;
      },
      nextPage() {
        if (this.currentPage < this.totalPages) this.currentPage++;
      },
      openModal(action, user = {}) {
        this.modalAction = action;
        this.formData = { ...user };
        this.showModal = true;
      },
      closeModal() {
        this.showModal = false;
        this.formData = {};
      },
      handleSubmit() {
        if (this.modalAction === "create") {
          // Lógica para añadir un usuario
          this.users.push({ ...this.formData, id: Date.now() });
        } else if (this.modalAction === "edit") {
          // Lógica para actualizar un usuario
          const index = this.users.findIndex((u) => u.id === this.formData.id);
          if (index !== -1) this.users.splice(index, 1, this.formData);
        }
        this.filterData();
        this.closeModal();
      },
      confirmDelete(id) {
        if (confirm("¿Está seguro de eliminar este usuario?")) {
          this.users = this.users.filter((user) => user.id !== id);
          this.filterData();
        }
      },
    },
    mounted() {
      // Datos iniciales (puedes reemplazar con datos de API)
      this.users = [
        { id: 1, name: "Juan Pérez", email: "juan@mail.com", role: "admin", isActive: true },
        { id: 2, name: "Ana López", email: "ana@mail.com", role: "user", isActive: false },
      ];
      this.filterData();
    },
  };
  </script>
  
  <style scoped>
  .crud-page {
    padding: 20px;
  }
  .crud-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  .btn-add {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
  }
  .crud-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  .crud-table th, .crud-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  .pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .modal {
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
    padding: 20px;
    border-radius: 5px;
  }
  </style>
  