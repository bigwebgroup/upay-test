module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./templates/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: '1rem',
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          500: "#594A9E",
          400: "#7D66D3",
          300: "#A899E2",
          200: "#D3CCF0",
          100: "#F0EEFA",
        },
        secondary: "#F1B257",
        warmgray: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#111922"
        },
        gray: {
          100: '#BEBFBF',
          300: '#F4F4F4',
          400: '#666666',
          500: '#8C8C8C',
        },
        orange: {
          900: '#FFAD33',
        },
        background: "#D1DDE0",
        text: "#2F2235",
        success: "#7BC950",
        error: "#FF4652",
      },
    },
  },
  plugins: [],
}
