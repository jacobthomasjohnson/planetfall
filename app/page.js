"use client";

import { useRef, useState } from "react";
import useGameStore from "./gameStore";
import Image from "next/image";
import Planet from "./components/Planet";

export default function Game() {
    const locations = useGameStore((state) => state.locations);
    const currentPlanet = useGameStore((state) => state.currentPlanet);
    const headerRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState(0);
    const [planetDetailsOpen, setPlanetDetailsOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const menuTop = headerRef.current ? headerRef.current.getBoundingClientRect().bottom + "px" : 0;
    const togglePlanetDetails = () => {
        closeOtherMenus();
        setPlanetDetailsOpen(!planetDetailsOpen);
    };
    const toggleMenu = () => {
        closeOtherMenus();
        setMenuOpen(!menuOpen);
    };
    const closeOtherMenus = () => {
        if (planetDetailsOpen) {
            setPlanetDetailsOpen(false);
        }
        if (menuOpen) {
            setMenuOpen(false);
        }
    };
    console.log(locations);
    return (
        <div className="h-full">
            <div className="flex flex-col">
                <div
                    ref={headerRef}
                    className="flex relative bg-background z-50 p-8 left-0 w-full justify-between"
                >
                    <div className="relative">PLANETFALL</div>
                    <Image
                        onClick={toggleMenu}
                        className="invert"
                        src="/menu.svg"
                        width={15}
                        height={15}
                        alt="Menu"
                    />
                </div>
                <div
                    style={{
                        top:
                            menuTop
                    }}
                    className={`fixed flex flex-col transition ease-snappy z-40 left-0 w-full bg-background ${
                        menuOpen ? "-translate-y-0" : "-translate-y-full"
                    }`}
                >
                    <div onClick={toggleMenu} className="p-8">&#9658; OPERATIONS</div>
                    <div onClick={toggleMenu} className="p-8">&#9658; POPULATION</div>
                    <div onClick={toggleMenu} className="p-8">&#9658; MINING</div>
                    <div onClick={toggleMenu} className="p-8">&#9658; FOOD GATHERING</div>
                    <div onClick={toggleMenu} className="p-8">&#9658; TRAVEL</div>
                </div>
                <div className="flex flex-col px-8">
                    <div className="flex justify-between detail-stat">
                        <div>SCRAPS</div>
                        <div>10000</div>
                    </div>
                    <div className="flex justify-between detail-stat">
                        <div>CORES</div>
                        <div>28</div>
                    </div>
                    <div className="flex justify-between detail-stat">
                        <div>ENERGY</div>
                        <div>277</div>
                    </div>
                </div>
                <div className="flex min-h-[50vh] w-full items-center justify-center">
                    <Planet planetId={currentPlanet.id} />
                </div>
            </div>
            <div className="flex flex-col fixed bottom-0 w-full left-0">
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
            </div>
            <div
                className={`fixed rounded-t-3xl border-b-0 border text-foreground bg-background min-h-[50%] left-0 transition-all ease-snappy  p-8 bottom-0 w-full ${
                    planetDetailsOpen
                        ? "translate-y-[0%]"
                        : "translate-y-[100%]"
                }`}
            >
                <div className="flex justify-between items-center">
                    <div>{currentPlanet.name}</div>
                    <div className="text-lg p-4 -m-4 hover:cursor-pointer">
                        <button onClick={togglePlanetDetails}>&#x2A09;</button>
                    </div>
                </div>
                <div className="flex my-6 flex-col justify-between">
                    <div className="flex justify-between detail-stat">
                        <div>Average Temperature</div>
                        <div>{currentPlanet.averageTemp}°F</div>
                    </div>
                    <div className="flex justify-between detail-stat">
                        <div>Food Availability</div>
                        <div>{currentPlanet.foodAvailability}%</div>
                    </div>
                    <div className="flex justify-between detail-stat">
                        <div>Food Quality</div>
                        <div>{currentPlanet.foodQuality}%</div>
                    </div>
                    <div className="flex justify-between detail-stat">
                        <div>Gravity</div>
                        <div>{currentPlanet.gravity}</div>
                    </div>
                    <div className="flex justify-between detail-stat">
                        <div>Atmospheric Toxicity</div>
                        <div>{currentPlanet.atmosphereToxicity}%</div>
                    </div>
                    <div className="flex justify-between detail-stat">
                        <div>Water Availability</div>
                        <div>{currentPlanet.waterAvailability}%</div>
                    </div>
                    <div className="flex justify-between detail-stat">
                        <div>Radiation Level</div>
                        <div>{currentPlanet.radiationLevel}%</div>
                    </div>
                    <div className="flex justify-between detail-stat">
                        <div>Mineral Richness</div>
                        <div>{currentPlanet.mineralRichness}%</div>
                    </div>
                    <div className="flex justify-between detail-stat">
                        <div>Soil Quality</div>
                        <div>{currentPlanet.soilQuality}%</div>
                    </div>
                    <div className="flex justify-between detail-stat">
                        <div>Hostile Lifeforms</div>
                        <div>{currentPlanet.hostileLifeforms}%</div>
                    </div>
                    <div className="flex justify-between detail-stat">
                        <div>Population Capacity</div>
                        <div>{currentPlanet.populationCapacity} BILLION</div>
                    </div>
                </div>
            </div>

            {/* {locations.map((location) => (
                <div key={location.id}>{location.name}</div>
            ))} */}
        </div>
    );
}
