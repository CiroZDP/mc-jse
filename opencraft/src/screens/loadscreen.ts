import { gl } from '../game.js';
import { Screen } from './screen.js';

export class Loadscreen implements Screen {

    render()
    {
        gl!.clearColor(1, 1, 1, 1);
        gl!.clear(gl!.COLOR_BUFFER_BIT);

    }

}
