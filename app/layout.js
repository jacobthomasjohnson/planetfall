"use client";

import { useEffect, useRef, useState } from "react";
import "./globals.css";
import useGameStore from "./gameStore";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Stats from "./components/Stats";
import PlanetDetails from "./components/PlanetDetails";

export default function RootLayout({ children }) {
    const currentPlanet = useGameStore((state) => state.currentPlanet);
    const headerRef = useRef(null);
    const statsRef = useRef(null);
    const footerRef = useRef(null);

    const [planetDetailsOpen, setPlanetDetailsOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [headerBottom, setHeaderBottom] = useState(0);
    const [bottomOfStats, setBottomOfStats] = useState(0);
    const [footerTop, setFooterTop] = useState(0);
    const [mainContentHeight, setMainContentHeight] = useState(0);

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

    useEffect(() => {
        const updateDimensions = () => {
            if (headerRef.current) {
                setHeaderBottom(
                    headerRef.current.getBoundingClientRect().bottom
                );
                console.log(headerBottom);
            }
            if (statsRef.current) {
                setBottomOfStats(
                    statsRef.current.getBoundingClientRect().bottom
                );
            }

            if (footerRef.current) {
                setFooterTop(footerRef.current.getBoundingClientRect().top);
            }
            if (statsRef.current && footerRef.current) {
                setMainContentHeight(
                    footerRef.current.getBoundingClientRect().top -
                        statsRef.current.getBoundingClientRect().bottom
                );
            }
        };

        updateDimensions();

        window.addEventListener("resize", updateDimensions);
        return () => {
            window.removeEventListener("resize", updateDimensions);
        };
    }, []);

    return (
        <html>
            <body>
                <div className="h-full">
                    <Header
                        ref={headerRef}
                        toggle={toggleMenu}
                        menuOpen={menuOpen}
                        closeOtherMenus={closeOtherMenus}
                    />
                    <Menu
                        headerBottom={headerBottom}
                        menuOpen={menuOpen}
                        toggleMenu={toggleMenu}
                    />
                    <Stats ref={statsRef} />
                    <div
                        style={{
                            maxHeight: `${mainContentHeight}px`,
                        }}
                    >
                        {children}
                    </div>
                    <footer
                        ref={footerRef}
                        className="bg-background z-30 absolute bottom-0 w-full"
                    >
                        <div className="px-6">
                            <div className="py-4 text-center border-b rounded-xl border-dashed border-gray">
                                PLANET STATUS
                            </div>
                            <div className="py-2 my-4 bg-red rounded-xl text-background text-center">
                                UNINHABITABLE
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <div className="p-8">
                                Current: {currentPlanet.name}
                            </div>
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
            </body>
        </html>
    );
}
