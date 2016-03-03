import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'

export default class BoardItems extends Component {
  constructor(props) {
    super(props)
    this.handleClickOnAddToCart = this.handleClickOnAddToCart.bind(this)
  }

  handleClickOnAddToCart() {
    const {item, addToCart} = this.props
    addToCart(item.id, item.price)
  }

  handleClickOnShowDetails() {
    const {item, showDetails} = this.props
    showDetails(item.id)
  }

  render() {
    const {item} = this.props

    return (
      <div className={`item ${item.tiling}`}>
        <img src={`/client/images/products/${item.image}`}></img>

        <Link to={`/product/${item.id}`} className="product-nav-link"/>

        <div className="name-and-brand">
          {item.name}
          <br/>
          {item.brand}
        </div>
        <div className="price-and-buy">
          <span>{`$ ${item.price}`}</span>
          <button className="buy" onClick={this.handleClickOnAddToCart}>Bag It!</button>
        </div>
      </div>
    )
  }
}
