export default class Game {
  isGameRunning = false
  clockTime = 0
  timer: NodeJS.Timeout

  constructor() {
    this.nextTick = this.nextTick.bind(this)
  }

  start() {
    this.isGameRunning = true
    this.timer = setInterval(this.nextTick, 1000)
  }

  stop() {
    this.isGameRunning = false
    clearInterval(this.timer)
  }

  nextTick() {
    this.clockTime = this.clockTime + 1
    console.log('>>> new clock time: ', this.clockTime)
  }
}
