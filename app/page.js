"use client";

import { useEffect, useRef, useState } from "react";
import useGameStore from "./gameStore";
import Image from "next/image";
import Header from "./components/Header";
import Planet from "./components/Planet";
import Menu from "./components/Menu";
import Stats from "./components/Stats";
import Log from "./components/Log";
import PlanetDetails from "./components/PlanetDetails";
import Page from "./components/Page";

export default function Game() {
    const locations = useGameStore((state) => state.locations);
    const currentPage = useGameStore((state) => state.currentPage);
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
    useEffect(() => {}, [currentPage]);
    return (
        <div className="h-full">
            <Header
                ref={headerRef}
                toggle={toggleMenu}
                menuOpen={menuOpen}
                closeOtherMenus={closeOtherMenus}
            />
            <Menu
                menuTop={menuTop}
                menuOpen={menuOpen}
                toggleMenu={toggleMenu}
            />

            {currentPage === "game" && (
                <Page>
                    <Stats />
                    <Planet planetId={currentPlanet.id} />
                    <Log />
                </Page>
            )}

            {currentPage === "operations" && (
                <Page>
                    <Stats />
                    <div className="flex flex-col p-8">
                        <div className="p-4 bg-teal text-background rounded-xl">Operations for {currentPlanet.name}</div>
                        <div></div>
                    </div>
                </Page>
            )}

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
