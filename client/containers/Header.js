import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import {addAllToCart} from '../actions/cart'

class Header extends Component {
  constructor(props) {
    super(props)
    this.handleClickAddAllToCart = this.handleClickAddAllToCart.bind(this)
  }

  handleClickAddAllToCart() {
    const {addAllToCart, boardItems} = this.props
    addAllToCart(boardItems.items)
  }

  render() {
    const {cart} = this.props

    return (
      <div className="header">
        <div>
          <h1>
            <Link to="/">Awesome Title</Link>
          </h1>
          <div>
            <button onClick={this.handleClickAddAllToCart}>Bag All!</button>
            <span>Total Cost: ${Number(cart.totalprice).toFixed(2)}</span>
          </div>
        </div>

        <div>
          <Link to="/">Logo</Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {cart, boardItems} = state
  return {
    cart,
    boardItems
  }
}

export default connect(mapStateToProps, {
  addAllToCart
})(Header)
