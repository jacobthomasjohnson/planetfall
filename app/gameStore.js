import { create } from "zustand";

import { locations } from "./data/locations";

const useGameStore = create((set, get) => ({
    locations,
    gameRunning: false,
    level: 1,
    currentPlanet: locations[1],
    usedIds: [],

    logs: [],

    addLog: (text) => {
      set((state) => {
            return {
                  ...state,
                  logs: [
                        ...state.logs,
                        text,
                  ]
            }
      })
    },

    generateUniqueID: () => {
        let newID;
        const usedIds = get().usedIds;
        do {
            newID = Math.floor(10000000 + Math.random() * 90000000);
        } while (usedIds.includes(newID));
        set((state) => ({
            usedIds: [...state.usedIds, newID],
        }));
        return newID;
    },
}));

export default useGameStore;
