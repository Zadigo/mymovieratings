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

  image: {
    provider: 'none'
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxtjs/google-fonts',
    '@nuxt/image'
  ]
})