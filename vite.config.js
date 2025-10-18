import { defineConfig } from 'vite'

// Configuración base
export default defineConfig({
  server: {
    port: 5173, // Podés cambiar el puerto si querés
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        cursos: 'cursos.html', // 🔹 tu segunda página
        cursosActualizado: 'cursosActualizado.html'
      },
    },
  },
})
