import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css' 

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
        },
        ssr: true,
        components,
        directives,
        theme: {
        defaultTheme: 'light',
        },
    })

  nuxtApp.vueApp.use(vuetify)
})