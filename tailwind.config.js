/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-container": "#0F172A",
        "dark-card": "#1E293B",
        "dark-layer": "#293548",
        "dark-sidebar": "#050f2d",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
