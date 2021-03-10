
export default class Game {
  isGameRunning = false

  start() {
    this.isGameRunning = true
  }

  stop() {
    this.isGameRunning = false
  }
}