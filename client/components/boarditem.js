import React, {Component, PropTypes} from 'react'

import ItemDetails from '../components/itemDetails'

export default class BoardItems extends Component {
  constructor(props) {
    super(props)
    this.handleClickOnAddToCart = this.handleClickOnAddToCart.bind(this)
    this.handleClickOnSeeMore = this.handleClickOnSeeMore.bind(this)
  }

  handleClickOnAddToCart() {
    const {item, addToCart} = this.props
    addToCart(item.id, item.price)
  }

  handleClickOnSeeMore(e) {
    const {item, seeMore} = this.props
    seeMore(item.id)
  }

  areDetailsDisplayed(itemId, itemToDisplayDetails) {
    if (itemId === itemToDisplayDetails) return true
    return false
  }

  render() {
    const {item, itemToDisplayDetails} = this.props

    return (
      <div className={`item ${item.tiling}`}>
        <img src={`/client/images/products/${item.image}`}></img>
        {this.areDetailsDisplayed(item.id, itemToDisplayDetails) && <ItemDetails/>}
        <button className="zoom"/>
        <button className="see-more" onClick={this.handleClickOnSeeMore}/>
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
