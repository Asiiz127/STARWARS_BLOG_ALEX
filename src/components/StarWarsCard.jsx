import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import { useFavorites } from "../hooks/FavoritesContext";
import { Link } from "react-router-dom";
import placeholderImg from "../assets/img/placeHolder.png";

export function StarWarsCard({ title, imgURL, uid, children, type }) {
  const { store, actions } = useFavorites();
  const isFavorite = store.FavoritesList.includes(title);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      actions.removeFavorite(title);
    } else {
      actions.addFavorite(title);
    }
  };
  let routeBase = "/details";
  if (type === "characters") routeBase = "/character";
  if (type === "vehicles") routeBase = "/vehicle";
  if (type === "planets") routeBase = "/planet";
  const PLACEHOLDER_IMG = placeholderImg;
  const randomPlaceholderUrl = `https://picsum.photos/400/400?random=${uid}`;

  return (
    <Card
      className="mt-6 w-[15rem] md:w-[18rem] lg:w-[20rem] shrink-0
             bg-gradient-to-b from-black via-slate-950 to-black
             border border-slate-800/70
             shadow-[0_0_25px_rgba(15,23,42,0.9)]
             rounded-xl overflow-hidden flex flex-col"
    >
      <CardHeader
        floated={false}
        shadow={false}
        className="relative h-64 m-0 w-full rounded-none
               border-b border-slate-800/70
               bg-gradient-to-b from-slate-900 via-black to-black
               overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-cyan-500/10" />
        <img
          src={imgURL || randomPlaceholderUrl}
          alt={title}
          className="h-full w-full object-cover"
          onError={(e) => {
            if (e.currentTarget.src !== randomPlaceholderUrl) {
              e.currentTarget.src = randomPlaceholderUrl;
            } else {
              e.currentTarget.src = PLACEHOLDER_IMG;
              e.currentTarget.onerror = null;
            }
          }}
        />
        {/* línea luminosa superior tipo HUD */}
        <span
          className="absolute top-0 left-0 right-0 h-[2px]
                     bg-gradient-to-r from-transparent via-cyan-300 to-transparent
                     opacity-70"
        />
      </CardHeader>
      <CardBody
        className="flex-1 bg-gradient-to-b from-black/80 via-slate-950/95 to-black
               text-slate-100 px-4 py-4
               backdrop-blur-sm border-t border-b border-slate-800/60"
      >
        <h5
          className="mb-2 text-lg font-semibold tracking-[0.18em]
                   text-cyan-200 uppercase"
        >
          {title}
        </h5>
        <div
          className="h-px w-full bg-gradient-to-r
                    from-transparent via-slate-700 to-transparent mb-3"
        />
        <div className="text-xs text-slate-300 leading-relaxed">{children}</div>
      </CardBody>
      <CardFooter className="pt-0 flex justify-between items-center mt-5 gap-3 shrink-0 bg-gradient-to-r from-black via-slate-950 to-black border-slate-800/70">
        {/* Botón Rebel (Read More) */}
        <Link to={`${routeBase}/${uid}`} className="group">
          <Button
            ripple={false}
            variant="gradient"
            color="blue"
            className="relative overflow-hidden from-[#003DA5] to-blue-600 text-white
                 uppercase tracking-[0.25em] text-[0.65rem] py-2.5 px-4
                 rounded-full shadow-[0_0_20px_rgba(56,189,248,0.65)]
                 hover:shadow-[0_0_30px_rgba(56,189,248,0.95)]
                 hover:scale-[1.04] active:scale-100 transition-transform duration-200
                 border border-cyan-300/50
                 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_10%_0%,rgba(248,250,252,0.35),transparent_55%)]
                 before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-200"
          >
            <span className="relative flex items-center gap-2">
              <span className="h-px w-4 bg-cyan-300/80 shadow-[0_0_8px_rgba(125,211,252,1)]" />
              <span className="font-semibold tracking-[0.3em]">Read More</span>
              <span className="h-px w-4 bg-cyan-300/80 shadow-[0_0_8px_rgba(125,211,252,1)]" />
            </span>
          </Button>
        </Link>
        {/* Botón Sith (Favorites) */}
        <Button
          onClick={handleFavoriteClick}
          variant="outlined"
          color="red"
          className={`relative inline-flex items-center justify-center
              rounded-full border-2
              text-[0.65rem] uppercase tracking-[0.25em]
              py-3 px-6 transition-all duration-200
              ${
                isFavorite
                  ? "bg-[#A50000] border-[#A50000] text-white shadow-[0_0_20px_rgba(248,113,113,0.9)] hover:bg-red-700 hover:border-red-700 hover:shadow-[0_0_30px_rgba(248,113,113,1)]"
                  : "bg-transparent border-[#A50000] text-[#A50000] hover:bg-[#A50000] hover:text-white hover:shadow-[0_0_22px_rgba(248,113,113,0.9)]"
              }`}
        >
          <span className="relative inline-flex items-center justify-center gap-2">
            <span className="whitespace-nowrap">
              {isFavorite ? "Remove" : "Add to "}
            </span>
            {/* Glow del corazón */}
            <span className="relative inline-flex items-center justify-center">
              <span
                className={`pointer-events-none absolute inset-0 rounded-full blur-md transition-opacity duration-200 ${
                  isFavorite ? "opacity-80 bg-red-500/70" : "opacity-0"
                }`}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className="relative"
                fill={isFavorite ? "#ef4444" : "none"}
                stroke={isFavorite ? "#fecaca" : "#A50000"}
                strokeWidth="1.7"
              >
                <path d="M20.381 6.06759C18.1553 3.19885 13.7697 3.5573 12 6.62866C10.2303 3.55729 5.84473 3.19885 3.61898 6.06759L3.30962 6.46632C1.42724 8.8925 1.69903 12.3524 3.93717 14.4548L10.9074 21.0026C11.0115 21.1005 11.1254 21.2075 11.2327 21.2902C11.3562 21.3853 11.5288 21.4954 11.7593 21.5406C11.9182 21.5718 12.0818 21.5718 12.2407 21.5406C12.4712 21.4954 12.6438 21.3853 12.7673 21.2902C12.8747 21.2075 12.9885 21.1005 13.0927 21.0026L20.0628 14.4548C22.301 12.3524 22.5728 8.89249 20.6904 6.46631L20.381 6.06759Z" />
              </svg>
            </span>
          </span>
        </Button>
      </CardFooter>
    </Card>
  );
}
