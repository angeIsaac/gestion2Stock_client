/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";
import { createThemes } from "tw-colors"
import daisyui from "daisyui";

const baseColors = [
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];

const shapeMapping = {
  "50": "900",
  "100": "800",
  "200": "700",
  "300": "600",
  "400": "500",
  "500": "400",
  "600": "300",
  "700": "200",
  "800": "100",
  "900": "50",
};

const generateObject = (colors, mapping, invert = false) => {
  const theme = {};

  baseColors.forEach(color => {
    theme[color] = {};
    Object.entries(mapping).forEach(([key, value]) => {
      const shadeKey = invert ? value : key;
      theme[color][key] = colors[color][shadeKey];
    }
    );
  })
  return theme;
}

const ligthTheme = generateObject(colors, shapeMapping);
const darkTheme = generateObject(colors, shapeMapping, true);


const themes = {
  light: {
    ...ligthTheme,
    white: "#ffffff",
  },
  dark: {
    ...darkTheme,
    white: colors.gray["950"],
    black: colors.gray["50"],
  },
};


module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      },
    },
  },
  plugins: [
    createThemes(themes),
    daisyui,
  ],
};
