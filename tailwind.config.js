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
        'token': "url('./assets/image/webp/token-bg.png')",
        'Uniswap': "url('./assets/image/webp/Uniswap-bg.png')",
      },
      fontFamily: {
        'Josefin': "Josefin Sans, sans-serif",
        'poppins': "Poppins, sans-serif",
        'Montserrat': "Montserrat, sans-serif",
      },
      container: {
        center: true,
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1320px',
        },
      },
      textColor: {
        'Sky_Blue': '#1BABFE',
      },
      backgroundColor: {
        'primary_black': '#0000001A',
      },
      fontSize: {
        '22': '22px',
        '40': '40px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.border-image-light-gray': {
          borderImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%) 1',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}