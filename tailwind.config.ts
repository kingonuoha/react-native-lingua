import type { Config } from "tailwindcss";
import { colors, fontFamilies, fontSize, shadows, spacing } from "./theme";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./**/*.{css,html}", "./global.css"],
  theme: {
    extend: {
      colors,
      fontFamily: fontFamilies,
      fontSize,
      boxShadow: shadows,
      spacing,
    },
  },
};

export default config;
