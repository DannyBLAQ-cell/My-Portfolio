import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import alias from '@rollup/plugin-alias'
import { fileURLToPath, URL } from 'url'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
        tailwindcss(),
    react(),
     alias({
      entries: [
        { find: '@components', replacement: fileURLToPath(new URL('./src/assets/component', import.meta.url)) },
        { find: '@images', replacement: fileURLToPath(new URL('./src/assets/images', import.meta.url)) }
      ]
    })
  ],
})
