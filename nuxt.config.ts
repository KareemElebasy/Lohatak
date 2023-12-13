// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  spaLoadingTemplate: false,
  app: {
    // Start:: Head Configurations //
    head: {
      title: "Lohatak",
      script: [
        {
          src: "/wow.js",
        },
      ],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/logo.png" },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css",
          crossorigin: "anonymous",
        },
      ],
    },
  },

  tailwindcss: {
    cssPath: "~/assets/style/tailwind.css",
  },
  css: ["~/assets/style/animation/animate.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    // "@formkit/auto-animate/nuxt",
    "nuxt-swiper",
    [
      "nuxt-primevue",
      {
        primevue: {
          options: {
            ripple: true,
          },
          components: {
            include: [
              "Button",
              "Calendar",
              "Dialog",
              "Dropdown",
              "MenuButton",
              "Menu",
            ],
          },
        },
      },
    ],

    [
      "@nuxtjs/i18n",
      {
        locales: [
          {
            name: "English",
            code: "en",
            iso: "en-US",
            file: "en.json",
            dir: "ltr",
          },
          {
            name: "عربي ",
            code: "ar",
            iso: "ar-AR",
            file: "ar.json",
            dir: "rtl",
          },
        ],
        lazy: true,
        langDir: "locales/",
        defaultLocale: "ar",
        detectBrowserLanguage: false,
        // precompile: {
        //   strictMessage: false,
        // },
        vueI18nLoader: true,
      },
    ],
    [
      "@vee-validate/nuxt",
      {
        // disable or enable auto imports
        autoImports: true,
        // Use different names for components
        componentNames: {
          Form: "VeeForm",
          Field: "VeeField",
          ErrorMessage: "VeeErrorMessage",
        },
      },
    ],
    [
      "@pinia/nuxt",
      {
        autoImports: [
          // automatically imports `defineStore`
          "defineStore", // import { defineStore } from 'pinia'
          ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
    "@nuxt/image",
  ],
  plugins: ["~/plugins/vue-toastification.client", "~/plugins/i18n.client.ts"],
  build: {
    transpile: ["vue-toastification", "@vuepic/vue-datepicker"],
  },

  runtimeConfig: {
    public: {
      baseURL: "https://lohatk.phpv8.aait-d.com/public/",
    },
  },
});
