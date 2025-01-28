<template>
  <div class="requisitos-container">
    <h1>Términos de Referencia (TDR)</h1>

    <!-- Objetivo -->
    <div class="card objetivo">
      <div class="card-icon">
        <i class="fas fa-bullseye"></i>
      </div>
      <div class="card-content">
        <h2>1. Objetivo del Proyecto</h2>
        <p>
          Desarrollar una página web intuitiva, moderna y funcional para la Unidad Académica Campesina (UAC) de Pucarani, de la Universidad Católica Boliviana "San Pablo". El sitio web debe servir como un portal integral para facilitar la comunicación, interacción y acceso a recursos académicos.
        </p>
      </div>
    </div>

    <!-- Público Objetivo -->
    <div class="card publico">
      <div class="card-icon">
        <i class="fas fa-users"></i>
      </div>
      <div class="card-content">
        <h2>2. Público Objetivo</h2>
        <ul>
          <li>Estudiantes actuales y futuros.</li>
          <li>Docentes y personal administrativo.</li>
          <li>Egresados que deseen mantenerse conectados.</li>
          <li>Investigadores interesados en publicaciones científicas.</li>
          <li>Comunidad universitaria y público general.</li>
        </ul>
      </div>
    </div>

    <!-- Estructura y Funcionalidades -->
    <div class="card estructura">
      <div class="card-icon">
        <i class="fas fa-sitemap"></i>
      </div>
      <div class="card-content">
        <h2>3. Estructura y Funcionalidades del Sitio Web</h2>
        <ul>
          <li>Página de Inicio: descripción institucional, carreras, noticias y calendario interactivo.</li>
          <li>Sección de Carreras Académicas: detalles y requisitos de ingreso.</li>
          <li>Investigación, Biblioteca Digital y Moodle: acceso y gestión de recursos académicos.</li>
          <li>Noticias y Eventos, Testimonios, Egresados y Bolsa de Trabajo.</li>
          <li>Admisiones y Becas, Blog Institucional, Multilingüe, y accesibilidad.</li>
        </ul>
      </div>
    </div>

    <!-- Diseño UX -->
    <div class="card ux">
      <div class="card-icon">
        <i class="fas fa-paint-brush"></i>
      </div>
      <div class="card-content">
        <h2>4. Diseño y Experiencia de Usuario (UX)</h2>
        <p>
          El diseño debe ser intuitivo y moderno, con una paleta de colores y tipografía acorde a la identidad visual de la universidad.
        </p>
      </div>
    </div>

    <!-- Plazo de Entrega -->
    <div class="card plazo">
      <div class="card-icon">
        <i class="fas fa-calendar-alt"></i>
      </div>
      <div class="card-content">
        <h2>5. Plazo de Entrega</h2>
        <p>
          El desarrollo del sitio web debe completarse en un plazo máximo de 90 días, distribuidos en tres fases.
        </p>
      </div>
    </div>

    <!-- Mantenimiento y Actualizaciones -->
    <div class="card mantenimiento">
      <div class="card-icon">
        <i class="fas fa-tools"></i>
      </div>
      <div class="card-content">
        <h2>6. Mantenimiento y Actualizaciones</h2>
        <p>
          El desarrollador debe proporcionar un plan de mantenimiento mensual, que incluya actualizaciones de seguridad y soporte técnico.
        </p>
      </div>
    </div>

    <!-- Consideraciones Legales -->
    <div class="card legales">
      <div class="card-icon">
        <i class="fas fa-gavel"></i>
      </div>
      <div class="card-content">
        <h2>7. Consideraciones Legales</h2>
        <p>
          El sitio web debe cumplir con las normativas de privacidad y protección de datos de Bolivia.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RequisitosPage',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

body {
  font-family: 'Playfair Display', serif;
  background-color: #f0f2f5;
}

.requisitos-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 30px;
}

h1 {
  text-align: center;
  color: #004080;
  font-size: 2.2rem;
  margin-bottom: 30px;
}

/* Estilos de las tarjetas con imágenes de fondo y colores personalizados */
.card {
  display: flex;
  align-items: flex-start;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: #333;
  position: relative;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Imagen de fondo en cada tarjeta */
.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  opacity: 0.1;
  z-index: 0;
}

/* Colores y fondos específicos para cada tarjeta */
.objetivo::before { background-image: url('https://example.com/objetivo-bg.jpg'); }
.publico::before { background-image: url('https://example.com/publico-bg.jpg'); }
.estructura::before { background-image: url('https://example.com/estructura-bg.jpg'); }
.ux::before { background-image: url('https://example.com/ux-bg.jpg'); }
.plazo::before { background-image: url('https://example.com/plazo-bg.jpg'); }
.mantenimiento::before { background-image: url('https://example.com/mantenimiento-bg.jpg'); }
.legales::before { background-image: url('https://example.com/legales-bg.jpg'); }

/* Iconos coloridos */
.card-icon {
  font-size: 2.5rem;
  color: #004080;
  margin-right: 20px;
  flex-shrink: 0;
  z-index: 1;
}

.card-content {
  z-index: 1;
}

.card-content h2 {
  color: #004080;
  font-size: 1.6rem;
  margin-bottom: 10px;
}

.card-content p,
.card-content ul {
  margin: 0;
  line-height: 1.6;
}

.card-content ul {
  list-style-type: disc;
  padding-left: 20px;
}
</style>
