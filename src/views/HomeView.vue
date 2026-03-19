<template>
  <div class="home-container">
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="glitch">VINTAGE ALITO STORE</h1>
        <p class="subtitle">La mejor música en su formato más puro</p>
        <div class="vinyl-decoration">
          <div class="record"></div>
        </div>
        <router-link to="/productos" class="btn-explore">
          Explorar Catálogo
        </router-link>
      </div>
    </div>

    <div class="features">
      <div class="feature-card">
        <span>📻</span>
        <h3>Sonido Real</h3>
        <p>Vinilos y cassettes originales para los amantes de lo clásico.</p>
      </div>
      <div class="feature-card">
        <span>🚚</span>
        <h3>Envíos Rápidos</h3>
        <p>Cuidamos tus joyas musicales hasta la puerta de tu casa.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>


.subtitle {
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 40px;
  font-style: italic;
}

/* El botón de acción */
.btn-explore {
  display: inline-block;
  padding: 15px 40px;
  background-color: #f1c40f;
  color: #000;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 50px;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(241, 196, 15, 0.4);
}

.btn-explore:hover {
  transform: scale(1.1);
  background-color: #fff;
  box-shadow: 0 8px 20px rgba(255, 255, 255, 0.4);
}

/* Decoración de disco girando grande */
.vinyl-decoration {
  margin: 40px 0;
}

.record {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, #333 10%, #000 100%);
  border-radius: 50%;
  border: 5px solid #222;
  margin: 0 auto;
  animation: spin 10s linear infinite;
  position: relative;
}

.record::after {
  content: '';
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 60px; height: 60px;
  background-color: #f1c40f;
  border-radius: 50%;
  border: 4px solid #000;
}

/* Tarjetas de características */
.features {
  display: flex;
  gap: 30px;
  margin-top: 50px;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.feature-card {
  /* Cambiamos el color sólido por uno semi-transparente */
  background: rgba(30, 30, 30, 0.6) !important; 
  /* Este es el truco para el efecto de cristal empañado */
  backdrop-filter: blur(10px); 
  padding: 30px;
  border-radius: 20px;
  width: 280px;
  text-align: center;
  /* Un borde dorado sutil para que combine con tu logo */
  border: 1px solid rgba(241, 196, 15, 0.3);
  transition: 0.3s;
}

.feature-card span { font-size: 3rem; }
.feature-card h3 { color: #fff; margin: 15px 0; }
.feature-card p { color: #888; line-height: 1.6; }

.home-container {
  /* Usamos una imagen de alta calidad de vinilos que funciona siempre */
  background: 
    linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)),
    url('https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=2000&auto=format&fit=crop');
  
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; /* Efecto Parallax */
  
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

/* Opcional: Para que las tarjetas de abajo no tapen toda la imagen, 
   podemos hacerlas un poco translúcidas */
.feature-card {
  background: rgba(30, 30, 30, 0.85) !important; /* Fondo semi-transparente */
  backdrop-filter: blur(5px); /* Efecto de cristal esmerilado */
  border: 1px solid rgba(241, 196, 15, 0.3);
}
/* Añade esto para que el disco gire */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.record {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, #333 10%, #000 100%);
  border-radius: 50%;
  border: 5px solid #222;
  margin: 20px auto;
  animation: spin 10s linear infinite;
  position: relative;
}
</style>