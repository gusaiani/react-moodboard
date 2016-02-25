import React, {Component, PropTypes} from 'react'

import ItemDetails from '../components/itemDetails'

export default class BoardItems extends Component {
  constructor(props) {
    super(props)
    this.handleClickOnAddToCart = this.handleClickOnAddToCart.bind(this)
    this.handleClickOnShowDetails = this.handleClickOnShowDetails.bind(this)
    this.handleClickOnHideDetails = this.handleClickOnHideDetails.bind(this)
  }

  handleClickOnAddToCart() {
    const {item, addToCart} = this.props
    addToCart(item.id, item.price)
  }

  handleClickOnShowDetails() {
    const {item, showDetails} = this.props
    showDetails(item.id)
  }

  handleClickOnHideDetails() {
    const {item, hideDetails} = this.props
    hideDetails(item.id)
  }

  areDetailsDisplayed(itemId, itemToDisplayDetails) {
    if (itemId === itemToDisplayDetails) return true
    return false
  }

  renderDetailsButton(areDetailsDisplayed) {
    if (areDetailsDisplayed) {
      return <button className="show-details active" onClick={this.handleClickOnHideDetails}/>
    } else {
      return <button className="show-details" onClick={this.handleClickOnShowDetails}/>
    }
  }

  render() {
    const {item, itemToDisplayDetails} = this.props

    const areDetailsDisplayed = this.areDetailsDisplayed(item.id, itemToDisplayDetails)

    return (
      <div className={`item ${item.tiling}`}>
        <img src={`/client/images/products/${item.image}`}></img>
        {areDetailsDisplayed && <ItemDetails description={item.description}/>}
        <button className="zoom"/>
        {this.renderDetailsButton(areDetailsDisplayed)}

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
