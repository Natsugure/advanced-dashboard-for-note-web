import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import env from 'vite-plugin-env-compatible'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    env({ prefix: "VITE", mountedPath: "process.env" }),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
  ],
})
