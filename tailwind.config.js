/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0ea5e9',      // Sky-500
        'primary-dark': '#0284c7', // Sky-600
        'secondary': '#64748b',    // Slate-500
        'secondary-dark': '#475569',// Slate-600
        'tertiary': '#a1a1aa',     // Zinc-400
        'tertiary-dark': '#71717a',// Zinc-500
        'accent': '#10b981',       // Emerald-500
        'accent-dark': '#059669',  // Emerald-600
      }
    },
  },
  plugins: [],
}