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
  ],
});
