import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ledger-world/',
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});
