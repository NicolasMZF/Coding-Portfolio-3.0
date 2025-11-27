import { useEffect } from "react";

export default function StarrySky(){
    useEffect(() => {
        function createStars(numStars){
            const svg = document.getElementById("starrySky");
            if (!svg) return;

            for (let i = 0; i < numStars; i++) {
                const star = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                const x = Math.random() * 100;
                const y = Math.random() * 100;
                const radius = Math.random() * 2 + 0.5;

                star.setAttribute("cx", `${x}%`);
                star.setAttribute("cy", `${y}%`);
                star.setAttribute("r", radius);
                star.setAttribute("fill", "white");

                svg.appendChild(star);
            }
        }

        createStars(300);
    }, []);

    return(
        <div className="starrySky">
            <svg id="starrySky" width="100" height="100" />
        </div>
    );
}