import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: "var(--background)",
      foreground: "var(--foreground)",
      font: "var(--font-color)",
      "dark-blue-primary": "#0a52b6",
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
