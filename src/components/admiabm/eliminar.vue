<template>
  <div class="page-container">
    <nav class="navbar">Gestión de Roles</nav>
    <div class="background-overlay">
      <!-- Sección de Eliminar Rol -->
      <div class="role-container">
        <h1>Eliminar Rol</h1>
        <form @submit.prevent="submitDeleteForm" class="role-form">
          <div class="form-group">
            <label for="roleIdToDelete">ID del Rol a Eliminar</label>
            <input
              type="number"
              id="roleIdToDelete"
              v-model="roleIdToDelete"
              placeholder="Ingresa el ID del rol"
              required
            />
          </div>
          <button type="submit" class="btn-submit">Eliminar Rol</button>
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
                <button @click="deleteRole(role.id)" class="btn-delete">Eliminar</button>
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
      roleIdToDelete: '',
      roles: [
        { id: 1, name: 'Administrador', description: 'Tiene acceso total a la plataforma' },
        { id: 2, name: 'Editor', description: 'Puede modificar contenido pero no gestionar usuarios' },
        { id: 3, name: 'Usuario', description: 'Solo tiene acceso para ver contenido' },
      ],
    };
  },
  methods: {
    submitDeleteForm() {
      if (this.roleIdToDelete) {
        // Buscar el rol con el ID proporcionado
        const roleIndex = this.roles.findIndex(role => role.id === parseInt(this.roleIdToDelete));
        if (roleIndex !== -1) {
          // Si lo encontramos, lo eliminamos
          this.roles.splice(roleIndex, 1);
          alert('Rol eliminado exitosamente');

          // Limpiamos el campo del formulario
          this.roleIdToDelete = '';
        } else {
          alert('El ID proporcionado no existe.');
        }
      } else {
        alert('Por favor, ingresa un ID de rol.');
      }
    },
    deleteRole(roleId) {
      // Confirmación antes de eliminar
      const confirmation = confirm(`¿Estás seguro que deseas eliminar el rol con ID ${roleId}?`);
      if (confirmation) {
        const roleIndex = this.roles.findIndex(role => role.id === roleId);
        if (roleIndex !== -1) {
          this.roles.splice(roleIndex, 1);
          alert('Rol eliminado exitosamente');
        }
      }
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
input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}
textarea {
  resize: none;
}
.btn-submit,
.btn-delete {
  background-color: #004080;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
}
.btn-submit:hover,
.btn-delete:hover {
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
.btn-delete {
  background-color: #ff4040;
  color: white;
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.btn-delete:hover {
  background-color: #e60000;
}
</style>
