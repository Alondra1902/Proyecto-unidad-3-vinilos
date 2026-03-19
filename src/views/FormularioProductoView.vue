<template>
  <div class="formulario-container">
    <h2>{{ editando ? 'Editar Disco' : 'Nuevo Disco' }}</h2>
    <form @submit.prevent="guardar">
      <div class="input-group">
        <label>Nombre del Álbum:</label>
        <input v-model="producto.nombre" type="text" required placeholder="Ej: Enjambre - Proximos Projimos">
      </div>
      
      <div class="input-group">
        <label>Precio ($):</label>
        <input v-model.number="producto.precio" type="number" required>
      </div>

      <div class="input-group">
        <label>URL de Imagen:</label>
        <input v-model="producto.imagen" type="text" placeholder="https://...">
      </div>

      <div class="botones-form">
        <button type="submit" class="btn-principal">Guardar Cambios</button>
        <button type="button" @click="$router.push('/productos')" class="btn-cancelar">Cancelar</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useProductoStore } from '../stores/useProductoStore';

const store = useProductoStore();
const route = useRoute();
const router = useRouter();

const producto = ref({ nombre: '', precio: 0, imagen: '' });
const editando = ref(false);

onMounted(() => {
  if (route.params.id) {
    editando.ref = true;
    const prodEncontrado = store.productos.find(p => p.id == route.params.id);
    if (prodEncontrado) producto.value = { ...prodEncontrado };
  }
});

const guardar = () => {
  if (editando.value) {
    store.actualizarProducto(route.params.id, producto.value);
  } else {
    store.crearProducto(producto.value);
  }
  router.push('/productos');
};
</script>