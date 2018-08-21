import Keyboarder from './Keyboarder'
import {GRID_SIZE, TICKS_PER_MOVE, COLORS} from './constants'
import { doesIntersectWithArray } from './collision'

class Player {
  constructor (game, pos) {
    this.keyboarder = new Keyboarder()
    this.game = game
    this.pos = ({x: pos.width.x, y: pos.height.y})
    this.fillStyle = COLORS.Player
    this.context.fillRect(
      this.x * GRID_SIZE,
      this.y * GRID_SIZE,
      GRID_SIZE, GRID_SIZE)
  }
  draw () {
    this.context.fillRect(this.center.x, this.center.y, this.playerSize.x, this.playerSize.y)
    this.context.fillStyle('#FFFFFF')
  }
  update () {
    if (this.keyboarder.isDown(Keyboarder.KEYS.LEFT)) {
      this.center.x -= 2
      if (this.center.x <= 0) this.center.x = 0
    }
    if (this.keyboarder.isDown(Keyboarder.KEYS.RIGHT)) {
      this.center.x += 2
      if (this.center.x >= 480) this.center.x = 480
    } else {
      if (doesIntersectWithArray(this.pos[0], this.game.BulletSquare))
        this.game.removeBulletSquare(this.pos)
        if (ticks % TICKS_PER_MOVE === 0) {
        this.movePlayer ()
            }      
        }
    }
export default Player