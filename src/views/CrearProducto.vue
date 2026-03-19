<script setup>
import { ref } from 'vue'; // CORRECCIÓN: Faltaba ref
import { useProductoStore } from "../stores/useProductoStore"; // CORRECCIÓN: Faltaba importar la store
import { useRouter } from "vue-router"; // Faltaba importar router

const productoStore = useProductoStore();
const router = useRouter();

// CORRECCIÓN: Cambiado de 'producto' a 'nuevoProducto' para coincidir con el v-model del template
const nuevoProducto = ref({
  nombre: "",
  precio: null,
  imagen: ""
});

// CORRECCIÓN: Nombre de la función cambiado a guardarProducto para coincidir con el form @submit
const guardarProducto = () => {
  if (nuevoProducto.value.nombre && nuevoProducto.value.precio) {
    // REQUISITO CRUD: Crear producto
    productoStore.crearProducto(nuevoProducto.value);
    
    // Regresa a la lista para ver el nuevo disco
    router.push('/productos'); 
  } else {
    alert("Por favor llena el nombre y el precio.");
  }
};
</script>

<template>
  <div class="admin-panel">
    <div class="form-card">
      <h2 class="form-title">Gestionar Colección</h2>
      
      <form @submit.prevent="guardarProducto" class="vintage-form">
        <div class="input-group">
          <label>Nombre del Álbum:</label>
          <input v-model="nuevoProducto.nombre" type="text" placeholder="Ej: The Strokes - Is This It" required>
        </div>

        <div class="input-row">
          <div class="input-group">
            <label>Precio ($):</label>
            <input v-model.number="nuevoProducto.precio" type="number" placeholder="Ej: 750" required>
          </div>
          <div class="input-group">
            <label>URL de la portada (Opcional):</label>
            <input v-model="nuevoProducto.imagen" type="text" placeholder="https://...">
          </div>
        </div>

        <button type="submit" class="btn-guardar">
          <span>Añadir a la Colección</span>
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.admin-panel {
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background-color: #121212; /* Fondo oscuro igual que la tienda */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.form-card {
  background: rgba(30, 30, 30, 0.6);
  backdrop-filter: blur(12px); /* Efecto cristalizado pro */
  border: 2px solid #f1c40f; /* Borde dorado característico */
  border-radius: 20px;
  padding: 40px;
  width: 100%;
  max-width: 650px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.6);
  animation: fadeIn 0.5s ease-out;
}

.form-title {
  color: #f1c40f;
  margin-bottom: 30px;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-align: center;
  border-bottom: 2px solid #333;
  padding-bottom: 10px;
}

.vintage-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input-row {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 15px;
}

.input-group label {
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 5px;
  display: block;
}

.input-group input {
  width: 100%;
  padding: 14px 18px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #444;
  border-radius: 10px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.input-group input:focus {
  border-color: #f1c40f;
  background: rgba(255, 255, 255, 0.1);
  outline: none;
  box-shadow: 0 0 10px rgba(241, 196, 15, 0.2);
}

.btn-guardar {
  background: #f1c40f;
  color: #000;
  padding: 18px;
  border-radius: 10px;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.4s ease;
  margin-top: 15px;
  border: none;
}

.btn-guardar:hover {
  background: #fff;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(241, 196, 15, 0.5);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>  