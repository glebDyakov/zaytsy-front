/** @type {import("tailwindcss").Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionProperty: {
        'left': 'left'
      },
    },
    screens: {
      'xxs': '320px',
      'xs': '375px',
      'sm': '576px',
      'md': '960px',
      'lg': '1100px',
      'xlg': '1128px',
      'xl': '1280px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        xxs: '1.25rem',
        xs: '1.5rem',
        sm: '1.85rem',
        xl: '2.5rem',
      },
      screens: {
        xxs: '420px',
        xs: '480px',
        sm: '600px',
        md: '728px',
        lg: '984px',
        xlg: '1128px',
        xl: '1260px',
      }
    },
  },


  plugins: []
}
