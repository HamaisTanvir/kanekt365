// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


module.exports ={
  
      content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ], 
  
  theme: {
    extend: {
      animation: {
        'loop-scroll': 'loop-scroll 10s linear infinite',
        'water-wave': 'waterWave 2s ease-in-out infinite',
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-30%)' },
        },
        waterWave: {
          '0%, 100%': { transform: 'scaleY(1)' },
          '25%': { transform: 'scaleY(1.3)' },
          '50%': { transform: 'scaleY(0.7)' },
          '75%': { transform: 'scaleY(1.2)' },
        },
      }                    
    },
  },
  
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
