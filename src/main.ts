import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import ToastService from 'primevue/toastservice'
import { definePreset } from '@primeuix/themes'

const app = createApp(App)

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#296C55',
      500: '#6CCC93',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    },
  },
  components: {
    button: {
      colorScheme: {
        light: {
          root: {
            primary: {
              background: '{primary.100}',
              hoverBackground: '{primary.900}',
            },
          },
          text: {
            primary: {
              color: '{primary.500}',
            },
          },
        },
        dark: {
          root: {
            primary: {
              background: '{primary.100}',
              hoverBackground: '{primary.900}',
            },
          },
          text: {
            primary: {
              color: '{primary.500}',
            },
          },
        },
      },
    },
  },
})

app.use(createPinia())
app.use(PrimeVue, {
  theme: {
    preset: MyPreset,
    options: {
      cssLayer: false,
    },
  },
})
app.use(ToastService)

app.mount('#app')
