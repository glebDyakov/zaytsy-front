/** @type {import("tailwindcss").Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      xxs: '420px',
      xs: '480px',
      sm: '600px',
      md: '728px',
      lg: '984px',
      xlg: '1128px',
      xl: '1280px'
    }
  },

  plugins: []
}
