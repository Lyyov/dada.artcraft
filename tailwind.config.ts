import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: "1rem",
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
      }
    },
    extend: {

      colors: {
        'background-primary': "var(--background-primary)",
        'foreground-primary': "var(--foreground-primary)",
        'background-secondary': "var(--background-secondary)",
        'foreground-secondary': "var(--foreground-secondary)",
        'accent': "var(--foreground-accent)",
        'foreground-accent-hover': "var(--foreground-accent-hover)"
      },
      height: {
        'nav-height': "var(--nav-height)",
      },
      fontFamily: {
        'open-sans': "var(--font-open-sans)",
        // 'advent-pro': "var(--font-advent-pro)", @TOTO clarify about advent pro font
      },
    },
  },
  plugins: [],
} satisfies Config;
