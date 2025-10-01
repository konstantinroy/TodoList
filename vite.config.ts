import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/TodoLIst',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/assets/styles/colors" as *;',
      },
    },
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, './src'),
      '@components': path.join(__dirname, './src/components'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})
