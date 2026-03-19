<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router' // 1. Agregamos useRouter aquí
import { useProductoStore } from '../stores/useProductoStore'

const route = useRoute()
const router = useRouter() // 2. ¡ESTA ES LA LÍNEA QUE TE FALTA!
const store = useProductoStore()

const producto = ref({ nombre: '', precio: 0, imagen: '' })

const actualizar = () => {
  store.actualizarProducto(route.params.id, { ...producto.value })
  router.push('/productos') // Ahora esto sí va a funcionar
}

onMounted(() => {
  const encontrado = store.productos.find(p => String(p.id) === String(route.params.id))
  if (encontrado) {
    producto.value = { ...encontrado }
  }
})
</script>

<template>
  <div class="editar-container">
    <h2>Editar Disco</h2>
    
    <form @submit.prevent="actualizar" class="formulario-editar">
      <div class="grupo-input">
        <label>Nombre del Álbum:</label>
        <input type="text" v-model="producto.nombre" required>
      </div>

      <div class="grupo-input">
        <label>Precio ($):</label>
        <input type="number" v-model="producto.precio" required>
      </div>

      <div class="grupo-input">
        <label>URL de la Imagen:</label>
        <input type="text" v-model="producto.imagen" required>
      </div>

      <div class="botones-form">
        <button type="submit" class="btn-guardar">Guardar Cambios</button>
        <button type="button" @click="router.push('/productos')" class="btn-cancelar">
          Cancelar
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.editar-container {
  max-width: 450px;
  margin: 40px auto;
  padding: 30px;
  background-color: #1a1a1a; /* Fondo oscuro profundo */
  border: 1px solid #f1c40f; /* Borde dorado como tu navbar */
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.5);
  color: white;
  font-family: 'Segoe UI', sans-serif;
}

h2 {
  text-align: center;
  color: #f1c40f;
  margin-bottom: 25px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.grupo-input {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-size: 0.9rem;
  color: #ccc;
}

input {
  width: 100%;
  padding: 12px;
  background-color: #2a2a2a;
  border: 1px solid #444;
  border-radius: 6px;
  color: white;
  transition: all 0.3s ease;
}

input:focus {
  outline: none;
  border-color: #f1c40f;
  background-color: #333;
}

.botones-form {
  display: flex;
  gap: 15px;
  margin-top: 30px;
}

.btn-guardar {
  flex: 2;
  padding: 12px;
  background-color: #f1c40f; /* Dorado */
  color: black;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s;
}

.btn-guardar:hover {
  background-color: #d4ac0d;
  transform: translateY(-2px);
}

.btn-cancelar {
  flex: 1;
  padding: 12px;
  background-color: #444;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.btn-cancelar:hover {
  background-color: #555;
}
</style>