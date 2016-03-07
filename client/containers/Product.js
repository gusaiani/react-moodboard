import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import {Link} from 'react-router'

class Product extends Component {
  render() {
    const {product, relatedProducts} = this.props

    return (
      <div className="product">
        <Link to="/" className="product-nav-link active"/>
        <div>
          <img src={`/client/images/products/large/${product.image}`}></img>
          <p className="description">
            {product.description}
          </p>
          <p className="name">
            {product.name}
          </p>
          <p className="brand">
            {product.brand}
          </p>
          <div className="price-and-buy">
            <span>{`$ ${product.price}`}</span>
            <button className="buy" onClick={null}>Bag It!</button>
          </div>
        </div>
        <div>
          <h5>
            Choose that one item you love the most
          </h5>

          {relatedProducts.map((relatedProduct) => {
            return (
              <Link to={`/product/${relatedProduct.id}`}>
                <img src={`/client/images/products/large/${relatedProduct.image}`}></img>
                <p>{relatedProduct.name}</p>
              </Link>
            )
          })}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const productId = ownProps.params.productId
  const products = state.products
  const product = products[productId]
  const relatedProducts = _.sampleSize(products, 4)

  return {
    product,
    relatedProducts
  }
}

export default connect(mapStateToProps, {})(Product)
