import React, {Component, PropTypes} from 'react'

export default class ItemDetails extends Component {
  render() {
    const {description} = this.props

    return (
      <div className="detail-container">
        <div>{description}</div>
      </div>
    )
  }
}
