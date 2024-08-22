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
      // fontFamily: {
      //   'sans': ['Poppins', 'sans-serif'],
      //   'barlow': ['Barlow Condensed', 'sans-serif'],
      // },
      animation: {
        // 'loop-scroll': 'loop-scroll 10s linear infinite',
        'border-slide': 'borderSlide 1s ease-in-out forwards',
      },
      keyframes: {
        // 'loop-scroll': {
        //   from: { transform: 'translateX(0)' },
        //   to: { transform: 'translateX(-30%)' },
        // },
        borderSlide: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(24px)' },
        },
      }                    
    },
  },
  
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
