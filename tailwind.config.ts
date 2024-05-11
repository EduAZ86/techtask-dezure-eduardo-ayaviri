import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      light: {
        'primary': '#4a86f7',
        'title': '#35353d',
        'text': '#000000',
        'secundary': '#ffffff',
        'secundary-text': '#6a7185',
        'background': '#F5f7fa',
        'shadow': '#e9edf1',
        'green': '#83bf6e',
        'error': '#d94841'
      },
      dark: {
        'primary': '#4a86f7',
        'title': '#F5f7fa',
        'text': '#ffffff',
        'secundary': '#000000',
        'secundary-text': '#e9edf1',
        'background': '#35353d',
        'shadow': '#e9edf1',
        'green': '#83bf6e',
        'error': '#d94841'
      }
    },
    fontFamily: {
      'inter': ['Inter'],
      'roboto': ['Roboto', 'sans-serif'],

      'openSans': ['Open Sans', 'sans-serif']
    },
  },
  plugins: [],
};
export default config;
