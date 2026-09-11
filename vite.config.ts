import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // GitHub Pages publica este projeto em /Co.workingv1/; Vercel serve na raiz do domínio.
  base: mode === 'gh-pages' ? '/Co.workingv1/' : '/',
  server: {
    host: '127.0.0.1',
    port: 5173,
  },
}));
