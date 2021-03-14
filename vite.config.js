import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/",
  publicDir: "/",
  server: {
    port: '9999',
    open: true,
    host: '0.0.0.0'
  },
  resolve: {
    extensions: [".js", ".vue", ".json", ".ts", ".tsx", ".vue"],
    alias: {
        '@': resolve(__dirname, './src'),
        '@components': resolve(__dirname, './src/components')
    }
},
})