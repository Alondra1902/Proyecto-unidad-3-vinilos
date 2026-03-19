<script setup>
import { useCarritoStore } from '../stores/useCarritoStore'

const carritoStore = useCarritoStore()
</script>

<template>
  <div class="carrito-container">
    <h1 class="glitch">Tu Colección</h1>

    <div v-if="carritoStore.carrito.length === 0" class="empty-msg">
      <p>Parece que tu colección está vacía...</p>
      <router-link to="/productos" class="btn-primary">Ir a la tienda</router-link>
    </div>

    <div v-else class="carrito-content">
      
      <div class="items-list">
        <div v-for="item in carritoStore.carrito" :key="item.id" class="cart-card">
          <div class="cart-img-container">
            <img 
              :src="item.imagen || 'https://cdn-icons-png.flaticon.com/512/3300/3300059.png'" 
              class="cart-img"
              alt="Portada"
            >
          </div>

          <div class="cart-info">
            <h3>{{ item.nombre }}</h3>
            <p class="price">${{ item.precio }}</p>
          </div>

          <button @click="carritoStore.eliminarDelCarrito(item.id)" class="btn-remove">
            ×
          </button>
        </div>
      </div>

      <div class="cart-summary">
        <h2>Resumen</h2>
        <div class="total-row">
          <span>Total:</span>
          <span class="total-amount">${{ carritoStore.totalPrecio }}</span>
        </div>
        
        <button class="btn-checkout">Finalizar Compra</button>
        <button @click="carritoStore.vaciarCarrito" class="btn-clear">Vaciar Carrito</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carrito-container {
  padding: 40px 5%;
  width: 100%;
  max-width: 1200px; /* Un ancho máximo sano */
  color: #fff;
  font-family: 'Segoe UI', sans-serif;
  margin: 0 auto;
}

.glitch {
  text-align: center;
  margin-bottom: 50px;
  font-size: 3rem;
  color: #f1c40f;
  text-shadow: 3px 3px 0px #8b0000;
  text-transform: uppercase;
  letter-spacing: 5px;
}

/* Diseño de dos columnas (Productos | Resumen) */
.carrito-content {
  display: grid;
  grid-template-columns: 1fr 350px; /* Columna de resumen fija */
  gap: 30px;
}

/* --- Lista de productos --- */
.items-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.cart-card {
  background: rgba(255, 255, 255, 0.03); /* Fondo muy sutil */
  border: 1px solid rgba(241, 196, 15, 0.2); /* Borde dorado tenue */
  border-radius: 12px;
  padding: 15px;
  display: flex;
  align-items: center;
  gap: 20px;
  transition: all 0.3s ease;
}

.cart-card:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: #f1c40f;
  transform: translateY(-2px); /* Efecto de flotado */
}

/* SOLUCIÓN IMAGEN: Tamaño controlado y compactado */
.cart-img-container {
  width: 100px;
  height: 100px;
  border-radius: 8px;
  overflow: hidden; /* Corta si la imagen se sale */
  border: 2px solid #333;
}

.cart-img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ajusta la foto sin deformarla */
}

.cart-info {
  flex-grow: 1; /* Ocupa el espacio disponible */
}

.cart-info h3 {
  margin: 0;
  color: #f1c40f;
  font-size: 1.2rem;
}

.price {
  font-weight: bold;
  color: #fff;
  font-size: 1.1rem;
  margin-top: 5px;
}

/* Botón Eliminar (la '×') */
.btn-remove {
  background: transparent;
  color: #e74c3c;
  font-size: 2rem;
  border: none;
  cursor: pointer;
  padding: 0 10px;
  transition: 0.2s;
}

.btn-remove:hover {
  color: #fff;
  transform: scale(1.2);
}

/* --- Panel lateral de resumen --- */
.cart-summary {
  background: #1a1a1a;
  padding: 30px;
  border-radius: 15px;
  border: 2px solid #f1c40f;
  height: fit-content; /* Se ajusta a su contenido */
  position: sticky; /* Se queda pegado al hacer scroll */
  top: 100px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

.cart-summary h2 {
  margin-top: 0;
  color: #fff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 10px;
}

.total-row {
  display: flex;
  justify-content: space-between;
  font-size: 1.8rem;
  margin: 25px 0;
  font-weight: bold;
}

.total-amount {
  color: #f1c40f;
  text-shadow: 0 0 10px rgba(241, 196, 15, 0.3);
}

/* --- MEJORA BOTONES --- */
button:not(.btn-remove) {
  width: 100%; /* Botones a lo ancho */
  padding: 15px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Botón Finalizar Compra */
.btn-checkout {
  background: #f1c40f;
  color: #000;
  margin-bottom: 10px;
  box-shadow: 0 4px 15px rgba(241, 196, 15, 0.2);
}

.btn-checkout:hover {
  background: #fff;
  box-shadow: 0 6px 20px rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

/* Botón Vaciar Carrito */
.btn-clear {
  background: transparent;
  color: #888;
  padding: 10px !important; /* Más pequeño */
}

.btn-clear:hover {
  color: #c0392b;
  text-decoration: underline;
}

/* Mensaje de Carrito Vacío */
.empty-msg {
  text-align: center;
  padding: 100px 0;
  color: #888;
  font-size: 1.2rem;
}

.btn-primary {
  display: inline-block;
  margin-top: 20px;
  background: #f1c40f;
  color: #000;
  padding: 12px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
}

/* Responsivo para móviles */
@media (max-width: 850px) {
  .carrito-content {
    grid-template-columns: 1fr; /* Una columna */
  }
}
</style>