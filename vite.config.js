import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/react-app1/', // <-- muy importante para rutas y assets
 // plugins: [react(), tailwind()],
})
