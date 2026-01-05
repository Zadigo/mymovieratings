import tailwind from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: true,
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@vueuse/motion',
    '@vueuse/nuxt'
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
