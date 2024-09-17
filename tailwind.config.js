/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    theme: {
      extend: {
        colors: {
          primary: '#1da1f2',
          secondary: '#14171a',
        },
      },
    },
    darkMode: 'class',
  },
  plugins: [],
  purge: [
    './components/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue',
  ],
}

