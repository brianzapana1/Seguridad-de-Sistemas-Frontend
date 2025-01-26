<template>
  <div class="page-container">
    <nav class="navbar">Gestión de Roles</nav>
    <div class="background-overlay">
      <!-- Sección de Editar Rol -->
      <div class="role-container">
        <h1>Editar Rol</h1>
        <form @submit.prevent="submitEditForm" class="role-form">
          <div class="form-group">
            <label for="editRoleName">Nombre del Rol</label>
            <select
              id="editRoleName"
              v-model="roleName"
              required
            >
              <option v-for="role in roles" :key="role.id" :value="role.name">{{ role.name }}</option>
            </select>
          </div>
          <div class="form-group">
            <label for="editDescription">Descripción</label>
            <select
              id="editDescription"
              v-model="description"
              required
            >
              <option v-for="role in roles" :key="role.id" :value="role.description">{{ role.description }}</option>
            </select>
          </div>
          <button type="submit" class="btn-submit">Actualizar Rol</button>
        </form>
      </div>

      <!-- Tabla de roles -->
      <div class="table-container">
        <h2>Roles Disponibles</h2>
        <table>
          <thead>
            <tr>
              <th>ID Rol</th>
              <th>Nombre del Rol</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="role in roles" :key="role.id">
              <td>{{ role.id }}</td>
              <td>{{ role.name }}</td>
              <td>{{ role.description }}</td>
              <td>
                <button @click="editRole(role)" class="btn-edit">Editar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roleName: '',
      description: '',
      isEditing: false, // Esta propiedad nos indica si estamos editando o agregando un rol
      editingRoleId: null, // El ID del rol que estamos editando
      roles: [
        { id: 1, name: 'Administrador', description: 'Tiene acceso total a la plataforma' },
        { id: 2, name: 'Editor', description: 'Puede modificar contenido pero no gestionar usuarios' },
        { id: 3, name: 'Usuario', description: 'Solo tiene acceso para ver contenido' },
      ],
    };
  },
  methods: {
    submitEditForm() {
      if (this.roleName && this.description) {
        // Si estamos editando, actualizamos el rol
        const roleIndex = this.roles.findIndex(role => role.name === this.roleName);
        if (roleIndex !== -1) {
          this.roles[roleIndex].description = this.description;
        }
        alert('Rol actualizado exitosamente');

        // Limpiamos los campos del formulario
        this.roleName = '';
        this.description = '';
      } else {
        alert('Por favor, completa todos los campos obligatorios.');
      }
    },
    editRole(role) {
      // Al hacer clic en "Editar", cargamos los datos del rol en el formulario
      this.roleName = role.name;
      this.description = role.description;
    },
  },
};
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Arial, sans-serif;
}
.navbar {
  background-color: #082447;
  color: white;
  padding: 15px;
  text-align: center;
  font-size: 1.5rem;
}
.background-overlay {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f0f0f0;
  padding: 20px 0;
}
.role-container {
  max-width: 500px;
  width: 90%;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
}
h1 {
  color: #004080;
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 20px;
}
.role-form {
  display: flex;
  flex-direction: column;
}
.form-group {
  margin-bottom: 15px;
}
label {
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
  display: block;
}
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}
.btn-submit {
  background-color: #004080;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
}
.btn-submit:hover {
  background-color: #003366;
}
.table-container {
  width: 90%;
  max-width: 800px;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
h2 {
  color: #004080;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 15px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
thead {
  background: #004080;
  color: white;
}
th,
td {
  padding: 12px;
  text-align: left;
  border: 1px solid #ddd;
}
tr:hover {
  background-color: #003366;
}
tr:hover td {
  background-color: #f4f4f4;
}
.btn-edit {
  background-color: #004080;
  color: white;
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.btn-edit:hover {
  background-color: #003366;
}
</style>
