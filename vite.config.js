import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Якщо запит починається з '/api', перенаправляємо його на бекенд
      '/api': {
        target: 'http://localhost:5000', // Адреса вашого бекенда
        changeOrigin: true,
      },
    }
  }
})
