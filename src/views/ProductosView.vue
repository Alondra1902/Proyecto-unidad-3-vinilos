<script setup>
import { useProductoStore } from "../stores/useProductoStore"
import { useCarritoStore } from "../stores/useCarritoStore"

const productoStore = useProductoStore()
const carritoStore = useCarritoStore()
</script>

<template>
  <div class="productos-container">
    <h2 class="titulo-seccion">Nuestra Colección Vintage</h2>

    <div class="admin-header">
      <router-link to="/productos/crear" class="btn-crear">
        + Agregar Nuevo Disco
      </router-link>
    </div>

    <div v-if="productoStore.productos.length === 0" class="no-productos">
      <p>No hay productos disponibles por el momento...</p>
    </div>

    <div class="productos-grid">
      <div v-for="producto in productoStore.productos" :key="producto.id" class="producto-card">
        
        <div class="vinyl-wrapper">
          <img 
            v-if="producto.imagen" 
            :src="producto.imagen" 
            @error="(e) => e.target.src = 'https://images.unsplash.com/photo-1514525253344-a8130a21693f?q=80&w=500'"
            class="producto-img"
            alt="Portada del album"
          />
          <div v-else class="vinyl-disk">
            <div class="vinyl-label"></div>
          </div>
        </div>

        <div class="info-producto">
          <h3>{{ producto.nombre }}</h3>
          <p class="precio">$ {{ producto.precio }}</p>
        </div>

        <div class="acciones">
          <button class="btn-agregar" @click="carritoStore.agregarAlCarrito(producto)">
            Agregar al carrito
          </button>
        </div>

        <div class="admin-btns">
          <router-link 
            :to="'/editar/' + producto.id" 
            class="btn-editar"
            style="text-decoration: none; padding: 8px 15px; border-radius: 4px; display: inline-block; background-color: #555; color: white;"
          >
            Editar
          </router-link>

          <button 
            @click="productoStore.eliminarProducto(producto.id)" 
            class="btn-eliminar"
            style="padding: 8px 15px; border-radius: 4px; background-color: #d9534f; color: white; border: none; cursor: pointer; margin-left: 10px;"
          >
            Eliminar
          </button>
      </div> </div> </div> </div> </template>

<style scoped>

.admin-header {
  text-align: center;
  margin-bottom: 30px;
}

.btn-crear {
  background-color: #27ae60;
  color: white;
  padding: 12px 25px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
}

.btn-crear:hover {
  background-color: #2ecc71;
  box-shadow: 0 0 15px rgba(46, 204, 113, 0.4);
}

.link-btn {
  flex: 1;
  display: flex;
}

.btn-editar {
  width: 100%;
  background-color: #444;
  color: #fff;
}

.producto-img {
  width: 160px; /* Un poco más grande para que luzca */
  height: 160px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.6);
  border: 2px solid #f1c40f; /* Borde dorado para resaltar */
}

/* El resto de tus estilos se mantienen igual */
</style>
<style scoped>
/* Contenedor General */
.productos-container {
  padding: 40px 20px;
  background-color: #121212;
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.titulo-seccion {
  color: #f1c40f;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
  text-transform: uppercase;
  letter-spacing: 3px;
  border-bottom: 2px solid #333;
  display: inline-block;
  width: 100%;
}

/* Grid de productos */
.productos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Tarjeta de Producto */
.producto-card {
  background: #1e1e1e;
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  border: 1px solid #333;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(0,0,0,0.3);
}

.producto-card:hover {
  transform: translateY(-10px);
  border-color: #f1c40f;
}

/* Efecto Vinilo */
.vinyl-wrapper {
  position: relative;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
}

.vinyl-disk {
  width: 130px;
  height: 130px;
  background: radial-gradient(circle, #333 10%, #000 100%);
  border-radius: 50%;
  border: 2px solid #444;
  position: relative;
  animation: spin 5s linear infinite;
}

.vinyl-label {
  width: 40px;
  height: 40px;
  background-color: #f1c40f;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid #000;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Textos */
h3 { color: #fff; margin: 10px 0; font-size: 1.4rem; }
.precio { color: #f1c40f; font-weight: bold; font-size: 1.2rem; }

/* Botones */
.acciones { display: flex; flex-direction: column; gap: 10px; margin-top: 15px; }

button {
  padding: 10px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: 0.2s;
}

.btn-agregar { background-color: #f1c40f; color: #000; width: 100%; }
.btn-agregar:hover { background-color: #d4ac0d; }

.admin-btns { display: flex; gap: 5px; justify-content: center; }
.btn-editar { background-color: #444; color: #fff; flex: 1; }
.btn-eliminar { background-color: #c0392b; color: #fff; flex: 1; }

button:hover { opacity: 0.9; }

.no-productos { color: #888; text-align: center; font-style: italic; }

.producto-img {
  width: 140px;
  height: 140px;
  object-fit: cover; /* Esto hace que la foto se recorte perfecto al cuadrado */
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.5);
  border: 2px solid #333;
}
</style>