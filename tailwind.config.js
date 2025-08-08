/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#006B7D",     // Bleu principal (titres, icônes)
          green: "#8A9B4F",    // Vert olive (accents)
          yellow: "#F4C542",   // Jaune doré (CTA)
        },
      },
      borderRadius: {
        xl2: "1rem", // bords arrondis personnalisés
      },
      boxShadow: {
        card: "0 8px 24px rgba(2, 6, 23, 0.08)", // ombre douce pour cartes
      },
    },
  },
  plugins: [],
};
