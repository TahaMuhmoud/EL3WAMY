/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const darkMode = "class";
export const theme = {
  textColor: (theme) => theme("colors"),
  extend: {
    backgroundImage: {
      "black-gradient-to-transparent":
        "linear-gradient(0deg, hwb(0 0% 100%) 1%, rgba(255, 0, 0, 0) 30%)",
      "white-gradient-to-transparent":
        "linear-gradient(0deg, hwb(0 100% 0%) 1%, rgba(255, 0, 0, 0) 30%)",
      mainSecGradient:
        "linear-gradient(180deg,rgb(0, 0, 0) -40%,rgba(0, 0, 0, 0) 80%,rgb(0, 0, 0) 100%),linear-gradient(90deg,rgb(0, 0, 0) -40%,rgba(0, 0, 0, 0) 80%,rgb(0, 0, 0) 100%)",
      instaGradient:
        "radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%);",
      
    },
    colors: {
      mainColor: { 50: "var(--mainClr-50)", 100: "var(--mainClr)" },
      transprent: {
        "1/10": "rgb(255,255,255,0.1)",
        "1/5": "rgb(255,255,255,0.2)",
        "1/3": "rgb(255,255,255,0.3)",
        "2/5": "rgb(255,255,255,0.4)",
        "1/2": "rgb(255,255,255,0.5)",
        "2/3": "rgb(255,255,255,0.6)",
        "7/10": "rgb(255,255,255,0.7)",
        "4/5": "rgb(255,255,255,0.8)",
        "9/10": "rgb(255,255,255,0.9)",
      },
    },
    borderWidth: {
      1: "1px",
    },
    fontFamily: {
      mainFontFamily: "'Reenie Beanie', cursive",
    },
  },

  screens: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    "2xl": "1400px",
  },
};
export const plugins = [];
