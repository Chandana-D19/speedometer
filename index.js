// Write your code here
import {Component} from 'react' // Corrected import
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  increaseSpeed = () => {
    this.setState(prevState => {
      if (prevState.speed < 200) {
        return {speed: prevState.speed + 10}
      }
      return prevState
    })
  }

  Applybrake = () => {
    this.setState(prevState => {
      if (prevState.speed > 0) {
        return {speed: prevState.speed - 10}
      }
      return prevState
    })
  }

  render() {
    const {speed} = this.state
    return (
      <div className="Container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />
        <h1 className="sub-heading">Speed is {speed}mph</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-container">
          <button type="button" className="btn" onClick={this.increaseSpeed}>
            Accelerate
          </button>
          <button type="button" className="btn-Brake" onClick={this.Applybrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
