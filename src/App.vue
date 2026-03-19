<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useCarritoStore } from './stores/useCarritoStore'

const carritoStore = useCarritoStore()
</script>

<template>
  <header class="navbar">
    <div class="logo">
      VINTAGE<span>ALITO</span>
    </div>
    <nav class="nav-links">
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/productos">Productos</RouterLink>
      <RouterLink to="/carrito" class="cart-btn">
        🛒 Carrito ({{ carritoStore.totalArticulos }})
      </RouterLink>
    </nav>
  </header>

  <main class="main-content">
    <RouterView />
  </main>
</template>

<style>
/* ELIMINAR ESTILOS POR DEFECTO DE VUE */
#app {
  width: 100vw !important;
  max-width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  display: block !important; /* Esto es clave para quitar el diseño lateral */
}

body {
  margin: 0;
  padding: 0;
  display: block;
}

/* BARRA DE NAVEGACIÓN */
.navbar {
  background-color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  height: 70px;
  border-bottom: 2px solid #f1c40f;
  width: 100%;
  box-sizing: border-box;
}

.logo {
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 2px;
}

.logo span {
  color: #f1c40f;
}

.nav-links {
  display: flex;
  gap: 25px;
  align-items: center;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: 0.3s;
}

.nav-links a:hover, .router-link-active {
  color: #f1c40f;
}

.cart-btn {
  background: #f1c40f;
  color: #000 !important;
  padding: 8px 18px;
  border-radius: 25px;
  font-weight: bold;
}

/* CENTRADO TOTAL DEL CONTENIDO */
.main-content {
  /* ... tus otros estilos ... */
  background-image: 
    linear-gradient(rgba(18, 18, 18, 0.8), rgba(18, 18, 18, 0.95)),
    url('https://www.transparenttextures.com/patterns/black-linen.png'); /* Textura sutil */
  background-color: #121212;
}
</style>