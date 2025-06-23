import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Cambia esto a '/NOMBRE-DEL-REPO/' si tu repo no está en la raíz de tu usuario
})
