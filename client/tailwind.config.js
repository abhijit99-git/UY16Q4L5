/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#258cf4",
        "background-light": "#f5f7f8",
        "background-dark": "#020617", // darker blue (slate-950)
        "surface-dark": "#0f172a",   // dark blue (slate-900)
        "danger": "#ef4444",
        "success": "#22c55e",
        "warning": "#f59e0b",
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
};
