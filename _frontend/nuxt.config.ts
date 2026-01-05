import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  googleFonts: {
    families: {
      'Roboto': {
        wght: '100..700'
      }
    }
  },

  css: [
    '~/assets/css/main.css'
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ]
  },

  image: {
    provider: 'none'
  },

  modules: [
    '@nuxt/icon',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    'shadcn-nuxt',
    '@vueuse/nuxt'
  ],

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: 'Tail',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  }
})