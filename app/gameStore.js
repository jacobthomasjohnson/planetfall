import { create } from "zustand";

import { locations } from "./data/locations";

const useGameStore = create((set, get) => ({
    locations,

    gameRunning: false,
    level: 1,
    currentPlanet: locations[1],
}));

export default useGameStore;
