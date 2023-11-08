/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'small-mobile': {'max': '426px'},
        // => @media (max-width: 425px) { ... }
        'very-mobile': '375px',
// => @media (min-width: 375px) { ... }
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': {'max': '1024px'},
        // => @media (max-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      margin: {
        '140-30': '140px auto 30px',
      },
      padding: {
        '1-10': '1px 10px',
      },
      boxShadow: {
        'boxshadow': '0 10px 37px -18px #000',
        'btnshadow': 'rgb(0, 121, 255) 0px 0px 15px -3px',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(16, minmax(0, 1fr))',

        // Complex site-specific column configuration
        'footer': '144px minmax(140px, 1fr)',
        'footergrid': '88px minmax(88px, 1fr)',
      },
    },
  },
  plugins: [],
}