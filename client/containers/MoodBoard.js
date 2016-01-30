import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

class MoodBoard extends Component {

  render() {
    return (
      <div></div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps, {})(MoodBoard)
