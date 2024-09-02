import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary1': '#161A30',
        'primary2': '#31304D',
        'primary3': '#B6BBC4',
        'primary4': '#F0ECE5',
      },
      fontFamily: {
        'anton': ['var(--font-anton)'],
        'garamound': ['var(--font-eb-garamound)'],
        'neue': ['var(--font-neue)'],
        'exo': ['var(--font-exo-2)'],
      },
      animation: {
        'loop-scroll': 'loop-scroll 50s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }  
    },
  },
  plugins: [
    require("@designbycode/tailwindcss-text-stroke")
  ],
};
module.exports = withMT(config);
