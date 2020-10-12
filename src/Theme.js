import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    light: "#fff",
    highlight: "#008ed6",
    secondaryBg: "#f2f2f2",
    darkBg: "#15141a",
    lightTextSec: "#999999",
    darkText: "#1a1a1a",
    darkTextSec: "#1b1b1b",
    borderColor: "#e0e0e0",
    dividerColor: "#ededed",
  },
  fonts: ["'Source Sans Pro', sans-serif", "Ubuntu, sans-serif"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
