import React from "react";
import { useFavorites } from "../hooks/FavoritesContext";
import { StarWarsCard } from "../components/StarWarsCard.jsx";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store } = useFavorites();

  const getUidFromUrl = (url) => {
    const parts = url.split("/").filter(Boolean);
    return parts[parts.length - 1];
  };

    const renderSection = (title, list, type) => (
    <div className="my-10">
        <h1 className="text-3xl font-bold text-red-500 mb-4 px-4">{title}</h1>

        <div className="flex overflow-x-auto gap-6 px-4 pb-6 custom-scrollbar">
        {list.length === 0 ? (
            <div className="p-4 text-gray-500">Cargando {title}...</div>
        ) : (
            list.map((item) => {
            const uid = item.uid || getUidFromUrl(item.url);

            let imgType = "characters";
            if (type === "vehicles") imgType = "vehicles";
            if (type === "planets") imgType = "planets";

            const imgURL = `https://starwars-visualguide.com/assets/img/${imgType}/${uid}.jpg`;

            return (
                <StarWarsCard
                key={uid}
                uid={uid}
                title={item.name}
                imgURL={imgURL}
                type={type}
                routeBase={`/${type}`}
                >
                {type === "characters" && (
                    <ul className="space-y-1">
                    <li>
                        <span className="font-semibold text-cyan-300">Height:</span>{" "}
                        {item.height}{" cm"}
                    </li>
                    <li>
                        <span className="font-semibold text-cyan-300">Mass:</span>{" "}
                        {item.mass}{" kg"}
                    </li>
                    <li>
                        <span className="font-semibold text-cyan-300">Gender:</span>{" "}
                        {item.gender}
                    </li>
                    </ul>
                )}

                {type === "vehicles" && (
                    <ul className="space-y-1">
                    <li>
                        <span className="font-semibold text-cyan-300">Model:</span>{" "}
                        {item.model}
                    </li>
                    <li>
                        <span className="font-semibold text-cyan-300">Maker:</span>{" "}
                        {item.manufacturer}
                    </li>
                    <li>
                        <span className="font-semibold text-cyan-300">Cost:</span>{" "}
                        {item.cost_in_credits} {" credits"}
                    </li>
                    </ul>
                )}

                {type === "planets" && (
                    <ul className="space-y-1">
                    <li>
                        <span className="font-semibold text-cyan-300">
                        Climate:
                        </span>{" "}
                        {item.climate}
                    </li>
                    <li>
                        <span className="font-semibold text-cyan-300">
                        Terrain:
                        </span>{" "}
                        {item.terrain}
                    </li>
                    <li>
                        <span className="font-semibold text-cyan-300">
                        Population:
                        </span>{" "}
                        {item.population}
                    </li>
                    </ul>
                )}
                </StarWarsCard>
            );
            })
        )}
        </div>
    </div>
    );

  return (
    <div className="container mx-auto py-4">
      {renderSection("Characters", store.characterList, "characters")}
      {renderSection("Vehicles", store.vehicleList, "vehicles")}
      {renderSection("Planets", store.planetList, "planets")}
    </div>
  );
};
