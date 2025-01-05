import { gl } from '../game.js';
var Loadscreen = /** @class */ (function () {
    function Loadscreen() {
    }
    Loadscreen.prototype.render = function () {
        gl.clearColor(1, 1, 1, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);
    };
    return Loadscreen;
}());
export { Loadscreen };
