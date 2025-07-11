import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/wiseIT/', // Set this to your repo name for GitHub Pages
  plugins: [react()],
})
