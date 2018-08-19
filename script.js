const GRID_SIZE = 50
// const TICKS_PER_MOVE = 10
// const PELLET_COUNT = 1
const COLORS = {
    // wall: '#F6B782',
    // pellets: '#C8553D',
    // GoodSquare: '#F28F3B',
    background: '#FFD5C2',
    grid: '#FFFFFF',
    // BulletSquare: '#588B8B',
}

const SHOW_GRID = true

// function isSamePos (pos, otherPos) {
//     return pos.x === otherPos.x && otherPos.y
// }

// function doesIntersectWithArray (pos, posArray) {
//     return posArray.some((otherPos) => isSamePos(pos, otherPos))
//     }

// function startGame () {
//     let game = new Game ('game-canvas')
//     game.start ()
// }

class Game {
    constructor (canvasId) {
        this.canvas = document.getElementById (canvasId)
        this.screen = this.canvas.getContext ('2d')
        this.size = { width: this.canvas.width, height: this.canvas.height }
        this.squares = { x: this.size.width / GRID_SIZE, y: this.size.height / GRID_SIZE }
        console.log ('canvas')
    }
}
//         this.ticks = 0
//         this.gameOver = false
//         this.bodies = []
//         // not sure if I need to show x and y coord.
//         this.GoodSquare = new GoodSquare (this, {
//             x: Math.floor(this.squares.x),
//             y: Math.floor(this.squares.y)})
//         //     x: Math.floor(this.squares.x / 2),
//         //     y: Math.floor(this.squares.y / 2)}, 1
//         // this.BulletSquare = []
//         this.pellets = []
//         let tick = () => {
//             this.ticks++
//             this.update()
//             this.draw()
//             if (!this.gameOver) {
//                 window.requestAnimationFrame(tick)
//             }
//         }
//         this.tick = tick
//         }
    
//         update () {
//             while (this.pellets.length < 1) {
//               this.placePellet()
//             }
        
//             this.GoodSquare.update(this.ticks)
        
//             this.checkGameOver()
//           }

//         draw () {
//             this.screen.clearRect(0, 0, this.size.width, this.size.height)
        
//             this.drawWall()
//             if (SHOW_GRID) {
//               this.drawGrid()
//             }
        
//             for (let pellet of this.pellets) {
//               pellet.draw()
//             }
//             this.GoodSquare.draw()
//             if (this.gameOver) {
//               this.drawGameOver()
//             }
//           }

//         start () {
//               this.tick()
//           }

//         // checkGameOver () {
//         //     if (this.isSamePos() || doesIntersectWithArray(this.GoodSquare.BulletSquare(), this.BulletSquare.GoodSquare())) {
//         //       this.gameOver = true
//         //     }
//         //   }
        
//         drawWall () {
//             this.screen.fillStyle = COLORS.wall
//             this.screen.fillRect(0, 0, this.size.width, this.size.height)
        
//             this.screen.fillStyle = COLORS.background
//             this.screen.fillRect(
//               GRID_SIZE,
//               GRID_SIZE,
//               (this.squares.x - 2) * GRID_SIZE,
//               (this.squares.y - 2) * GRID_SIZE)
//           }
        
//           drawGrid () {
//             this.screen.strokeStyle = COLORS.grid
//             this.screen.lineWidth = 1
//             this.screen.beginPath()
//             for (var x = 0; x < this.size.width; x += GRID_SIZE) {
//               this.screen.moveTo(x, 0)
//               this.screen.lineTo(x, this.size.height)
//             }
        
//             for (var y = 0; y < this.size.height; y += GRID_SIZE) {
//               this.screen.moveTo(0, y)
//               this.screen.lineTo(this.size.width, y)
//             }
        
//             this.screen.stroke()
//           }

//         //   drawGameOver () {
//         //     this.screen.textAlign = 'center'
//         //     this.screen.font = '48px Helvetica'
//         //     this.screen.fillStyle = COLORS.wall
//         //     this.screen.fillText('game over', this.size.width / 2, this.size.height / 2)
//         //   }

//         placePellet () {
//         let foundValidPos = false
//         let pos
//         while (!foundValidPos) {
//             pos = {
//                 x: Math.floor(Math.random() * (this.squares.x - 2)) + 1,
//                 y: Math.floor(Math.random() * (this.squares.y - 2)) + 1
//     }
//         // foundValidPos = !(doesIntersectWithArray(pos, this.GoodSquare) ||
//         //                 doesIntersectWithArray(pos, this.pellets))
//     }
//         this.pellets.push(new Pellet(this, pos))
//     }
// }
//     //lines 138-162
//     class GoodSquare {
//         constructor (game, pos) {
//             this.game = game
//             this.pos = []
//             this.x = pos.x
//             this.y = pos.y
//             this.pos.push({x: pos.x, y: pos.y})
//         }
        
//         update (ticks) {
//             // if (doesIntersectWithArray(this.pos[0], this.game.BulletSquare))
//             // this.game.removeBulletSquare(this.pos[0])
//         if (ticks % TICKS_PER_MOVE === 0) {
//             this.moveGoodSquare ()
//         }
//         }
//         draw () {
//             let context = this.game.context
//             this.context.fillStyle = COLORS.goodSquare
//             this.context.fillRect(
//                   this.x * GRID_SIZE,
//                   this.y * GRID_SIZE,
//                   GRID_SIZE, GRID_SIZE)
              
//         }
// }    

//     class BulletSquare {
//         constructor (game, pos) {
//           this.game = game
//           this.x = pos.x
//           this.y = pos.y
//         }
      
//         update () {
//         }
      
//         draw () {
//           this.game.context.fillStyle = COLORS.badSquares
//           this.game.context.fillRect(
//             this.x * GRID_SIZE,
//             this.y * GRID_SIZE,
//             GRID_SIZE, GRID_SIZE)
//         }
//       }
// let game = new Game ('game-canvas')
// game.start()
