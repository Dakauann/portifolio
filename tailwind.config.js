/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          lighter: "var(--color-primary-lighter)",
          darker: "var(--color-primary-darker)",
          evenDarker: "var(--color-primary-even-darker)",
          evenLighter: "var(--color-primary-even-lighter)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          lighter: "var(--color-secondary-lighter)",
          darker: "var(--color-secondary-darker)",
          evenDarker: "var(--color-secondary-even-darker)",
          evenLighter: "var(--color-secondary-even-lighter)",
        },
        base: {
          current: "var(--bg-base-current)",
          currentDarker: "var(--bg-base-current-darker)",
          currentLighter: "var(--bg-base-current-lighter)",
        },
      },
    },
  },
  plugins: [require("lumin-ui").default],
};
