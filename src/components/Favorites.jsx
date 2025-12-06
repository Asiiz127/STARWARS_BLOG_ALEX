import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { ChevronDownIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useFavorites } from "../hooks/FavoritesContext";

export const FavoritesList = () => {
  const [open, setOpen] = React.useState(false);

  const { store, actions } = useFavorites();
  const favs = store.FavoritesList;
  const { removeFavorite } = actions;
  return (
    <Menu open={open} handler={setOpen} placement="bottom-end" offset={15}>
      <MenuHandler>
        <Button
          color="green"
          className={`flex items-center justify-center gap-5 text-base font-semibold capitalize tracking-wide 
          border border-emerald-500 
          bg-emerald-600 
          hover:bg-emerald-500 
          active:bg-emerald-700 
          transition-all shadow-sm hover:shadow-md
          shadow-retro-glow
          ${open ? "bg-emerald-700 shadow-inner" : ""}`}
        >
          Favorites{" "}
          <span className="bg-emerald-800 px-2 py-0.5 rounded-full text-xs">
            {favs.length}
          </span>
          <ChevronDownIcon
            strokeWidth={3}
            style={{ width: "16px", height: "16px" }}
            className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="bg-gray-900 border border-gray-700 p-2 shadow-xl shadow-black/80 min-w-[240px] max-h-72 overflow-y-auto">
        {favs.length > 0 ? (
          <div className="flex flex-col gap-1">
            {favs.map((item, index) => (
              <MenuItem
                key={index}
                className="flex items-center justify-between gap-3 rounded-md p-2.5
               text-gray-100 hover:bg-gray-800 hover:text-white
               focus:bg-gray-800 active:bg-gray-800 transition-colors group"
              >
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <span className="h-2 w-2 rounded-full bg-blue-500 shrink-0" />
                  <Typography
                    variant="small"
                    className="font-medium truncate leading-none"
                  >
                    {item}
                  </Typography>
                </div>

                <span
                  onClick={(e) => {
                  e.stopPropagation();
                  removeFavorite(item);
                  }}
                  className="flex items-center justify-center
                  w-7 h-7 opacity-0 group-hover:opacity-100
                  text-red-400 hover:bg-red-500/10 hover:text-red-300
                  transition-all shrink-0"
                >
                  <TrashIcon className="h-4 w-4" />
                </span>
              </MenuItem>
            ))}
          </div>
        ) : (
          <div className="py-4 text-center outline-none">
            <Typography variant="small" className="font-semibold text-gray-400">
              La lista está vacía
            </Typography>
          </div>
        )}
      </MenuList>
    </Menu>
  );
};
