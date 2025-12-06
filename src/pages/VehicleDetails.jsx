import { useParams } from "react-router-dom";
import { useFavorites } from "../hooks/FavoritesContext";
import placeholderImg from "../assets/img/placeHolder.png";

export const VehicleDetails = () => {
  const { uid } = useParams();
  const { store } = useFavorites();

  const vehicle = store.vehicleList.find((item) => {
    const parts = item.url.split("/").filter(Boolean);
    const id = parts[parts.length - 1];
    return id === uid;
  });

  if (!vehicle) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-slate-200">
        Loading vehicle...
      </div>
    );
  }

  const {
    name,
    model,
    manufacturer,
    cost_in_credits,
    length,
    crew,
    passengers,
    max_atmosphering_speed,
    cargo_capacity,
    vehicle_class,
  } = vehicle;

  const imgURL = `https://picsum.photos/seed/vehicle-${uid}/800/600`;

  return (
    <div className="min-h-[80vh] px-6 py-10 lg:px-16">
      <div className="mx-auto max-w-5xl rounded-2xl overflow-hidden
                      bg-gradient-to-b from-black via-slate-950 to-black
                      border border-slate-800/70
                      shadow-[0_0_40px_rgba(15,23,42,0.9)]">
        {/* Top: imagen + texto */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-72 lg:h-full border-b lg:border-b-0 lg:border-r border-slate-800/70">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-cyan-500/10" />
            <img
              src={imgURL}
              alt={name}
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.src = placeholderImg;
                e.currentTarget.onerror = null;
              }}
            />
            <span className="absolute top-0 left-0 right-0 h-[2px]
                             bg-gradient-to-r from-transparent via-cyan-300 to-transparent
                             opacity-70" />
          </div>

          <div className="p-6 lg:p-8 text-slate-100">
            <h1 className="text-2xl lg:text-3xl font-semibold tracking-[0.22em] text-cyan-200 uppercase">
              {name}
            </h1>
            <div className="mt-2 mb-4 h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
            <p className="text-sm text-slate-300">
              Model: <span className="font-semibold text-cyan-200">{model}</span>
            </p>
            <p className="text-sm text-slate-300 mt-1">
              Class: <span className="font-semibold text-cyan-200 capitalize">{vehicle_class}</span>
            </p>
            <p className="text-sm text-slate-400 mt-4 leading-relaxed">
              Vehicle description placeholder. Aquí podrías añadir una descripción
              más narrativa sacada de otra fuente o escrita a mano.
            </p>
          </div>
        </div>

        {/* Bottom: grid de stats */}
        <div className="px-6 lg:px-8 py-6 bg-gradient-to-r from-black via-slate-950 to-black">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-xs lg:text-sm text-slate-200">
            <div>
              <h3 className="text-cyan-300 font-semibold mb-1 tracking-[0.16em] uppercase">Manufacturer</h3>
              <p>{manufacturer}</p>
            </div>
            <div>
              <h3 className="text-cyan-300 font-semibold mb-1 tracking-[0.16em] uppercase">Cost</h3>
              <p>{cost_in_credits} credits</p>
            </div>
            <div>
              <h3 className="text-cyan-300 font-semibold mb-1 tracking-[0.16em] uppercase">Length</h3>
              <p>{length} m</p>
            </div>
            <div>
              <h3 className="text-cyan-300 font-semibold mb-1 tracking-[0.16em] uppercase">Max speed</h3>
              <p>{max_atmosphering_speed} km/h</p>
            </div>
            <div>
              <h3 className="text-cyan-300 font-semibold mb-1 tracking-[0.16em] uppercase">Crew</h3>
              <p>{crew}</p>
            </div>
            <div>
              <h3 className="text-cyan-300 font-semibold mb-1 tracking-[0.16em] uppercase">Passengers</h3>
              <p>{passengers}</p>
            </div>
            <div>
              <h3 className="text-cyan-300 font-semibold mb-1 tracking-[0.16em] uppercase">Cargo</h3>
              <p>{cargo_capacity} kg</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};