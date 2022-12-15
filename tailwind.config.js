/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
      },
      transitionProperty: {
        multiple: "width , height , backgroundColor , border-radius"
      }
    }
  }
}
