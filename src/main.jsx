import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import MoviesProvider from "./contexts/MoviesContext";
import { GlobalStyle } from "./styles/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <MoviesProvider>
      <App />
      <GlobalStyle />
    </MoviesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
