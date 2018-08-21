import Keyboarder from './Keyboarder';
import { COLORS, GRID_SIZE } from './constants';
import { doesIntersectWithArray } from './collision';

class BulletSquare {
  constructor (game, pos) {
    this.game = game
    this.x = pos.width.x
    this.y = pos.height.y }

  update () {}

  draw () {
    this.bodies.forEach(function(bodies){
   bodies.draw()
    }
  }
export default BulletSquare