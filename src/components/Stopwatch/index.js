// Write your code here

import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    isTimeRun: false,
    timeSeconds: 0,
  }

  componentWillUnmount = () => {
    clearInterval(this.timeInterval)
  }

  onStopBtn = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRun: false})
  }

  onResetBtn = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRun: false, timeSeconds: 0})
  }

  timeUpdate = () => {
    this.setState(prevState => ({
      timeSeconds: prevState.timeSeconds + 1,
    }))
  }

  onStartBtn = () => {
    this.timeInterval = setInterval(this.timeUpdate, 1000)
  }

  renderSeconds = () => {
    const {timeSeconds} = this.state

    const seconds = Math.floor(timeSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeSeconds} = this.state

    const minutes = Math.floor(timeSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimeRun} = this.state

    const timer = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="bg-container">
        <div className="stop-watch-con">
          <h1 className="stop-watch-heading">StopWatch</h1>
        </div>
        <div className="timer-bg-color">
          <div className="timer-container">
            <img
              className="stop-img"
              alt="stopwatch"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
            />
            <p className="timer-description">Timer</p>
          </div>
          <h1 className="timer-run-heading">{timer}</h1>
          <div>
            <button
              type="button"
              className="start-btn"
              onClick={this.onStartBtn}
              disabled={isTimeRun}
            >
              Start
            </button>
            <button type="button" className="stop-btn" onClick={this.onStopBtn}>
              Stop
            </button>
            <button
              type="button"
              className="reset-btn"
              onClick={this.onResetBtn}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
