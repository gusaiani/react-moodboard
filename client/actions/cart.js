import * as types from '../constants/actionTypes'

export function addToCart(id, price) {
  return {
    type: types.ADD_TO_CART,
    id,
    price
  }
}
