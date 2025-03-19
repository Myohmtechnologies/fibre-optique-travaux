/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        fiber: {
          blue: '#5a5a5a', 
          lightBlue: '#8a8a8a', 
          glow: '#e0e0e0', 
          orange: '#ff6b00',
          gray: '#6c757d',
        },
        construction: {
          yellow: '#ffc107',
          orange: '#ff6b00',
          gray: '#6c757d',
        },
        primary: {
          DEFAULT: '#5a5a5a', 
          dark: '#3a3a3a', 
          light: '#8a8a8a', 
        },
        secondary: {
          DEFAULT: '#ff6b00',
          dark: '#e05f00',
          light: '#ff9d4d',
        },
        accent: {
          DEFAULT: '#ffc107',
          dark: '#e0a800',
          light: '#ffda6a',
        },
        neutral: {
          DEFAULT: '#6c757d',
          dark: '#495057',
          light: '#adb5bd',
        },
        dashboard: {
          primary: '#3498db',
          secondary: '#f1c40f',
          background: '#f9f9f9',
          text: '#333333',
        },
      },
      backgroundImage: {
        'fiber-pattern': 'linear-gradient(to right, rgba(138, 138, 138, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(138, 138, 138, 0.1) 1px, transparent 1px)', 
        'construction-pattern': 'repeating-linear-gradient(45deg, rgba(255, 193, 7, 0.1), rgba(255, 193, 7, 0.1) 10px, rgba(255, 255, 255, 0.5) 10px, rgba(255, 255, 255, 0.5) 20px)',
        'fiber-glow': 'radial-gradient(circle, rgba(224, 224, 224, 0.2) 0%, rgba(138, 138, 138, 0.1) 50%, transparent 100%)', 
      },
      boxShadow: {
        'fiber-glow': '0 0 15px rgba(138, 138, 138, 0.5)', 
        'construction': '0 4px 6px -1px rgba(255, 193, 7, 0.1), 0 2px 4px -1px rgba(255, 193, 7, 0.06)',
      },
    },
  },
  plugins: [],
}
