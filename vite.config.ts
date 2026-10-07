import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // O nginx de produção serve `.mjs` como application/octet-stream e o
        // navegador recusa o worker do pdf.js. Emitimos como `.js`.
        assetFileNames: (asset) => {
          const nome = asset.names?.[0] ?? asset.name ?? ''
          return nome.endsWith('.mjs')
            ? 'assets/[name]-[hash].js'
            : 'assets/[name]-[hash][extname]'
        },
      },
    },
  },
})
