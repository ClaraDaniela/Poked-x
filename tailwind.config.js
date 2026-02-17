// tailwind.config.js (Actualizado para v4.x)
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js, ts, jsx, tsx}", // Formato simplificado
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"]
      }
    },
  },
  plugins: [],
};
