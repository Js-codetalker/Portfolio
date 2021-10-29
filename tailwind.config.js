module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    spacing: {
      20: "20px",
      60: "60px",
      1280: "1280px",
      'full': '100%'
    },
    maxWidth: (theme) => theme("spacing"),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
