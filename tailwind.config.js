
module.exports = {
  mode: "jit", content:
    ["./src/**/**/*.{js,ts,jsx, tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      '2xl': "1280px",
    },
    extend: {
      colors: {
        black: { 900: "var(--black_900)" },
        blue: { a200: "var(--blue_a200)" },
        deep_orange: { 900: "var(--deep_orange_900)" },
        gray: {
          50: "var(--gray_50)", 300: "var(--gray_300)", 400: "var(--gray_400)", 500: "var(--gray_500)", 700: "var(--gray_700)",
          900: "var(--gray_900)",
          "900_01": "var(--gray_900_01)",
          "900_11": "var (--gray_900_11)",
          "900_1e": "var(--gray_900_1e)",
          "900_66": "var(--gray_900_66)",
        },
        indigo: { 400: "var(--indigo_400)", a200: "var(--indigo_a200)" }, light_blue: { 300: "var(--light_blue_300)" },
        lime: { 800: "var(--lime_800)" },
        red: { a200: "var(--red_a200)" },
        white: { a700: "var(--white_a700)" },
        yellow: { 700: "var(--yellow_700)" },
      },
      boxShadow: { xs: "0 0 1px 0 #171a1f11", sm: "0 3px 6px 0 #120f281e" }, fontFamily: { inter: "Inter", archivo: "Archivo" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};