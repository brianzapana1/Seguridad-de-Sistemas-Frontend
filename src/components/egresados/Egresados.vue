<template>
  <div class="banner-container">
    <div class="banner">
      <h1>Portal de Egresados</h1>
      <img src="@/assets/egresado.png" alt="Banner de egresados">
    </div>
  </div>

  <section class="mensaje">
    <div class="msj">
      <h1>
        Queremos mantenernos en contacto contigo y saber qué estás haciendo. Por ello, te invitamos a que actualices tus datos en el Sistema de Gestión de Egresados.
      </h1>
    </div>
  </section>

  <section class="block-container">
    <div class="block-1">
      <h1>¿Qué es el Portal de Egresados(as)?</h1>
      <p>
        Una vez que egresas de la Universidad Católica Boliviana de Pucarani, tu portal de estudiante se convierte automáticamente en tu portal de egresados(as). Para acceder a tu sesión, debes usar la misma información que utilizabas en el portal de estudiante. Si tienes problemas para ingresar, contacta con el área de soporte técnico al correo [correo de soporte]. En este portal podrás actualizar tus datos de contacto y consultar enlaces e información de interés sobre tu egreso.
      </p>
    </div>
    <div class="block-2">
      <img src="@/assets/info.png" alt="Información sobre el portal">
    </div>
  </section>

  <!-- Nuevo formulario de inicio de sesión -->
  <section class="login-section">
    <div class="login-container">
      <div class="login-box">
        <h1>Iniciar Sesión</h1>
        <form>
          <div class="input-group">
            <label for="name">Nombre</label>
            <input type="name" id="name" class="login-input" placeholder="Ingresa tu nombre" required>
          </div>
          <div class="input-group">
            <label for="email">Correo electrónico</label>
            <input type="email" id="email" class="login-input" placeholder="Ingresa tu correo" required>
          </div>
          <div class="input-group">
            <label for="password">Contraseña</label>
            <input type="password" id="password" class="login-input" placeholder="Ingresa tu contraseña" required>
          </div>
          <div class="forgot-password-container">
            <a href="#" class="forgot-password">¿Olvidaste tu contraseña?</a>
          </div>
          <button type="submit" class="login-button">Ingresar</button>
        </form>
      </div>
      <div class="login-image-container">
        <img src="@/assets/login.png" alt="Imagen de inicio de sesión" class="login-image">
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Banner y mensaje */
.banner-container {
  position: relative;
  width: 100%;
  height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.banner h1 {
  position: absolute;
  color: white;
  font-size: 4rem;
  text-align: end;
  z-index: 1;
  left: 10%;
}

.mensaje {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.msj h1 {
  font-size: 20px;
  color: #333;
  line-height: 1.5;
  text-align: center;
  margin: 0;
}

/* Bloque de información */
.block-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem;
  gap: 2rem;
}

.block-1 {
  flex: 2;
  max-width: 600px;
}

.block-1 h1 {
  font-size: 32px;
  color: #0056b3;
  margin-bottom: 1rem;
  text-decoration: underline;
}

.block-1 p {
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
}

.block-2 {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.block-2 img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .block-container {
    flex-direction: column;
    text-align: center;
  }

  .block-1, .block-2 {
    max-width: 100%;
    padding: 1rem;
  }

  .block-2 img {
    max-width: 80%;
    margin-top: 1rem;
  }
}

/* Nuevo estilo del login */
.login-section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}

.login-container {
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 900px;
  gap: 20px; /* Espacio entre el formulario y la imagen */
}

.login-box {
  flex: 1;
}

.login-image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-image {
  max-width: 100%;
  border-radius: 8px;
}

h1 {
  font-size: 2rem;
  color: #0056b3;
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  font-size: 1rem;
  color: #333;
  margin-bottom: 5px;
}

.login-input {
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  font-size: 1rem;
  box-sizing: border-box;
}

.login-input:focus {
  border-color: #0056b3;
  outline: none;
  box-shadow: 0 0 8px rgba(0, 86, 179, 0.2);
}

.forgot-password-container {
  text-align: right;
}

.forgot-password {
  font-size: 0.9rem;
  color: #0056b3;
  text-decoration: none;
}

.forgot-password:hover {
  text-decoration: underline;
}

.login-button {
  width: 100%;
  padding: 12px;
  background-color: #0056b3;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 15px;
}

.login-button:hover {
  background-color: #004494;
}

.login-button:active {
  background-color: #003366;
}

@media (max-width: 768px) {
  .login-container {
    flex-direction: column;
  }

  .login-image {
    margin-top: 20px;
  }
}
</style>
