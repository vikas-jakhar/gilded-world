/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('./assets/image/webp/hero-bg-img.png')",
        'nft': "url('./assets/image/webp/nft-bg.png')",
        'game': "url('./assets/image/webp/gildedworld_environment.png')",
      },
      fontFamily: {
        'Josefin': "Josefin Sans, sans-serif",
        'poppins': "Poppins, sans-serif",
      },
      container: {
        center: true,
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1320px',
        }
      }
    },
  },
  plugins: [],
}