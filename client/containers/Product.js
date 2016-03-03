import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import {Link} from 'react-router'

class Product extends Component {
  render() {
    const {product} = this.props

    return (
      <div className="product">
        <Link to="/" className="product-nav-link active"/>
        <div>
          <img src={`/client/images/products/${product.image}`}></img>
          <p>
            {product.description}
          </p>
          <p>
            {product.name}
          </p>
          <p>
            {product.brand}
          </p>
        </div>
        <div>
          Choose that one item you love the most
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const productId = ownProps.params.productId
  const product = state.products[productId]

  return {
    product: product
  }
}

export default connect(mapStateToProps, {})(Product)
