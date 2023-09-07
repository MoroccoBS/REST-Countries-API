import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Blue: "var(--Blue)",
        BlueHover: "var(--BlueHover)",
        Bg: "var(--Bg)",
        Text: "var(--Text)",
        Orange: "var(--Orange)",
      },
    },
  },
  plugins: [],
};
export default config;
