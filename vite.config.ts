import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import * as path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@bank': path.resolve(__dirname, './src/assets/bank'),
    }
  },
  plugins: [react(), VitePWA({ registerType: 'autoUpdate' })],
})
