import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {


    extend: {


      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'blue-custom': '#3D8BFF',
        'purple-custom': '#AB23FF',
        'grey-custom': '#13171D',
      },
      fontFamily:{
        momentExtended:  ['var(--font-momentExtended)'],
        satoshiBold: ['var(--font-satoshiBold)'],
        satoshiRegular:['var(--font-satoshiRegular)'],
      },
      fontSize: {
        '22': '1.375rem',
        '68': '4.25rem',
        '18': '1.125rem'
      },
      spacing: {
        'custom18': '4.5rem',
      },


    },


  },
  plugins: [],
};
export default config;
