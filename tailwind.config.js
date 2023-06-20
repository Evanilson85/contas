/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '95': '95%'
      },
      borderRadius: {
        'person': '50%'
      },
      fontFamily: {
        'roboto': ['roboto'],
        'Nunito': ['Nunito'],
        'Raleway': ['Raleway'],
      },
      colors: {
        'input': '#eef2f7',
        'textInput': '#0a0909bd',
        'textLogin': '#885df6',
        
        'btnText': '#4c1d95',
        'btnLite': '#7c3aed59'
      },
      backgroundColor: {
        'input': '#eef2f7',
        'nubank': '#820ad1',
        'btnLite': '#7c3aed59'
      },
      minHeight: {
        '1/2': '50%',
        '120': '120px'
      }
      
    },
  },
  plugins: [],
}


// background: #7c3aed59;
// color: #4c1d95;
// button claro