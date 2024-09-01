export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  target: 'static',

  app: {
    baseURL: '/Personal-Website/', // Matches your GitHub repo name
    buildAssetsDir: '_nuxt/', // Default, but explicitly set
    head: {
      title: 'Allen Lu - Portfolio',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Personal Portfolio for Chia-En Lu' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/Personal-Website/favicon.ico' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' }
      ]
    }
  },

  css: ['~/assets/css/main.css', '~/assets/css/tailwind.css'],
  modules: ['@nuxtjs/tailwindcss'],

  typescript: {
    strict: true
  },

  vite: {
    define: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }
  },

  nitro: {
    preset: 'github-pages'
  },

  generate: {
    fallback: '404.html'
  }
})