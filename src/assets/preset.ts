import Aura from '@primeuix/themes/aura'
import { definePreset } from '@primeuix/themes'

export const MyPreset = definePreset(Aura, {
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
