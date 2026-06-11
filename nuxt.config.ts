// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "VIPCLUB | Early Access Waitlist",
      meta: [
        {
          name: "description",
          content:
            "Request VIPCLUB early access: a faster, modern betting experience with same game parlays, one-click deposits, and zero-friction betting. Spots are limited.",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/webp",
          href: "/images/logo.webp",
        },
        {
          rel: "preload",
          href: "/fonts/BebasNeue-Regular.ttf",
          as: "font",
          type: "font/ttf",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          href: "/images/logo.webp",
          as: "image",
          type: "image/webp",
          media: "(max-width: 767px)",
        },
        {
          rel: "preload",
          href: "/images/hurry-bg-mob.webp",
          as: "image",
          media: "(max-width: 767px)",
        },
        {
          rel: "preload",
          href: "/images/hurry-bg.webp",
          as: "image",
          media: "(min-width: 768px)",
        },
      ],
    },
  },
  nitro: {
    compressPublicAssets: true,
  },
  routeRules: {
    "/images/**": {
      headers: {
        "cache-control": "public, max-age=31536000, immutable",
      },
    },
    "/icons/**": {
      headers: {
        "cache-control": "public, max-age=31536000, immutable",
      },
    },
    "/fonts/**": {
      headers: {
        "cache-control": "public, max-age=31536000, immutable",
      },
    },
    "/_nuxt/**": {
      headers: {
        "cache-control": "public, max-age=31536000, immutable",
      },
    },
  },
  css: ["~/assets/css/main.css"],
  vite: {
    build: {
      /* One CSS file instead of per-route chunks — fewer blocking requests on first paint. */
      cssCodeSplit: false,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    // Private keys (only available on server-side)
    // Public keys (exposed to client-side)
    public: {
      apiUrl: process.env.API_URL || "https://api.pdub.lv/api/waitlist",
    },
  },
});
