import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    tailwindcss(), 
    reactRouter(), 
    tsconfigPaths(),
    VitePWA({ 
      registerType: 'autoUpdate',
      includeAssets: ["favicon.ico", "robots.txt"],
      manifest: {
        name: "Meu App",
        short_name: "App",
        start_url: "/",
        display: "standalone",
        theme_color: "#ffffff",
        icons: [
          {
            src: './public/web-app-manifest-192x192.png', // O caminho para o seu ícone de 192x192
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: './public/web-app-manifest-512x512.png', // O caminho para o seu ícone de 512x512
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: './public/web-app-manifest-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable', // Para ícones adaptáveis em Android
          }
        ]
      },
     })
  ],
});
