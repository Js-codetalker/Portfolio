module.exports = {
  purge: [],
  darkMode: "class",
  theme: {
    spacing: {
      0: "0px",
      5: "5px",
      10: "10px",
      20: "20px",
      40: "40px",
      60: "60px",
      240: "240px",
      300: "300px",
      750: "750px",
      1280: "1280px",
      full: "100%",
    },
    maxWidth: (theme) => theme("spacing"),
    minWidth: (theme) => theme("spacing"),
    stroke: (theme) => theme("colors"),
    extend: {
      backgroundColor: {
        overlay: "rgba(0,0,0,.8)",
      },
      inset: {
        "-50": "-50px",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dark"],
    },
  },
  plugins: [],
};
