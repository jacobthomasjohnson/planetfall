import { useEffect, useRef, useState } from "react";
import useGameStore from "../gameStore";

export const Planet = ({ planetId }) => {
      const locations = useGameStore((state) => state.locations);

      const chanceOfEvent = 10; // 10% chance of event happening.

      const currentPlanet = locations.find(
            (location) => location.id === planetId
      );

      const [mouseOver, setMouseOver] = useState(false);
      const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

      const planetAnimContainerRef = useRef(null);

      useEffect(() => {
            document.addEventListener("mousemove", (e) => {
                  setMousePos({
                        x: e.clientX,
                        y: e.clientY,
                  });
            });

            return () => {
                  document.removeEventListener("mousemove");
            };
      }, []);

      const request = () => {
            let result;
            const eventHappens = () => {
                  if (Math.floor(Math.random() * 100) + 1 < chanceOfEvent) {
                        result = true;
                  } else {
                        result = false;
                  }
                  return result;
            };
            const event = eventHappens();
            const uniqueAnimDiv = document.createElement("div");
            uniqueAnimDiv.id = `planet-anim-${
                  Math.floor(Math.random() * 1000000000000) + 10000000
            }`;
            uniqueAnimDiv.style.animationDuration = "500ms";
            uniqueAnimDiv.style.animationFillMode = "forward";
            uniqueAnimDiv.style.animationIterationCount = "1";
            uniqueAnimDiv.style.width = "100%";
            uniqueAnimDiv.style.height = "100%";
            uniqueAnimDiv.style.position = "absolute";
            uniqueAnimDiv.style.top = "0";
            uniqueAnimDiv.style.left = "0";
            uniqueAnimDiv.style.zIndex = "60";
            if (event) {
                  uniqueAnimDiv.style.animationName = "event";
            } else {
                  uniqueAnimDiv.style.animationName = "no-event";
            }
            planetAnimContainerRef.current.appendChild(uniqueAnimDiv);
            setTimeout(() => {
                  uniqueAnimDiv.remove();
            }, 500);
            console.log(eventHappens());
      };

      if (!currentPlanet) {
            return <div>Planet not found</div>;
      }

      const size = `${currentPlanet.size}%`;

      return (
            <div className="planet-container">
                  <div
                        className={`border overflow-hidden relative rounded-full hover:transition-colors duration-75 ease-snappy`}
                        style={{
                              borderColor: currentPlanet.color,
                              width: size,
                              aspectRatio: "1 / 1",
                              transition: "background-color 75ms ease-out", // Smooth transition
                        }}
                        onClick={request}
                        onMouseEnter={(e) => {
                              setMouseOver(true);
                              e.target.style.backgroundColor =
                                    currentPlanet.color;
                        }}
                        onMouseLeave={(e) => {
                              setMouseOver(false);
                              e.target.style.backgroundColor = "transparent";
                        }}
                  >
                        <div
                              className="w-full h-full absolute pointer-events-none planet-anim-container"
                              ref={planetAnimContainerRef}
                        ></div>
                        <div
                              className="fixed top-0 left-0 pointer-events-none bg-foreground text-background p-4 rounded-xl transition-opacity duration-75"
                              style={{
                                    zIndex: 99,
                                    transform: `translate(${
                                          mousePos.x + 20
                                    }px, ${mousePos.y + 20}px)`,
                                    opacity: mouseOver ? "100%" : "0%",
                              }}
                        >
                              {currentPlanet.name}
                        </div>
                  </div>
            </div>
      );
};

export default Planet;
