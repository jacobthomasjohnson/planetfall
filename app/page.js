"use client";

import Page from "./components/Page";
import Planet from "./components/Planet";
import Log from "./components/Log";
import useGameStore from "./gameStore";

export const Game = () => {
    const currentPlanet = useGameStore((state) => state.currentPlanet);
    return (
        <div className="h-full">
            <Planet planetId={currentPlanet.id} />
            <Log />
        </div>
    );
};

export default Game;
