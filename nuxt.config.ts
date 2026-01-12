// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  ui: {
    experimental: {
      componentDetection: true,
    },
  },
  css: ["~/assets/css/main.css"],

  modules: [
    "@nuxt/a11y",
    "@nuxt/eslint",
    "@nuxt/hints",
    "@nuxt/test-utils",
    "@nuxt/ui",
    "@vite-pwa/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
  ],

  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', file: {path: 'en.json', cache:true} },
      { code: 'es', name: 'Español', file: {path: 'es.json', cache:true} },
      { code: 'fr', name: 'Français', file: {path: 'fr.json', cache:true} }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root' // recommended
    }
  }
});