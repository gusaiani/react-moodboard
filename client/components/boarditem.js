import React, {Component, PropTypes} from 'react'

export default class BoardItems extends Component {
  render() {
    const {item} = this.props

    return (
      <div className={`item ${item.tiling}`}>
        <img src={`/client/images/products/${item.image}`}></img>
        <button className="zoom"/>
        <button className="see-more"/>
        {item.name}
      </div>
    )
  }
}
