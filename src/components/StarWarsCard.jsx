import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import { FavoritesContext } from "../hooks/FavoritesContext.jsx";
import { use } from "react";


export function StarWarsCard({ title, imgURL, children }) {
  const { setFavorites } = use(FavoritesContext);

  const handleAdd = () => {
    setFavorites({ title, imgURL });
  };



  return (
    <Card className="mt-6 w-96 border border-gray-300 shadow-sm overflow-hidden flex flex-col">
      <CardHeader
        color="blue-gray"
        className="relative h-56 m-0 w-full rounded-none shadow-none shrink-0"
      >
        <img
          src={imgURL}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>

      <CardBody className="flex-1">
          {title} {/* Título dinámico */}
          {children}
      </CardBody>

      <CardFooter className="pt-0 flex justify-between shrink-0">
        <Button>Read More</Button>
        {/* Botón con el evento onClick */}
        <Button
          onClick={handleAdd}
          className="flex items-center gap-2 hover:bg-red-600"
        >
          <span>Add to Favorites</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M20.381 6.06759C18.1553 3.19885 13.7697 3.5573 12 6.62866C10.2303 3.55729 5.84473 3.19885 3.61898 6.06759L3.30962 6.46632C1.42724 8.8925 1.69903 12.3524 3.93717 14.4548L10.9074 21.0026C11.0115 21.1005 11.1254 21.2075 11.2327 21.2902C11.3562 21.3853 11.5288 21.4954 11.7593 21.5406C11.9182 21.5718 12.0818 21.5718 12.2407 21.5406C12.4712 21.4954 12.6438 21.3853 12.7673 21.2902C12.8747 21.2075 12.9885 21.1005 13.0927 21.0026L20.0628 14.4548C22.301 12.3524 22.5728 8.89249 20.6904 6.46631L20.381 6.06759Z"
              fill="#770000"
            />
          </svg>
        </Button>
      </CardFooter>
    </Card>
  );
}
