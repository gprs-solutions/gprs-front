import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css' 
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
            primary: '#f5f5dc',
          },
        },
        dark: {
          colors: {
            primary: '#6E07F3',
          },
        },
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
