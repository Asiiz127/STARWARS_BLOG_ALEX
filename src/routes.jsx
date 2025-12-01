import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Character } from "./pages/Character";
import { Vehicle } from "./pages/Vehicle";
import { Planet } from "./pages/Planet";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="character" element={<Character />} />
            <Route path="vehicle" element={<Vehicle />} />
            <Route path="planet" element={<Planet />} />
        </Route>
    )
);
