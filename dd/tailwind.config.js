/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        Gray01: '#242426',
        Gray02: '#545456',
        Gray03: '#7C7C80',
        Gray04: '#AEAEB2',
        Gray05: '#D4D4D4', // 오타 수정 (Gary05 -> Gray05)
        Gray06: '#E9E9E9',
        Gray07: '#F4F4F4',
        primary: '#FF6A00',
        secondary: '#FFA151',
        Red01: '#B51B1B',
        Red02: '#E23636',
      },
      backgroundImage: {
        'black-gray-gradient':
          'linear-gradient(90deg, #242426 0%, #545456 25%, #7C7C80 50%, #AEAEB2 75%, #D4D4D4 100%)',
      },
    },
  },
  plugins: [],
};
