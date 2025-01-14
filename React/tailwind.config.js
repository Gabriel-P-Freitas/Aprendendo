/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js}',
    './src/**/*.{html,js,jsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// npx tailwindcss -i ./src/assets/index.css -o ./src/assets/output.css --watch