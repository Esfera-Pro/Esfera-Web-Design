import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Compatibilidad con los viejos enlaces "#/legal": redirigirlos a la ruta real.
if (window.location.hash.startsWith("#/legal")) {
  const anchor = window.location.hash.replace("#/legal", "");
  window.history.replaceState(null, "", `/legal${anchor}`);
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
