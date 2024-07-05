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
        'white': 'hsl(0, 0%, 100%)',
        'gray': 'hsl(0, 0%, 20%)',
        'dark-gray': 'hsl(0, 0%, 12%)',
        'off-black': 'hsl(0, 0%, 8%)',
        'green': 'hsl(75, 94%, 57%)',
        'blue': 'hsl(228, 45%, 44%)',

      },
      screens: {
        // 'sm': '320px',
        // 'mobile': '375px',
        // 'desktop': '1440px',
      },
      fontSize: {
        'p': '0.875rem',
    },
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
