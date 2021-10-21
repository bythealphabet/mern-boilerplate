import React from "react";
import { jsx, css, ThemeProvider } from "@emotion/react";
import { theme, GlobalStyles } from "../client/styles/index";

const EmotionThemeProvider = (storyFn) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {storyFn()}
    </ThemeProvider>
  </>
);

export default EmotionThemeProvider;
