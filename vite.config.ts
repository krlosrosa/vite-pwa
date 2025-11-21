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
      },
     })
  ],
});
