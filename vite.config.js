import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/open-day-test/', // Change to your repo name
    plugins: [react()]
})
