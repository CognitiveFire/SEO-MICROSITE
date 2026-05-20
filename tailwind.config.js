/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Inter", "sans-serif"],
      },
      colors: {
        apriil: {
          primary: "#8f5a33",
          sand: "#f8f8f6",
          mist: "#efede8",
          line: "#d8d2c7",
          dark: "#171717",
          muted: "#5f5a52",
        },
      },
      boxShadow: {
        panel: "0 24px 80px rgba(23, 23, 23, 0.08)",
      },
    },
  },
  plugins: [],
};
