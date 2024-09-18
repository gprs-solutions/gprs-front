import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css' // Ensure MDI icons are available
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'dark',
      themes: {
        light: {
          colors: {
            primary: '#1da1f2',
            secondary: '#14171a',
          },
        },
        dark: {
          colors: {
            primary: '#181818',
          },
        },
      },
    },
  })

  // Inject Vuetify into the Vue app instance
  nuxtApp.vueApp.use(vuetify)
})
