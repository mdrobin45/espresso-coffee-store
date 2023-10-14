/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            primary: "#331A15",
            secondary: "#ECEAE3",
         },
         fontFamily: {
            primary: "Rancho, cursive",
         },
      },
   },
   plugins: [],
};
