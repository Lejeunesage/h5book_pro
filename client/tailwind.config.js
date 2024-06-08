/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bs-blue': '#0389c9',
        'bs-dark': '#112032',
        'bs-douce': '#10283c',
        'bs-fond': '#edf7fb',
        'bs-darkfond': '#232e42',
        'bs-light': '#f2f9fc',
        'bs-indigo': '#6610f2',
        'bs-purple': '#6f42c1',
        'bs-pink': '#d63384',
        'bs-red': '#dc3545',
        'bs-orange': '#fd7e14',
        'bs-yellow': '#ffc107',
        'bs-green': '#198754',
        'bs-teal': '#20c997',
        'bs-cyan': '#0dcaf0',
        'bs-white': '#ffffff',
        'bs-gray': '#6c757d',
        'bs-gray-dark': '#343a40',
        'bs-primary': '#0d6efd',
        'bs-secondary': '#6c757d',
        'bs-success': '#198754',
        'bs-info': '#0dcaf0',
        'bs-warning': '#ffc107',
        'bs-danger': '#dc3545',
      },
    },
  },
  plugins: [],
}

