<template>
  <div class="pastoral-container">
    <!-- Encabezado con Imagen de Fondo -->
    <div class="header-section">
      <div class="header-overlay">
        <h2>DEPARTAMENTO DE PASTORAL</h2>
        <p>
          La U.C.B. como parte de la Iglesia Católica evangeliza y educa dentro de la universidad mediante la vida comunitaria y sacramental e interactúa con otras obras de la Iglesia desarrollando un auténtico diálogo entre lo académico y la sociedad a través de la solidaridad y la misión empleando las capacidades y potencialidades de las disciplinas en las que enseña e investiga.
        </p>
        <p><strong>Actividades de apoyo a la Iglesia | Formación Humanista Católica Integral</strong></p>
      </div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvIrjRTpIi7ALfGoosyFKVXAOmchvTVeDx3A&s" alt="Imagen de Pastoral" class="header-image">
    </div>

    <!-- Sección del botón de enlace a Pastoral -->
    <div class="enlace-pastoral">
      <img src="https://cba.ucb.edu.bo/wp-content/uploads/2024/04/Sara-Beatriz-Pellon-Morel-e1712337033110.webp" alt="Imagen Pastoral">
      <a href="https://www.ucb.edu.bo/accion-pastoral/" target="_blank" class="button">Ir a Pastoral</a>
    </div>

    <!-- Tarjetas de Imágenes con texto -->
    <div class="image-card-grid">
      <div class="image-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcwv-270Tlgl3dRWTOQRiT1RkZpi0O-9cQOQ&s" alt="Imagen 1">
        <div class="card-text">
          <p>La Pastoral Universitaria fomenta la integración espiritual de los estudiantes a través de actividades comunitarias y sacramentales.</p>
        </div>
      </div>
      <div class="image-card">
        <img src="https://tja.ucb.edu.bo/wp-content/uploads/2020/12/MG_6407-1024x769.jpg" alt="Imagen 2">
        <div class="card-text">
          <p>Las materias de formación espiritual en la U.C.B. están diseñadas para ofrecer una perspectiva humanista y cristiana.</p>
        </div>
      </div>
      <div class="image-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0BXqEyiVrDcM0R6UCnFh1q9CoZ8RdH2SVGA&s" alt="Imagen 3">
        <div class="card-text">
          <p>La solidaridad y el apoyo comunitario son fundamentales en las actividades de la Pastoral.</p>
        </div>
      </div>
    </div>

    <!-- Sección de Materias de Formación -->
    <div class="materias-section">
      <h2>Materias de Formación Humano Cristiana</h2>
      <div class="materias-grid">
        <div v-for="(materia, index) in materias" :key="index" class="materia-card">
          <h3>{{ materia.titulo }}</h3>
          <p>{{ materia.descripcion }}</p>
        </div>
      </div>
    </div>

    <!-- Sección de Testimonios -->
    <div class="testimonios-section">
      <h2>Testimonios de Estudiantes</h2>
      <!-- Imagen añadida antes de los testimonios -->
      <div class="testimonios-imagen">
        <img src="https://i0.wp.com/lpz.ucb.edu.bo/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-25-at-11.58.35-AM.jpeg?resize=1080%2C675&ssl=1" alt="Imagen Testimonios" style="max-width: 100%; height: auto; margin: 20px 0;">
      </div>
      <div class="testimonios-grid">
        <div class="testimonio-card" v-for="(testimonio, index) in testimonios" :key="index">
          <p class="testimonio-texto">"{{ testimonio.texto }}"</p>
          <h4 class="testimonio-autor">- {{ testimonio.autor }}</h4>
        </div>
      </div>
    </div>

    <!-- Sección de Contactos -->
    <div class="contactos-section">
      <h2>Contactos Regionales</h2>
      <div class="contactos-grid">
        <div v-for="(contacto, index) in contactos" :key="index" class="contacto-card">
          <h3>{{ contacto.ciudad }}</h3>
          <p>{{ contacto.nombre }}</p>
          <p>{{ contacto.email }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pastoral',
  data() {
    return {
      materias: [
        {
          titulo: 'ANTROPOLOGÍA CRISTIANA',
          descripcion: 'Comprender la existencia del ser humano en su realización como persona a partir de la apertura de sí mismo a la relación con el otro y el discernimiento humano de la vocación como resultado de sentirse amado y capaz de brindar amor por su filiación divina.'
        },
        {
          titulo: 'CRISTOLOGÍA',
          descripcion: 'Concepción antropológica a partir de Cristo como modelo de hombre, quien viene a Restaurar la imagen y consumar la semejanza del ser Humano con Dios. Se estudia la plenitud de la humanidad de Cristo en un abordaje amplio.'
        },
        {
          titulo: 'DOCTRINA SOCIAL',
          descripcion: 'La Doctrina Social de la Iglesia permite conocer la actualidad del mensaje Cristiano orientado a la promoción humana sobre temas emergentes de la era industrial, la modernidad y la posmodernidad.'
        }
      ],
      contactos: [
        { ciudad: 'LA PAZ', nombre: 'Lic. Dolly Alurralde', email: 'dalurralde@ucb.edu.bo' },
        { ciudad: 'COCHABAMBA', nombre: 'Lic. Fernando Sanjinez', email: 'fsanjinez@ucb.edu.bo' },
        { ciudad: 'SANTA CRUZ', nombre: 'Lic. Escarlet Mendoza Borjas', email: 'emendoza@ucb.edu.bo' },
        { ciudad: 'TARIJA', nombre: 'Lic. Carola Villena López', email: 'cvillena@ucb.edu.bo' }
      ],
      testimonios: [
        {
          texto: 'La formación en la pastoral me ha permitido desarrollar una perspectiva más humana y espiritual de la vida.',
          autor: 'Juan Pérez'
        },
        {
          texto: 'Las materias impartidas por la Pastoral me han ayudado a fortalecer mi fe y comprensión de la doctrina cristiana.',
          autor: 'María Rodríguez'
        },
        {
          texto: 'El ambiente de la Pastoral es acogedor y siempre nos motivan a ser mejores personas.',
          autor: 'Luis Gómez'
        }
      ]
    };
  }
};
</script>

<style scoped>
.pastoral-container {
  padding: 30px;
  background-color: #ffffff;
  font-family: 'Arial', sans-serif;
}

.header-section {
  position: relative;
  text-align: center;
  color: white;
  margin-bottom: 30px;
}

.header-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.header-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
}

.enlace-pastoral {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
}

.enlace-pastoral img {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 15px;
}

.button {
  display: inline-block;
  padding: 12px 24px;
  background-color: #004080;
  color: #ffffff;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #0066cc;
}

.image-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 40px 0;
}

.image-card {
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.image-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-text {
  padding: 15px;
  background-color: #ffffff;
  text-align: center;
}

.materias-section,
.testimonios-section,
.contactos-section {
  margin-top: 40px;
  text-align: center;
}

.materias-grid,
.contactos-grid,
.testimonios-grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.materia-card,
.contacto-card,
.testimonio-card {
  width: 300px;
  padding: 20px;
  background-color: #f4f4f4;
  color: #00254e;
  border: 1px solid #cccccc;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.testimonios-imagen img {
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
