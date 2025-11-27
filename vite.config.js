import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/Coding-Portfolio-3.0/",
  plugins: [react()],
})
