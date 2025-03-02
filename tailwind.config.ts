module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // App Router (Next.js 14)
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],  // DaisyUI Plugin
  daisyui: {
    themes: ["light", "dark"],  // Specify themes you want to use
    logs: true,  // Enable logs
  },
};