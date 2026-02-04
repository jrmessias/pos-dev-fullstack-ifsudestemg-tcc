import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 2. Add this alias configuration
      "@": path.resolve(__dirname, "./src"),
    },
  },
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
  // ADICIONE ESTE BLOCO
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/, // Aplica a arquivos .js e .jsx dentro de src
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx', // Diz ao esbuild para ler .js como jsx
      },
    },
  },
  // optimizeDeps: {
  //   force: true,
  //   esbuildOptions: {
  //     loader: {
  //       '.js': 'jsx',
  //     },
  //   },
  // },
  // esbuild: {
  //   loader: 'jsx',
  //   include: /src\/.*\.js$/,
  //   exclude: [],
  // },
})
