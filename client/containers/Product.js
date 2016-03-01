import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

class Product extends Component {
  render() {
    return (
      <div>
        You are at the stub page for product {this.props.id}.
        We’ll make it look like something soon.
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    id: ownProps.params.productId
  }
}

export default connect(mapStateToProps, {
})(Product)
