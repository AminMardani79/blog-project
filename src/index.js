import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import { globalTheme } from "./mui/theme";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={globalTheme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
