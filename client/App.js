import React from "react";
import { jsx, ThemeProvider } from "@emotion/react"; /** @jsx jsx */
import { hot } from "react-hot-loader/root";
import { GlobalStyles } from "./styles";
import { BrowserRouter as Router } from "react-router-dom";
import MainRouter from "./MainRouter";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <GlobalStyles />
        <MainRouter />
      </ThemeProvider>
    </Router>
  );
}

export default hot(App);
