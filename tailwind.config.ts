import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cheerful-green': '#76CC2B',
        'kelly-green-100': '#E6F7F0',
        'kelly-green': '#00AA65',
        'kelly-green-600': '#009C56',
        'kelly-green-900': '#00110A',
        'horizon-gray': '#F2F2F2',
        'midnight-black': '#080D14',
        'dark-forest-green': '#0E352E',
        'sunbeam-orange': '#ED5F18',
        'cactus-green': '#DDF4C6',
        'sunny-yellow': '#F7D234',
        'slate-gray': '#434750',
        'alpine-blue': '#1F7EAD',
      },
    },
  },
  plugins: [],
};

export default config;
