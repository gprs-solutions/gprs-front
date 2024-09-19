// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // Modules to include in the Nuxt project
  modules: [
    '@nuxtjs/i18n' // nuxt-i18n for internationalization
  ],

  //disabling nested naming
  components: [
    {
      path: '~/components', 
      pathPrefix: false,
    },
  ],

  // i18n configuration for localization
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
      { code: 'pt', iso: 'pt-BR', name: 'Portuguese', file: 'pt-BR.json' } // Incorrect ISO code (should be 'pt-BR')
    ],
    defaultLocale: 'en',
    lazy: true, // Load translation files lazily
    langDir: 'locales/', // Directory for language files
  },

  // Build configuration for transpiling libraries
  build: {
    transpile: ['vuetify'] // Transpile Vuetify for SSR/CSR compatibility
  },

  // Global CSS configuration for the project
  css: [
    'vuetify/lib/styles/main.sass', // Vuetify styles
    '@mdi/font/css/materialdesignicons.css', // Material Design Icons
    '~/assets/scss/main.scss' // Custom SCSS
  ],

  // Disable SSR if the application is client-side only
  ssr: false,

  // Register custom plugins
  plugins: ['~/plugins/vuetify.js'], // Vuetify initialization plugin

  // Application head configuration (meta tags, stylesheets)
  app: {
    head: {
      title: 'GPRS Website',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Portfolio' }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap'
        }
      ]
    }
  },

  // Compatibility date for the project
  compatibilityDate: '2024-09-18'
});
