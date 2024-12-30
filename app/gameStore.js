import { create } from "zustand";

import { locations } from "./data/locations";

const useGameStore = create((set, get) => ({
    locations,

    gameRunning: false,
    currentPlanet: locations[1],
}));

export default useGameStore;
