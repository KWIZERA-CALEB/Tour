import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      
      md: '784px',
    
      lg: '1024px',
      
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: '#fff',
        secondary: '#379777',
        danger: '#F5004F',
        customGray: {
          100: '#31363F',
          200: '#222831',
          300: '#0F0F0F'
        }
      }
    },
  },
  plugins: [],
};
export default config;
