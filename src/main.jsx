import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { FavoritesProvider } from "./hooks/FavoritesContext";

const Main = () => {
  return (
    <React.StrictMode>
      {/* Provide global state to all components */}
      <FavoritesProvider>
        {/* Set up routing for the application */}
        <RouterProvider router={router} />  
      </FavoritesProvider>
    </React.StrictMode>
  );
};

// Render the Main component into the root DOM element.
ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
