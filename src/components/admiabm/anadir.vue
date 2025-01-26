<template>
  <div class="page-container">
    <nav class="navbar">Gestión de Roles</nav>
    <div class="background-overlay">
      <div class="role-container">
        <h1>Añadir Nuevo Rol</h1>
        <form @submit.prevent="submitForm" class="role-form">
          <div class="form-group">
            <label for="roleName">Nombre del Rol</label>
            <input
              type="text"
              id="roleName"
              v-model="roleName"
              placeholder="Ingresa el nombre del rol"
              required
            />
          </div>
          <div class="form-group">
            <label for="description">Descripción</label>
            <textarea
              id="description"
              v-model="description"
              placeholder="Ingresa una breve descripción"
            ></textarea>
          </div>
          <button type="submit" class="btn-submit">Añadir Rol</button>
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
            </tr>
          </thead>
          <tbody>
            <tr v-for="role in roles" :key="role.id">
              <td>{{ role.id }}</td>
              <td>{{ role.name }}</td>
              <td>{{ role.description }}</td>
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
      roles: [
        { id: 1, name: 'Administrador', description: 'Tiene acceso total a la plataforma' },
        { id: 2, name: 'Editor', description: 'Puede modificar contenido pero no gestionar usuarios' },
        { id: 3, name: 'Usuario', description: 'Solo tiene acceso para ver contenido' },
      ],
    };
  },
  methods: {
    submitForm() {
      if (this.roleName && this.description) {
        const newRole = {
          id: this.roles.length + 1,
          name: this.roleName,
          description: this.description,
        };
        this.roles.push(newRole);
        alert('Rol añadido exitosamente');
        this.roleName = '';
        this.description = '';
      } else {
        alert('Por favor, completa todos los campos obligatorios.');
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
</style>
