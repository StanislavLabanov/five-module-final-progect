import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      injectRegister: 'auto',
      workbox: {
        globPatterns: ["**/*.{tsx,ts,scss,js,css,html}"],
        sourcemap: true,
        clientsClaim: true,
        skipWaiting: true
      },
      includeAssets: [
        "**/*",
      ],
      manifest: {
        name: 'Finish Progect in module React',
        short_name: 'MyApp',
        description: 'Finish Progect in module React description',
        theme_color: "#000000",
        background_color: "#ffffff",
        display: "standalone",
        orientation: "portrait-primary",
        icons: [
          {
            src: '/vite.svg',
            sizes: '32x32',
            type: 'image/svg',
            purpose: "any maskable"
          },
          {
            src: '/assets/logo192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/assets/logo512.png',
            sizes: '512x512',
            type: 'image/png'
          },
        ],
        screenshots: [
          {
            src: "/assets/logo512.png",
            type: "image/png",
            sizes: "512x512",
            form_factor: "wide"
          },
          {
            src: '/assets/logo320.png',
            sizes: '320x320',
            type: 'image/png'
          },
        ]
      }
    })
  ]
})