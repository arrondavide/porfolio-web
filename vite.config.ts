import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/porfolio-web/', // Note: it matches your repo name exactly
  plugins: [react()],
})