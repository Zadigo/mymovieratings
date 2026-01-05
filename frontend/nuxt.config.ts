import tailwind from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@vueuse/motion'
  ],
  vite: {
    plugins: [tailwind()]
  },
  ui: {
    prefix: 'Nuxt'
  },
  css: [
    '~/assets/css/main.css'
  ]
})
