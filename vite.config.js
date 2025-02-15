import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/TravelApp/",
  build: {
    chunkSizeWarningLimit: 1000, // Set a higher limit (default is 500)
  },
})
