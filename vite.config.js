import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE PARA GITHUB PAGES:
  // base: './' asegura que los archivos .js y .css se carguen con rutas relativas
  base: './',
});