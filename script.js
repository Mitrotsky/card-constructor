import * as PIXI from "./pixi.mjs";


const app = new PIXI.Application();
await app.init({
    width: 192,
    height: 108,
    background: "#161218",
    useBackBuffer: true,
    autoDensity: true,
}); // #A5C5B5
document.body.appendChild(app.canvas);

const circle = new PIXI.Graphics().circle(app.screen.width / 2, app.screen.height / 2, 40).fill(0xFF0000);
app.stage.addChild(circle);
