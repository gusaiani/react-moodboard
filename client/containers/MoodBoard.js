import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

class MoodBoard extends Component {

  render() {
    return (
      <div className="moodboard">
        <div className="item two-by-two">Product 2 × 2</div>
        <div className="container one-by-two">
          <div className="item">Product 1 × 1</div>
          <div className="item">Product 1 × 1</div>
        </div>
        <div className="item two-by-two">Product 2 × 2</div>
        <div className="container one-by-two">
          <div className="item">Product 1 × 1</div>
          <div className="item">Product 1 × 1</div>
        </div>
        <div className="item two-by-two">Product 2 × 2</div>
        <div className="item two-by-two">Product 2 × 2</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps, {})(MoodBoard)
