// Write your code here

import {Component} from 'react'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onFifty = event => {
    const {balance} = this.state
    if (balance >= event.target.value) {
      this.setState(prevState => ({
        balance: prevState.balance - event.target.value,
      }))
    }
  }

  render() {
    const {balance} = this.state

    return (
      <div className="bgContainer">
        <div className="cardContainer">
          <div className="iconContainer">
            <div className="icon">S</div>
            <h1 className="heading">Sarah Williams</h1>
          </div>
          <div className="balanceContainer">
            <p className="para">Your Balance</p>
            <h1 className="rupee">{balance}</h1>
          </div>
          <div className="paraContainer">
            <p>In Rupees</p>
          </div>
          <h1 className="rupee">Withdraw</h1>
          <p className="para">CHOOSE SUM (IN RUPEES) </p>
          <ul>
            <button
              type="button"
              value={50}
              className="button"
              onClick={this.onFifty}
            >
              50
            </button>
            <button
              type="button"
              value={100}
              className="button"
              onClick={this.onFifty}
            >
              100
            </button>
            <button
              type="button"
              value={200}
              className="button"
              onClick={this.onFifty}
            >
              200
            </button>
            <button
              type="button"
              value={500}
              className="button"
              onClick={this.onFifty}
            >
              500
            </button>
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
