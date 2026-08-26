import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: false,
    proxy: {
      '/api': 'http://localhost:3001',
      '/uploads': 'http://localhost:3001'
    },
    watch: {
      // Ignore Tauri/Rust build artifacts and other heavy folders
      ignored: [
        '**/src-tauri/**',
        '**/src-tauri/target/**',
        '**/target/**',
        '**/tauri-target/**',
        '**/node_modules/**'
      ]
    }
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    strictPort: false
  }
})
