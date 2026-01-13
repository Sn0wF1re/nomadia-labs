// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],
  modules: [
    '@nuxt/hints',
    '@nuxt/image',
    'motion-v/nuxt',
    'shadcn-nuxt'
  ],
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
  app: {
    head: {
      title: 'Nomadia - Immigration Simplified',
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', type: 'image/png', href: '/apple-touch-icon.png', sizes: '180x180' },
        { rel: 'manifest', href: 'site.webmanifest' }
      ]
    }
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    }
  },
})