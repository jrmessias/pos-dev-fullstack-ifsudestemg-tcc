import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // =========================
  // SERVER (DEV)
  // =========================
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: false,
    open: false,
    cors: true,
    https: false,
  },
  optimizeDeps: {
    force: true,
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.js$/,
    exclude: [],
  },
})
