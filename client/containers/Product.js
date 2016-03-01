import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'

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
  const productId = ownProps.params.productId
  const product = _.find(state.boardItems.items, function(product) {
    console.log(product)
    return product.id === productId
  })

  console.log(state.boardItems.items)
  console.log(product)
  return {
    id: ownProps.params.productId,
    product: product
  }
}

export default connect(mapStateToProps, {
})(Product)
