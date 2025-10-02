/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: "#267CB6",
        "neon-muted": "#125C8C",
        terminal: "#0a0a0a",
      },
      fontFamily: {
        mono: ["Fira Code", "ui-monospace", "SFMono-Regular"],
      },
    },
  },
  plugins: [],
};
