import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        primary: {
          DEFAULT: '#fe5041',
          hover: '#fe3525'
        },
        secondary: {
          DEFAULT: '#202b71',
          hover: '#1a2460'
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 3s infinite',
        'slight-rotate': 'slight-rotate 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'slight-rotate': {
          '0%, 100%': { transform: 'rotate(12deg)' },
          '50%': { transform: 'rotate(-12deg)' },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

export default config
