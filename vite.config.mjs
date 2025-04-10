import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import autoprefixer from 'autoprefixer'

export default defineConfig(() => {
  return {
    plugins: [vue()],
    base: './',
    css: {
      postcss: {
        plugins: [
          autoprefixer({}), // add options if needed
        ],
      },
    },
    resolve: {
      alias: [
        // No need to keep this unless you need special handling
        {
          find: '@',
          replacement: path.resolve(__dirname, 'src'), // Correct alias configuration
        },
      ],
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.scss'],
    },
    server: {
      port: 3000,
      proxy: {
        // Configure proxy if needed
      },
    },
  }
})
