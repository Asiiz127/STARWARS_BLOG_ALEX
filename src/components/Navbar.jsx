import React from "react";
import { FavoritesList } from "./Favorites";

export const Navbar = () => {
  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Contenedor Flex principal */}
        <div className="flex h-16 items-center justify-between">
          {/* IZQUIERDA: Imagen / Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <img
              className="h-15 w-auto"
              src="src\assets\img\starwars.png"
              alt="Logo Empresa"
            />
          </div>

          {/* DERECHA: Tu componente Favorites */}
          <div className="flex items-center">
            <FavoritesList/>
          </div>
        </div>
      </div>
    </nav>
  );
};
