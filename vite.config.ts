import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// A Vercel serve o site na raiz do domínio; o GitHub Pages publica em /Co.workingv1/.
// O workflow do Pages define DEPLOY_TARGET=pages para usar o subcaminho.
const base = process.env.DEPLOY_TARGET === 'pages' ? '/Co.workingv1/' : '/';

export default defineConfig({
  plugins: [react()],
  base,
  server: {
    host: '127.0.0.1',
    port: 5173,
  },
});
