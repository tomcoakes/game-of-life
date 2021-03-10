
export default class Game {
  isGameRunning = false

  start() {
    console.log('>>> game started')
    this.isGameRunning = true
  }

  stop() {
    console.log('>>> game stopped')
    this.isGameRunning = false
  }
}