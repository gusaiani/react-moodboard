import React, {Component, PropTypes} from 'react'

export default class BoardItems extends Component {
  constructor(props) {
    super(props)
    this.handleClickOnAddToCart = this.handleClickOnAddToCart.bind(this)
  }

  handleClickOnAddToCart(e) {
    const {item, addToCart} = this.props
    addToCart(item.id, item.price)
  }

  render() {
    const {item} = this.props
    const {dispatch} = this.props

    return (
      <div className={`item ${item.tiling}`}>
        <img src={`/client/images/products/${item.image}`}></img>
        <button className="zoom"/>
        <button className="see-more"/>
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
