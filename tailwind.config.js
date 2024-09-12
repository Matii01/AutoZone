/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ["Open Sans"],
      bebas: ["Bebas Neue"],
      robotoflex: ["Roboto Flex"],
      robotoCondensed: ["Roboto Condensed"],
    },
    extend: {
      colors: {
        "primary-blue": "#0147ff",
        "primary-gray": "#f7f7f7",
        dark: {
          100: "#282828",
          200: "#1D1D1B",
        },
      },
    },
  },
  plugins: [],
};
