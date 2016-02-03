import React, {Component, PropTypes} from 'react'

export default class BoardItems extends Component {
  render() {
    const {item} = this.props

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
          <button className="buy">Bag It!</button>
        </div>
      </div>
    )
  }
}
