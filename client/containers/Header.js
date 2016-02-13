import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

class Header extends Component {
  render() {
    const {cart} = this.props

    return (
      <div className="header">
        <div>
          <h1>Awesome Title</h1>
          <div>
            <button>Bag All!</button>
            <span>Total Cost: ${Number(cart.totalprice).toFixed(2)}</span>
          </div>
        </div>

        <div>
          Logo
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {cart} = state
  return {
    cart
  }
}

export default connect(mapStateToProps, {})(Header)
