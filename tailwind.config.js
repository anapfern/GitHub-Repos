/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
        primaryColorLight: "#D4EDEE",
        primaryColor: "#32C0C6",
        primaryColorDark: "#329599",
        placeholder: "#8C8C8C",
        greyNeutral: "#616161",
        greyDark: "#4E4E4E",
        whiteBackgroundLight: "#F7F7F7",
        whiteBackgroundMatte: "#F3F3F5",
        borderAndLine: "#E3E6E9",
        success: "#5CB85C",
        warning: "#FFB22B",
        danger: "#FC4B6C"
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        h1: ['1.3125rem', { fontWeight: '600' }],
        h2: ['1.125rem', { fontWeight: '600' }],
        h3: ['1.125rem', { fontWeight: '500' }],
        h4: ['1rem', { fontWeight: '600' }],
        h5: ['1rem', { fontWeight: '400' }],
        paragraphMd: ['0.875rem', { fontWeight: '400' }],
        paragraphMdBold: ['0.875rem', { fontWeight: '500' }],
        paragraphSm: ['0.75rem', { fontWeight: '400' }],
        paragraphSmBold: ['0.75rem', { fontWeight: '500' }],
      },
    },
  },
  plugins: [],
}
