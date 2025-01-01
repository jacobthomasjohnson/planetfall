"use client";

import Page from "../components/Page";
import useGameStore from "../gameStore";

export const Operations = () => {
    const currentPlanet = useGameStore((state) => state.currentPlanet);
    return <Page></Page>;
};

export default Operations;
