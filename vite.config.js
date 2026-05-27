import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/eid-wishes/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser'
  },
  server: {
    port: 5173,
    open: true
  }
})
