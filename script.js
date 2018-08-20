const GRID_SIZE = 50
const TICKS_PER_MOVE = 10
const PELLET_COUNT = 1
const COLORS = {
    wall: '#F6B782',
    pellets: '#C8553D',
    GoodSquare: '#F28F3B',
    background: '#FFD5C2',
    grid: '#FFFFFF',
    BulletSquare: '#588B8B',
    fillStyle: 'green',
}

const SHOW_GRID = true

function isSamePos (pos, otherPos) {
    return pos.x === otherPos.x && otherPos.y
}

function doesIntersectWithArray (pos, posArray) {
    return posArray.some((otherPos) => isSamePos(pos, otherPos))
    }

class Game {
    constructor () {
    this.canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const gameSize = {x: canvas.width, y: canvas.height};
    context.gameSize = { x: canvas.width, y: canvas.height }
    this.bodies = []
    this.bodies = this.bodies.concat(new Player(this, gameSize))
    context.fillRect(50, 50, 50, 50);
    context.screenSize = {
          x: this.canvas.width,
          y: this.canvas.height,
        }
    this.gameSize = { 
        x: canvas.width, 
        y: canvas.height 
    }
        this.player = new Player(this)
        this.squares = { x: this.width / GRID_SIZE, y: this.height / GRID_SIZE }
        this.bodies = []
        this.gameOver = false
        // not sure if I need to show x and y coord.
        this.Player = new Player (this, {
        //     // x: Math.floor(this.x),
        //     // y: Math.floor(this.y)})
            x: Math.floor(this.squares.x / 2),
            y: Math.floor(this.squares.y / 2)})     
    }
    tick () {
        const tick = () => {
            this.update()
            this.draw(screen, gameSize)
            window.requestAnimationFrame(tick)
            }
        }
    //     this.tick = tick  
    // }
  draw (screen, gameSize) {
    screen.clearRect(0, 0, gameSize.x, gameSize.y)
    for (let i = 0; i < this.bodies.length; i++) {
        drawRect(screen, this.bodies[i])
      } 
    this.context.fillRect
    this.player.draw
    this.context.fillRect (50, 50, 50, 50)
    this.screen.clearRect(0, 0, this.size.width, this.size.height)
}
  drawWall() {
        if (SHOW_GRID) {
            this.drawGrid()
                    }
                
        for (let pellet of this.pellets) {
            pellet.draw()
                    }
            this.GoodSquare.draw()
            if (this.gameOver) {
            this.drawGameOver()
                    }
    this.player.draw()
  }
  
  update() {
    this.player.update()
    while (this.pellets.length < 1) {
        this.placePellet()
      }
    this.Player.update(this.ticks)
  }
  start () {
    this.ticks()
      }
  checkGameOver () {
            if (this.isSamePos() || doesIntersectWithArray(this.GoodSquare.BulletSquare(), this.BulletSquare.GoodSquare())) {
              this.gameOver = true
            }
            this.checkGameOver()
        }
        drawWall () {
            this.screen.fillStyle = COLORS.wall
            this.screen.fillRect(0, 0, this.size.width, this.size.height)
            this.screen.fillStyle = COLORS.background
            this.screen.fillRect(
              GRID_SIZE,
              GRID_SIZE,
              (this.squares.x - 2) * GRID_SIZE,
              (this.squares.y - 2) * GRID_SIZE)
          }
        
          drawGrid () {
            this.screen.strokeStyle = COLORS.grid
            this.screen.lineWidth = 1
            this.screen.beginPath()
            for (var x = 0; x < this.size.width; x += GRID_SIZE) {
              this.screen.moveTo(x, 0)
              this.screen.lineTo(x, this.size.height)
            }
        
            for (var y = 0; y < this.size.height; y += GRID_SIZE) {
              this.screen.moveTo(0, y)
              this.screen.lineTo(this.size.width, y)
            }
        
            this.screen.stroke()
          }

          drawGameOver () {
            this.screen.textAlign = 'center'
            this.screen.font = '48px Helvetica'
            this.screen.fillStyle = COLORS.wall
            this.screen.fillText('game over', this.size.width / 2, this.size.height / 2)
          }

        placePellet () {
        let foundValidPos = false
        let pos
        while (!foundValidPos) {
            pos = {
                x: Math.floor(Math.random() * (this.squares.x - 2)) + 1,
                y: Math.floor(Math.random() * (this.squares.y - 2)) + 1
    }
        foundValidPos = !(doesIntersectWithArray(pos, this.Player) ||
                        doesIntersectWithArray(pos, this.pellets))
    }
        this.pellets.push(new Pellet(this, pos))
    }

}

//     //lines 138-162
class Player {
    constructor(game) {
        this.center = {
          x: 50,
          y: 50
        }
        this.playerSize = {
          x: 20,
          y: 20
        }
        this.keyboarder = new Keyboarder()
        this.game = game
        console.log = ('hi')
      }
      draw() {
    
        this.context.fillRect(this.center.x, this.center.y, this.playerSize.x,
          this.playerSize.y)
      }
      update() {
        if (this.keyboarder.isDown(Keyboarder.KEYS.LEFT)) {
          this.center.x -= 2
          if (this.center.x <= 0) this.center.x = 0
        }
        if (this.keyboarder.isDown(Keyboarder.KEYS.RIGHT)) {
          this.center.x += 2
          if (this.center.x >= 480) this.center.x = 480
        }
      }

    // constructor (pos, game) {
    //     this.game = game
    //     this.pos = []
    //     this.x = pos.x
    //     this.y = pos.y
    //     this.pos.push({x: pos.x, y: pos.y})
    //             }
        
    // draw () {
    //     let context = this.game.context
    //     this.context.fillStyle = COLORS.goodSquare
    //     this.context.fillRect(
    //     this.x * GRID_SIZE,
    //     this.y * GRID_SIZE,
    //     GRID_SIZE, GRID_SIZE)
    //     context.fillStyle = COLORS.player
    //     context.fillRect(this.center.x, this.center.y, this.playerSize.x, this.playerSize.y)
    //             }

    // update (ticks) {
    //     if (doesIntersectWithArray(this.pos[0], this.game.BulletSquare))
    //     this.game.removeBulletSquare(this.pos[0])
    //     if (ticks % TICKS_PER_MOVE === 0) {
    //     this.movePlayer ()
    //         }      
    //     }
    }

    class BulletSquare {
        constructor (game, pos) {
          this.game = game
          this.x = pos.x
          this.y = pos.y
        }
      
        update () {
        }
      
        draw () {
          this.game.context.fillStyle = COLORS.bulletSquare
          this.game.context.fillRect(
            this.x * GRID_SIZE,
            this.y * GRID_SIZE,
            GRID_SIZE, GRID_SIZE)
        }
    }
    
    class Keyboarder {
            constructor () {
              this.keyState = {}
          
              window.addEventListener('keydown', function (e) {
                this.keyState[e.keyCode] = true
              }.bind(this))
          
              window.addEventListener('keyup', function (e) {
                this.keyState[e.keyCode] = false
              }.bind(this))
            }
          
            isDown (keyCode) {
              return this.keyState[keyCode] === true
            }
          
            on (keyCode, callback) {
              window.addEventListener('keydown', function (e) {
                if (e.keyCode === keyCode) {
                  callback()
                }
              })
            }
          }
          
          Keyboarder.KEYS = { LEFT: 37, RIGHT: 39, UP: 38, DOWN: 40, S: 83 }

let game = new Game () 
game.start = (isSamePos)
