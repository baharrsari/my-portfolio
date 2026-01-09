/*
 * React'ı import eder
 */
import React from "react";
/*
 * ReactDOM'u import eder (web için)
 */
import ReactDOM from "react-dom/client";
/*
 * Ana App bileşenini import eder
 */
import App from "./App";
/*
 * Global stilleri import eder
 */
import "./styles/globals.css";

/*
 * React uygulamasını root elementine render eder
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  /*
   * StrictMode ile geliştirme sırasında ekstra kontroller sağlar
   */
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
