// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],
  modules: ['@nuxt/hints', '@nuxt/image', 'motion-v/nuxt', 'shadcn-nuxt', '@nuxtjs/seo'],
  vite: {
    plugins: [
      tailwindcss()
    ],
  },
  shadcn: {
    /**
     * Prefix for all the imported component.
     * @default "Ui"
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * Will respect the Nuxt aliases.
     * @link https://nuxt.com/docs/api/nuxt-config#alias
     * @default "@/components/ui"
     */
    componentDir: '@/components/ui'
  },
  image: {
    domains: ['images.unsplash.com'],
    format: ['webp', 'avif'],
  },
  site: {
    url: 'https://nomadialabs.com',
    name: 'Nomadia',
    description: 'Kenya\'s premier relocation advisory. Expert guidance for Kenyans relocating to Finland, UK, Germany, China & Europe. Visa support, pre-departure planning, settlement assistance.',
    defaultLocale: 'en',
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Nomadia Labs | Relocation Advisory',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#0C354D' },
        { name: 'msapplication-TileColor', content: '#0C354D' },
        { name: 'geo.region', content: 'KE-110' },
        { name: 'geo.placename', content: 'Nairobi' },
        { name: 'geo.position', content: '-1.286389;36.817223' },
        { name: 'ICBM', content: '-1.286389, 36.817223' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', type: 'image/png', href: '/apple-touch-icon.png', sizes: '180x180' },
        { rel: 'manifest', href: 'site.webmanifest' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'dns-prefetch', href: 'https://images.unsplash.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Montserrat:wght@500;600;700&family=Inter:wght@400;500;600&display=swap' }
      ]
    }
  },
  ogImage: {
    enabled: true,
  },
  sitemap: {
    enabled: true,
  },
  robots: {
    enabled: true,
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    }
  },
  runtimeConfig: {
    intasendPublishableKey: process.env.INTASEND_PUBLISHABLE_KEY || '',
  }
})