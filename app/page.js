"use client";

import { useRef, useState } from "react";
import useGameStore from "./gameStore";
import Image from "next/image";
import Header from "./components/Header";
import Planet from "./components/Planet";
import Menu from "./components/Menu";
import Stats from "./components/Stats";
import Log from "./components/Log";
import PlanetDetails from "./components/PlanetDetails";

export default function Game() {
    const locations = useGameStore((state) => state.locations);
    const currentPlanet = useGameStore((state) => state.currentPlanet);
    const headerRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState(0);
    const [planetDetailsOpen, setPlanetDetailsOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const footerRef = useRef(null);
    const menuTop = headerRef.current
        ? headerRef.current.getBoundingClientRect().bottom - 1 + "px"
        : 0;
    const togglePlanetDetails = () => {
        closeOtherMenus();
        setPlanetDetailsOpen(!planetDetailsOpen);
    };
    const toggleMenu = () => {
        closeOtherMenus();
        setMenuOpen(!menuOpen);
    };
    const closeOtherMenus = () => {
        setPlanetDetailsOpen(false);
        setMenuOpen(false);
    };
    return (
        <div className="h-full">
            <div className="flex flex-col">
                <Header
                    ref={headerRef}
                    toggle={toggleMenu}
                    menuOpen={menuOpen}
                />
                <Menu
                    menuTop={menuTop}
                    menuOpen={menuOpen}
                    toggleMenu={toggleMenu}
                />
                <Stats />
            </div>
            <Planet planetId={currentPlanet.id} />
            <Log />
            <footer ref={footerRef} className="footer bg-background z-30">
                <div className="flex justify-between">
                    <div className="p-8">Current: {currentPlanet.name}</div>
                    <div className="p-8">
                        <button
                            onClick={togglePlanetDetails}
                            className="p-4 -m-4 border rounded-xl"
                        >
                            PLANET DETAILS
                        </button>
                    </div>
                </div>
            </footer>
            <PlanetDetails
                currentPlanet={currentPlanet}
                togglePlanetDetails={togglePlanetDetails}
                planetDetailsOpen={planetDetailsOpen}
            />
        </div>
    );
}
