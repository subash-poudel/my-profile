/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}", "./index.html"],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['"Roboto"', 'system-ui'],
      'serif': ['"Roboto"', 'system-ui'],
      'mono': ['"Roboto"', 'system-ui']
    }
  },
  plugins: [],
}

