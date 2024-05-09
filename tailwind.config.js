/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],

  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px",
        screens: {
          md: "750px",
          lg: "970px",
          xl: "1170px",
        },
      },
      screens: {
        sm: "var(--screen-sm)",
        md: "var(--screen-md)",
        lg: "var(--screen-lg)",
        xl: "var(--screen-xl)",
        "2xl": "var(--screen-2xl)",
      },
      colors: {
        transparent: "transparent",
        white: "var(--white)",
        orange: "var(--orange)",
        cielo: "var(--cielo)",
        black: "var(--black)",
        success: "var(--success)",
        error: "var(--error)",
      },
      fontFamily: {
        opensans: ["var(--opensans)", "sans-serif"],
        adventpro: ["var(--adventpro)", "sans-serif"],
      },
      fontSize: {
        xs: "var(--fz-xs)",
        sm: "var(--fz-sm)",
        md: "var(--fz-md)",
        lg: "var(--fz-lg)",
        title: "var(--fz-title)",
        title1: "var(--fz-title1)",
        title_sm: "var(--fz-title-sm)",
        title1_sm: "var(--fz-title1-sm)",
      },
      rounded: {
        sm: "3px",
      },
    },
  },
  plugins: [],
};
