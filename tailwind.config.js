/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#001524',
        secondary: '#1F2020',
        accent: '#ffecd1',
        danger: '#ff7d00'
      }
    }
  },
  plugins: []
};