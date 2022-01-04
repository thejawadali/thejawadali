import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  server: {
    port: 3333,
    open: true
  },
  build: {
    outDir: "./dist"
  },
  plugins: [vue()]
})
