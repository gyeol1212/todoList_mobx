import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const GlobalTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#ffb74d",
      main: "#ffa726",
      dark: "#ff9800"
    },
    secondary: {
      light: "#4db6ac",
      main: "#26a69a",
      dark: "#009688"
    },
    info: {
      light: "#64b5f6",
      main: "#42a5f5",
      dark: "#2196f3"
    }
  }
});

const GlobalThemeProvider = (props: { children: JSX.Element }) => (
  <ThemeProvider theme={GlobalTheme}>{props.children}</ThemeProvider>
);

export default GlobalThemeProvider;
