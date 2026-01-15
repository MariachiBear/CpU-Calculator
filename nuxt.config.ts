import process from "node:process";

const sw = process.env.SW === "true";

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  ui: {
    experimental: {
      componentDetection: true,
    },
  },
  css: ["~/assets/css/main.css"],

  modules: [
    "@vite-pwa/nuxt",
    "@nuxt/a11y",
    "@nuxt/eslint",
    "@nuxt/hints",
    "@nuxt/test-utils",
    "@nuxt/ui",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/seo",
    "nuxt-og-image",
  ],

  robots: {
    blockAiBots: true,
    blockNonSeoBots: true,
  },

  colorMode: {
    preference: "dark",
    fallback: "light",
  },

  ogImage: {
    enabled: true,
    zeroRuntime: true,
    strictNuxtContentPaths: true,
    defaults: {
      alt: "Calculate the cost per unit of products and compare prices effectively.",
    },
  },

  i18n: {
    baseUrl: "https://cpuc.chibe.dev",
    defaultLocale: "en",
    locales: [
      { code: "en", name: "English", file: { path: "en.json", cache: true } },
      { code: "es", name: "Español", file: { path: "es.json", cache: true } },
      { code: "fr", name: "Français", file: { path: "fr.json", cache: true } },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },

  pwa: {
    base: "/",
    scope: "/",
    injectRegister: false,
    strategies: sw ? "injectManifest" : "generateSW",
    srcDir: sw ? "service-worker" : undefined,
    filename: sw ? "sw.ts" : undefined,
    registerType: "prompt",
    includeAssets: ["**/*"],
    manifest: {
      background_color: "#000000",
      categories: ["utilities", "productivity"],
      description:
        "A simple cost per unit calculator to help you make better purchasing decisions.",
      dir: "ltr",
      display_override: ["window-controls-overlay", "standalone", "minimal-ui"],
      display: "standalone",
      edge_side_panel: { preferred_width: 500 },
      handle_links: "preferred",
      id: "dev.chibe.cpuc",
      lang: "en",
      launch_handler: { client_mode: "auto" },
      name: "Cost per Unit Calculator",
      orientation: "portrait",
      scope: "/",
      short_name: "CpU Calculator",
      start_url: "/",
      theme_color: "#000000",
      screenshots: [
        {
          src: "screenshots/Screenshot_20260112-204939.png",
          sizes: "1080x2204",
          type: "image/png",
          label: "Main Interface",
        },
        {
          src: "screenshots/Screenshot_20260112-205019.png",
          sizes: "1080x2208",
          type: "image/png",
          label: "Calculation Example 1",
        },
        {
          src: "screenshots/Screenshot_20260112-205034.png",
          sizes: "1080x2210",
          type: "image/png",
          label: "Calculation Example 2",
        },
        {
          src: "screenshots/Screenshot_20260112-205056.png",
          sizes: "1080x2209",
          type: "image/png",
          label: "Calculation Example 3",
        },
      ],
      icons: [
        {
          src: "icons/windows11/SmallTile.scale-100.png",
          sizes: "71x71",
          type: "image/png",
        },
        {
          src: "icons/windows11/SmallTile.scale-125.png",
          sizes: "89x89",
          type: "image/png",
        },
        {
          src: "icons/windows11/SmallTile.scale-150.png",
          sizes: "107x107",
          type: "image/png",
        },
        {
          src: "icons/windows11/SmallTile.scale-200.png",
          sizes: "142x142",
          type: "image/png",
        },
        {
          src: "icons/windows11/SmallTile.scale-400.png",
          sizes: "284x284",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square150x150Logo.scale-100.png",
          sizes: "150x150",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square150x150Logo.scale-125.png",
          sizes: "188x188",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square150x150Logo.scale-150.png",
          sizes: "225x225",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square150x150Logo.scale-200.png",
          sizes: "300x300",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square150x150Logo.scale-400.png",
          sizes: "600x600",
          type: "image/png",
        },
        {
          src: "icons/windows11/Wide310x150Logo.scale-100.png",
          sizes: "310x150",
          type: "image/png",
        },
        {
          src: "icons/windows11/Wide310x150Logo.scale-125.png",
          sizes: "388x188",
          type: "image/png",
        },
        {
          src: "icons/windows11/Wide310x150Logo.scale-150.png",
          sizes: "465x225",
          type: "image/png",
        },
        {
          src: "icons/windows11/Wide310x150Logo.scale-200.png",
          sizes: "620x300",
          type: "image/png",
        },
        {
          src: "icons/windows11/Wide310x150Logo.scale-400.png",
          sizes: "1240x600",
          type: "image/png",
        },
        {
          src: "icons/windows11/LargeTile.scale-100.png",
          sizes: "310x310",
          type: "image/png",
        },
        {
          src: "icons/windows11/LargeTile.scale-125.png",
          sizes: "388x388",
          type: "image/png",
        },
        {
          src: "icons/windows11/LargeTile.scale-150.png",
          sizes: "465x465",
          type: "image/png",
        },
        {
          src: "icons/windows11/LargeTile.scale-200.png",
          sizes: "620x620",
          type: "image/png",
        },
        {
          src: "icons/windows11/LargeTile.scale-400.png",
          sizes: "1240x1240",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.scale-100.png",
          sizes: "44x44",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.scale-125.png",
          sizes: "55x55",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.scale-150.png",
          sizes: "66x66",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.scale-200.png",
          sizes: "88x88",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.scale-400.png",
          sizes: "176x176",
          type: "image/png",
        },
        {
          src: "icons/windows11/StoreLogo.scale-100.png",
          sizes: "50x50",
          type: "image/png",
        },
        {
          src: "icons/windows11/StoreLogo.scale-125.png",
          sizes: "63x63",
          type: "image/png",
        },
        {
          src: "icons/windows11/StoreLogo.scale-150.png",
          sizes: "75x75",
          type: "image/png",
        },
        {
          src: "icons/windows11/StoreLogo.scale-200.png",
          sizes: "100x100",
          type: "image/png",
        },
        {
          src: "icons/windows11/StoreLogo.scale-400.png",
          sizes: "200x200",
          type: "image/png",
        },
        {
          src: "icons/windows11/SplashScreen.scale-100.png",
          sizes: "620x300",
          type: "image/png",
        },
        {
          src: "icons/windows11/SplashScreen.scale-125.png",
          sizes: "775x375",
          type: "image/png",
        },
        {
          src: "icons/windows11/SplashScreen.scale-150.png",
          sizes: "930x450",
          type: "image/png",
        },
        {
          src: "icons/windows11/SplashScreen.scale-200.png",
          sizes: "1240x600",
          type: "image/png",
        },
        {
          src: "icons/windows11/SplashScreen.scale-400.png",
          sizes: "2480x1200",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.targetsize-16.png",
          sizes: "16x16",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.targetsize-20.png",
          sizes: "20x20",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.targetsize-24.png",
          sizes: "24x24",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.targetsize-30.png",
          sizes: "30x30",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.targetsize-32.png",
          sizes: "32x32",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.targetsize-36.png",
          sizes: "36x36",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.targetsize-40.png",
          sizes: "40x40",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.targetsize-44.png",
          sizes: "44x44",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.targetsize-48.png",
          sizes: "48x48",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.targetsize-60.png",
          sizes: "60x60",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.targetsize-64.png",
          sizes: "64x64",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.targetsize-72.png",
          sizes: "72x72",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.targetsize-80.png",
          sizes: "80x80",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.targetsize-96.png",
          sizes: "96x96",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.targetsize-256.png",
          sizes: "256x256",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",
          sizes: "16x16",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",
          sizes: "20x20",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",
          sizes: "24x24",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",
          sizes: "30x30",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",
          sizes: "32x32",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",
          sizes: "36x36",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",
          sizes: "40x40",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",
          sizes: "44x44",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",
          sizes: "48x48",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",
          sizes: "60x60",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",
          sizes: "64x64",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",
          sizes: "72x72",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",
          sizes: "80x80",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",
          sizes: "96x96",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",
          sizes: "256x256",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",
          sizes: "16x16",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",
          sizes: "20x20",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",
          sizes: "24x24",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",
          sizes: "30x30",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",
          sizes: "32x32",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",
          sizes: "36x36",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",
          sizes: "40x40",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",
          sizes: "44x44",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",
          sizes: "48x48",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",
          sizes: "60x60",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",
          sizes: "64x64",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",
          sizes: "72x72",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",
          sizes: "80x80",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",
          sizes: "96x96",
          type: "image/png",
        },
        {
          src: "icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",
          sizes: "256x256",
          type: "image/png",
        },
        {
          src: "icons/android/android-launchericon-512-512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "icons/android/android-launchericon-192-192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "icons/android/android-launchericon-144-144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "icons/android/android-launchericon-96-96.png",
          sizes: "96x96",
          type: "image/png",
        },
        {
          src: "icons/android/android-launchericon-72-72.png",
          sizes: "72x72",
          type: "image/png",
        },
        {
          src: "icons/android/android-launchericon-48-48.png",
          sizes: "48x48",
          type: "image/png",
        },
        {
          src: "icons/ios/16.png",
          sizes: "16x16",
          type: "image/png",
        },
        {
          src: "icons/ios/20.png",
          sizes: "20x20",
          type: "image/png",
        },
        {
          src: "icons/ios/29.png",
          sizes: "29x29",
          type: "image/png",
        },
        {
          src: "icons/ios/32.png",
          sizes: "32x32",
          type: "image/png",
        },
        {
          src: "icons/ios/40.png",
          sizes: "40x40",
          type: "image/png",
        },
        {
          src: "icons/ios/50.png",
          sizes: "50x50",
          type: "image/png",
        },
        {
          src: "icons/ios/57.png",
          sizes: "57x57",
          type: "image/png",
        },
        {
          src: "icons/ios/58.png",
          sizes: "58x58",
          type: "image/png",
        },
        {
          src: "icons/ios/60.png",
          sizes: "60x60",
          type: "image/png",
        },
        {
          src: "icons/ios/64.png",
          sizes: "64x64",
          type: "image/png",
        },
        {
          src: "icons/ios/72.png",
          sizes: "72x72",
          type: "image/png",
        },
        {
          src: "icons/ios/76.png",
          sizes: "76x76",
          type: "image/png",
        },
        {
          src: "icons/ios/80.png",
          sizes: "80x80",
          type: "image/png",
        },
        {
          src: "icons/ios/87.png",
          sizes: "87x87",
          type: "image/png",
        },
        {
          src: "icons/ios/100.png",
          sizes: "100x100",
          type: "image/png",
        },
        {
          src: "icons/ios/114.png",
          sizes: "114x114",
          type: "image/png",
        },
        {
          src: "icons/ios/120.png",
          sizes: "120x120",
          type: "image/png",
        },
        {
          src: "icons/ios/128.png",
          sizes: "128x128",
          type: "image/png",
        },
        {
          src: "icons/ios/144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "icons/ios/152.png",
          sizes: "152x152",
          type: "image/png",
        },
        {
          src: "icons/ios/167.png",
          sizes: "167x167",
          type: "image/png",
        },
        {
          src: "icons/ios/180.png",
          sizes: "180x180",
          type: "image/png",
        },
        {
          src: "icons/ios/192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "icons/ios/256.png",
          sizes: "256x256",
          type: "image/png",
        },
        {
          src: "icons/ios/512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "icons/ios/1024.png",
          sizes: "1024x1024",
          type: "image/png",
        },
      ],
    },
    workbox: {
      globPatterns: [
        "**/*.{js,json,css,html,txt,svg,png,ico,webp,woff,woff2,ttf,eot,otf,wasm}",
      ],
      globIgnores: ["**/*.{toml}"],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },
    injectManifest: {
      globPatterns: [
        "**/*.{js,json,css,html,txt,svg,png,ico,webp,woff,woff2,ttf,eot,otf,wasm}",
      ],
      globIgnores: ["emojis/**", "manifest**.webmanifest", "**/*.{toml}"],
    },
    client: {
      installPrompt: false,
      periodicSyncForUpdates: 24 * 60 * 60,
    },
    devOptions: {
      enabled: false,
      suppressWarnings: true,
      navigateFallback: "/",
      navigateFallbackAllowlist: [/^\/$/],
      type: "module",
    },
  },
});
