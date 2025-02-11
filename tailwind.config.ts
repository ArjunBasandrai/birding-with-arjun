import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "primary-dark": "var(--primary-dark)",
      },
      fontFamily: {
        ImperialScript: ['ImperialScript', 'serif'],
        Atma: ['Atma', 'sans-serif'],
      }
    },
  },
  plugins: [],
  important: true,
} satisfies Config;
