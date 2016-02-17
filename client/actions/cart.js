import * as types from '../constants/actionTypes'
import _ from 'lodash'

export function addToCart(id, price) {
  return {
    type: types.ADD_TO_CART,
    id,
    price
  }
}

export function addAllToCart(items) {
  const {ids, totalPrice} = getAllProductIdsAndTotalPrice(items)
  return {
    type: types.ADD_ALL_TO_CART,
    ids,
    totalPrice
  }
}

function getNestedProducts(item) {
  if (item.container === true) {
    return _.map(item.items, (item) => { return {id: item.id, price: item.price}})
  }
  return {id: item.id, price: item.price}
}

function getAllProductIdsAndTotalPrice(items) {
  const products = _.flatMap(items, getNestedProducts)
  const ids = _.map(products, (product) => { return product.id })
  const totalPrice = _.reduce(products, (sum, product) => { return sum + parseFloat(product.price) }, 0)

  return {ids: ids, totalPrice: totalPrice}
}
