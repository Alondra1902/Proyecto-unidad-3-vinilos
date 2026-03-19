import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/Proyecto-unidad-3-vinilos/' // <--- AGREGA ESTA LÍNEA con el nombre exacto de tu repo
})
