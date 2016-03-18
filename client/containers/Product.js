import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import {Router, Link, Navigation} from 'react-router'
import {pushState} from 'redux-router'

import {addToCart} from '../actions/cart'

class Product extends Component {
  constructor(props) {
    super(props)
    this.handleClickOnAddToCart = this.handleClickOnAddToCart.bind(this)
  }

  handleClickOnAddToCart() {
    const {product, addToCart} = this.props
    addToCart(product.id, product.price)
  }

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
            <Link to='/' className="add-to-cart buy" onClick={this.handleClickOnAddToCart}>Bag It!</Link>
          </div>
        </div>
        <div>
          <h5>
            Choose the category you love the most
          </h5>

          <div>
            {relatedProducts.map((relatedProduct) => {
              return (
                <Link to={`/product/${relatedProduct.id}`} key={relatedProduct.id}>
                  <img src={`/client/images/products/large/${relatedProduct.image}`}></img>
                  <p>{relatedProduct.name}</p>
                </Link>
              )
            })}
          </div>
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

export default connect(mapStateToProps, {
  addToCart
})(Product)
