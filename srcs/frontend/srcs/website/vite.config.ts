import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: process.env.PORT_FRONTEND,
    allowedHosts: [process.env.VITE_HOST_TRANSCENDENCE],
    hmr: false
  },
})