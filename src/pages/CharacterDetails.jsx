import { useParams } from "react-router-dom";
import { useFavorites } from "../hooks/FavoritesContext";
import placeholderImg from "../assets/img/placeHolder.png";

export const CharacterDetails = () => {
  const { uid } = useParams();
  const { store } = useFavorites();

  const character = store.characterList.find((item) => {
    const parts = item.url.split("/").filter(Boolean);
    const id = parts[parts.length - 1];
    return id === uid;
  });

  if (!character) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-slate-200">
        Loading character...
      </div>
    );
  }

  const {
    name,
    height,
    mass,
    gender,
    birth_year,
    hair_color,
    skin_color,
    eye_color,
  } = character;

  const randomPlaceholderUrl = `https://picsum.photos/800/600?seed=${uid}`;
  const imgURL = randomPlaceholderUrl;

  return (
    <div className="min-h-[80vh] px-6 py-10 lg:px-16">
      <div
        className="mx-auto max-w-5xl rounded-2xl overflow-hidden
                   bg-gradient-to-b from-black via-slate-950 to-black
                   border border-slate-800/70
                   shadow-[0_0_40px_rgba(15,23,42,0.9)]"
      >
        {/* Zona superior: imagen + texto principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Imagen */}
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
            <span
              className="absolute top-0 left-0 right-0 h-[2px]
                         bg-gradient-to-r from-transparent via-cyan-300 to-transparent
                         opacity-70"
            />
          </div>

          {/* Texto principal */}
          <div className="p-6 lg:p-8 text-slate-100">
            <h1 className="text-2xl lg:text-3xl font-semibold tracking-[0.22em] text-cyan-200 uppercase">
              {name}
            </h1>
            <div
              className="mt-3 mb-5 h-px w-full bg-gradient-to-r
                         from-transparent via-slate-700 to-transparent"
            />
            <p className="text-sm lg:text-base text-slate-300 leading-relaxed">
              Luke Skywalker–style description placeholder. Aquí podrías poner
              un texto más largo sacado de otra API o escrito a mano para cada
              personaje si quieres personalizar la ficha.
            </p>
          </div>
        </div>

        {/* Zona inferior: grid de datos */}
        <div className="px-6 lg:px-8 py-6 bg-gradient-to-r from-black via-slate-950 to-black">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-xs lg:text-sm text-slate-200">
            <div>
              <h3 className="text-cyan-300 font-semibold mb-1 tracking-[0.16em] uppercase">
                Height
              </h3>
              <p>{height} cm</p>
            </div>
            <div>
              <h3 className="text-cyan-300 font-semibold mb-1 tracking-[0.16em] uppercase">
                Mass
              </h3>
              <p>{mass} kg</p>
            </div>
            <div>
              <h3 className="text-cyan-300 font-semibold mb-1 tracking-[0.16em] uppercase">
                Gender
              </h3>
              <p className="capitalize">{gender}</p>
            </div>
            <div>
              <h3 className="text-cyan-300 font-semibold mb-1 tracking-[0.16em] uppercase">
                Birth year
              </h3>
              <p>{birth_year}</p>
            </div>
            <div>
              <h3 className="text-cyan-300 font-semibold mb-1 tracking-[0.16em] uppercase">
                Hair
              </h3>
              <p className="capitalize">{hair_color}</p>
            </div>
            <div>
              <h3 className="text-cyan-300 font-semibold mb-1 tracking-[0.16em] uppercase">
                Skin
              </h3>
              <p className="capitalize">{skin_color}</p>
            </div>
            <div>
              <h3 className="text-cyan-300 font-semibold mb-1 tracking-[0.16em] uppercase">
                Eyes
              </h3>
              <p className="capitalize">{eye_color}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
