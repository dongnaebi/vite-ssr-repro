import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsxPlugin from '@vitejs/plugin-vue-jsx'
import eslintPlugin from 'vite-plugin-eslint'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsxPlugin(),
    // eslintPlugin({
    //   cache: false,
    //   include: ['src/**/*.vue', 'src/**/*.ts', 'src/**/*.tsx']
    // })
  ],
  build: {
    minify: false
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
