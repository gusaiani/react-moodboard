import React, {Component, PropTypes} from 'react'

export default class BoardItems extends Component {
  render() {
    const {item} = this.props

    return (
      <div className={`item ${item.tiling}`}>
        <button className="zoom"/>
        <button className="see-more"/>
        {item.name}
      </div>
    )
  }
}
