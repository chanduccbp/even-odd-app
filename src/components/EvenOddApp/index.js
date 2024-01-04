// Write your code here

import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {num: 0, isEven: true}

  changeNum = () => {
    this.setState(() => {
      const newNum = Math.ceil(Math.random() * 100)
      let numType
      if (newNum % 2 === 0) {
        numType = true
      } else {
        numType = false
      }

      return {num: newNum, isEven: numType}
    })
  }

  render() {
    const {num, isEven} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1>Count {num}</h1>
          {isEven && <p>Count is Even</p>}
          {!isEven && <p>Count is Odd</p>}
          <button type="button" onClick={this.changeNum}>
            Increment
          </button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
