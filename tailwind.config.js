/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#1C1B22',
        secondary: '#1F2020',
        accent: '#ffecd1',
        danger: {
          100: '#641220',
          200: '#6e1423',
          300: '#85182a',
          400: '#a11d33',
          500: '#a71e34',
          600: '#b21e35',
          700: '#bd1f36',
          800: '#da1e37',
          900: '#e01e37'
        }
      }
    }
  },
  plugins: []
};