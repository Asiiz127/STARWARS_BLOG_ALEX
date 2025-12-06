import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { CharacterDetails } from "./pages/CharacterDetails";
import { VehicleDetails } from "./pages/VehicleDetails";
import { PlanetDetails } from "./pages/PlanetDetails";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/character/:uid" element={<CharacterDetails />} />
      <Route path="/vehicle/:uid" element={<VehicleDetails />} />
      <Route path="/planet/:uid" element={<PlanetDetails />} />
    </Route>
  )
);
