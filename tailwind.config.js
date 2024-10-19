/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /^line-clamp-(\d+)$/,
    },
  ],
  // …

  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
