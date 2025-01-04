import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-primary': "var(--background-primary)",
        'foreground-primary': "var(--foreground-primary)",
        'background-secondary': "var(--background-secondary)",
        'foreground-secondary': "var(--foreground-secondary)",
        'accent': "var(--foreground-accent)",
      },
      lineHeight: {
        'nav-height': "var(--nav-height)",
      }
    },
  },
  plugins: [],
} satisfies Config;
