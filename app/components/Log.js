import { useEffect, useRef } from "react";
import useGameStore from "../gameStore";

export const Log = () => {
    const logs = useGameStore((state) => state.logs);
    const generateUniqueID = useGameStore((state) => state.generateUniqueID);
    const logContainer = useRef(null);
    useEffect(() => {
        if (logContainer.current) {
            const div = document.createElement("div");
            div.id = `log-item-${generateUniqueID()}`;
            div.innerHTML = logs[logs.length - 1];
            logContainer.current.prepend(div);
        }
    }, [logs]);
    return <div className="px-8 flex flex-col border" ref={logContainer}></div>;
};

export default Log;
