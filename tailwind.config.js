// tailwind.config.js
const config = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundImage: {
      'a-banner': "url('../pic/banner-bg.jpg')",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

export default config