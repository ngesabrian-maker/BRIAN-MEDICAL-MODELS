import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    watch: {
      // Ignore Tauri/Rust build artifacts and other heavy folders
      ignored: [
        '**/src-tauri/**',
        '**/src-tauri/target/**',
        '**/target/**',
        '**/node_modules/**'
      ]
    }
  }
})
