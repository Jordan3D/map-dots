import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'Map Dots',
        display: "standalone",
        scope: "/",
        start_url: "/",
        short_name: 'Map Dots',
        description: 'Map View Map',
        theme_color: '#031c36',
        icons: [
          {
            "src": "./icons/icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png"
        },
        {
            "src": "./icons/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png"
        },
        {
            "src": "./icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "./icons/icon-256x256.png",
            "sizes": "256x256",
            "type": "image/png"
        },
        {
            "src": "./icons/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
        },
        {
            "src": "./icons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": 'any maskable'
        }
        ]
      }
    }),
    react(),
  ],
  server: {
    host: true
  }
})
