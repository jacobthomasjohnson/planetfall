"use client";

import Page from "../components/Page";
import useGameStore from "../gameStore";

export const Stats = () => {
    const currentPlanet = useGameStore((state) => state.currentPlanet);
    return <Page></Page>;
};

export default Stats;
