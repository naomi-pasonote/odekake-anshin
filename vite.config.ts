import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Homework submission v1.0: PWA worker generation remains disabled while the verified Firebase build is used.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
