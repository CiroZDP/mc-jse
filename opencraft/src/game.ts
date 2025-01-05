import { Screen } from "./screens/screen.js";
import { Loadscreen } from "./screens/loadscreen.js";

var canvas: HTMLCanvasElement | null = null;
export var gl: WebGLRenderingContext | null = null;

const FPS_CAP = 60;
document.onload = main;

export var screen: Screen = new Loadscreen();

function loop() {
    if (!gl)
        return; // Skip tick if the context is not initialized

    screen.render();
}

function main() {
    canvas = document.getElementById("game-canvas") as HTMLCanvasElement;
    canvas.width = 1152;
    canvas.height = 648;

    if (!canvas) {
        console.error("Canvas element not found!");
        return;
    }

    gl = canvas.getContext("webgl");
    if (!gl) {
        console.error("Failed to get canvas webgl context!");
        return;
    }

    gl.viewport(0, 0, canvas.width, canvas.height);
    setInterval(loop, 1000 / FPS_CAP);
}

main();
