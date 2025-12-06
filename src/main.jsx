import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

import { FavoritesProvider } from "./hooks/FavoritesContext";

const Main = () => {
  return (
    <React.StrictMode>
      <FavoritesProvider>
        <RouterProvider 
        router={router}
        future={{ v7_startTransition: true }} />  
      </FavoritesProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);