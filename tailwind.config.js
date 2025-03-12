// tailwind.config.js
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          blob: 'blob 6s linear infinite',
          blob2: 'blob 4s linear infinite',
          blob3: 'blob2 10s linear infinite',
        },
        keyframes: {
          blob: {
            '0%': { borderRadius: '32% 58% 69% 43% / 48% 32% 59% 55%' },
            '33%': { borderRadius: '56% 38% 52% 69% / 32% 65% 39% 58%' },
            '66%': { borderRadius: '38% 68% 42% 57% / 62% 43% 59% 45%' },
            '100%': { borderRadius: '32% 58% 69% 43% / 48% 32% 59% 55%' },
          },
          blob2: {
            '0%': { borderRadius: '31% 45% 74% 35% / 38% 56% 51% 87%' },
            '33%': { borderRadius: '74% 33% 54% 65% / 36% 76% 42% 53%' },
            '66%': { borderRadius: '48% 72% 39% 54% / 63% 43% 76% 49%' },
            '100%': { borderRadius: '31% 45% 74% 35% / 38% 56% 51% 87%' },
          },
        },
      },
    },
    plugins: [],
  }