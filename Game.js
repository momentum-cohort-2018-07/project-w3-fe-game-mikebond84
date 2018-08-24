import Player from './Player'
import { GRID_SIZE, SHOW_GRID } from './constants'
import { doesIntersectWithArray, isSamePos } from './collision'

class Game {
  constructor () {
    this.canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    context.gameSize = {x: canvas.width.x, y: canvas.height.y}; 
    context.fillRect(0, 0, canvas.width.x, canvas.height.y);
    context.fillStyle = '#F28F3B';
    context.screenSize = {
          x: this.canvas.width,
          y: this.canvas.height,
        };
        this.gameSize = { 
        x: canvas.width.x, 
        y: canvas.height.y};
        this.bodies = [];
        this.gameOver = false;
        // not sure if I need to show x and y coord.
        this.Player = new Player (this, {
        //     // x: Math.floor(this.x),
        //     // y: Math.floor(this.y)})
            x: Math.floor(this.squares.x / 2),
            y: Math.floor(this.squares.y / 2)});     
    }
    tick () {
        const tick = () => {
            this.update();
            this.draw(screen, gameSize);
            window.requestAnimationFrame(tick);
            }
        }

  draw (screen, gameSize)
  Game.clearRect( 0, 0, this.gameSize.x, this.gameSize.y )
    for (let i = 0; i < this.bodies.length; i++) {
        drawRect(screen, this.bodies[i])
      }

                  
            
  
  update (){
}



export default Game