/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./{App,index}.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nexus-accent': {
          DEFAULT: 'rgba(59, 130, 246, 1)',
          '30': 'rgba(59, 130, 246, 0.3)',
        },
      },
    },
  },
  plugins: [],
}
