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
  site: {
    url: 'https://nomadialabs.com',
    name: 'Nomadia',
    description: 'Expert travel and relocation guidance for individuals, families, and professionals.',
    defaultLocale: 'en',
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', type: 'image/png', href: '/apple-touch-icon.png', sizes: '180x180' },
        { rel: 'manifest', href: 'site.webmanifest' }
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
})