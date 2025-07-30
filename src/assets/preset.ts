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
      root: {
        sm: {
          paddingX: '2.2rem',
          paddingY: '.2rem',
        },
      },
      colorScheme: {
        dark: {
          root: {
            primary: {
              background: '{primary.400}',
              hoverBackground: '{primary.700}',
              hoverColor: '#ffffff',
              color: '#ffffff',
              borderColor: '{primary.500}',
            },
          },
        },
      },
    },
    toast: {
      icon: {
        size: '1rem',
      },
      summary: {
        fontSize: '.9rem',
      },
      css: `
            .p-toast-summary {
                margin-top: -3.5px;
            }
        `,
    },
  },
})
