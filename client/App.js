import React from "react";
import { jsx, ThemeProvider } from "@emotion/react"; /** @jsx jsx */
import { hot } from "react-hot-loader/root";
import AuthProvider from "./auth/AuthContext/AuthContext";
import { GlobalStyles, theme } from "./styles";
import { BrowserRouter as Router } from "react-router-dom";
import MainRouter from "./MainRouter";

function App() {
  return (
    <AuthProvider>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <MainRouter />
        </ThemeProvider>
      </Router>
    </AuthProvider>
  );
}

export default hot(App);
