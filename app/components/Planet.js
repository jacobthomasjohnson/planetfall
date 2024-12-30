import { useEffect, useState } from "react";
import useGameStore from "../gameStore";

export const Planet = ({ planetId }) => {
    const locations = useGameStore((state) => state.locations);

    const currentPlanet = locations.find(
        (location) => location.id === planetId
    );

    const [mouseOver, setMouseOver] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {

    }, [mouseOver]);

    useEffect(() => {
      document.addEventListener('mousemove', (e) => {
            setMousePos({
                  x: e.clientX,
                  y: e.clientY
            })
      });

      return () => {
            document.removeEventListener('mousemove');
      }
    }, []);

    if (!currentPlanet) {
        return <div>Planet not found</div>;
    }

    const size = `${currentPlanet.size}%`;

    return (
        <div
            className={`border rounded-full hover:transition-colors ease-snappy`}
            style={{
                borderColor: currentPlanet.color,
                width: size,
                aspectRatio: "1 / 1",
                transition: "background-color 1s ease-out", // Smooth transition
            }}
            onMouseEnter={(e) => {
                setMouseOver(true);
                e.target.style.backgroundColor = currentPlanet.color;
            }}
            onMouseLeave={(e) => {
                setMouseOver(false);
                e.target.style.backgroundColor = "transparent";
            }}
        >
            <div className="fixed top-0 left-0 pointer-events-none" style={{
                  transform: `translate(${mousePos.x + 20}px, ${mousePos.y + 20}px)`,
                  opacity: mouseOver ? "100%" : "0%",
            }}>{currentPlanet.name}</div>
        </div>
    );
};

export default Planet;
