import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { PokedexContextProvider } from "./context/PokedexContextProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PokedexContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PokedexContextProvider>
  </React.StrictMode>
);
