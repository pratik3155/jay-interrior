import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // suppress certain warnings
    warningLevel: 'silent',  // 'silent', 'error', or 'warn'
  },
 
})
