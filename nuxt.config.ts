export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n", "@pinia/nuxt"],

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  i18n: {
    locales: [
      { code: "en", iso: "en-US", name: "English", file: "en.json" },
      { code: "pt", iso: "pt-BR", name: "Portuguese", file: "pt-BR.json" },
    ],
    defaultLocale: "en",
    lazy: true,
  },
  build: {
    transpile: ["vuetify"],
  },

  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.css",
    "~/assets/scss/main.scss",
  ],

  ssr: false,

  plugins: ["~/plugins/vuetify.js"],

  app: {
    head: {
      title: "GPRS Website",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "Portfolio" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap",
        },
      ],
    },
  },

  compatibilityDate: "2024-09-18",
});
