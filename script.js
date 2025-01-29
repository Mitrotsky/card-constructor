import * as PIXI from "./pixi.mjs";


const app = new PIXI.Application();
await app.init({
    width: 1920,
    height: 1080,
    background: "#161218",
    useBackBuffer: true,
    autoDensity: true,
}); // #A5C5B5
document.body.appendChild(app.canvas);
