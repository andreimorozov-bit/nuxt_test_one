/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '960px',
        '2lg': '1200px',
        xl: '1440px',
        '2xl': '1540px',
      },
      extend: {
        colors: {
          elgray: {
            200: '#dcdfe6',
            300: '#c0c4cc',
            500: '#606266',
          },
          elred: {
            400: '#ff6262',
            500: '#ff272b',
            600: '#cc2022',
          },
          fbgray: {
            50: '#f9f9f9',
            100: '#f7f7f7',
            200: '#e8e8e8',
            400: '#989898',
            450: '#949494',
            700: '#313131',
            800: '#262626',
            900: '#1a212f'
          },
          fbblue: {
            100: '#e3eeff'
          }
        },
        boxShadow: {
          'even': '0 0 10px rgba(26, 26, 26, 0.1)',
        },
        dropShadow: {
          'even': '0 0 10px 5px rgba(0, 0, 0, 0.9)',
        },
        backgroundImage: {
          'gradient-banner': 'linear-gradient(120.26deg, #FF272B 2.73%, #E22222 53.2%, #D1090C 101.85%)',
          'gradient-hero': 'radial-gradient(rgba(255 39 43, 0.5) 0%, rgba(255 39 43, 0) 70.71%)',
          'simple-radial': 'radial-gradient(rgba(255 39 43, 0.5), rgba(255 39 43, 0))'
        }
      },
    },
    plugins: [],
  };