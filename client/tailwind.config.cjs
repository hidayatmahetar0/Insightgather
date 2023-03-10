/** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = ({
  plugins: [require("daisyui")],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login': "url('/bg-img.jpg')",
      },
      height: {
        "7/100": "7%",
        "83/100": "83%",
        "1/10": "10%",
        "5v": "5vh",
        "10v": "10vh",
				"80v": "80vh",
        "90v": "90vh",
        
      },
      colors: {
        black: '#09090c',
        darkGray: '#121212',
        
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',

        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
    },
      overflow: false,
    },
    fontFamily: {
      sans: ['Oxygen', 'sans-serif']
    }
  },
  // plugins: [],
  
})
