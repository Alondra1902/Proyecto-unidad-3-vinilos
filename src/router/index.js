import { createRouter, createWebHistory } from "vue-router"

import HomeView from "../views/HomeView.vue"
import ProductosView from "../views/ProductosView.vue"
import CrearProducto from "../views/CrearProducto.vue"
import EditarProducto from "../views/EditarProducto.vue"
import CarritoView from "../views/CarritoView.vue"

const routes = [
  { path: "/", component: HomeView },
  { path: "/productos", component: ProductosView },
  { path: "/productos/crear", component: CrearProducto },
  { path: "/editar/:id", component: EditarProducto },
  { path: "/carrito", component: CarritoView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router