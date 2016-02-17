import * as types from '../constants/actionTypes'

const initialCart = {
  totalprice: 0.00,
  items: []
}

export default function boardItems(state = initialCart, action) {
  switch(action.type) {
    case types.ADD_TO_CART:
      if (state.items.indexOf(action.id) != -1) {
        return state
      } else {
        return Object.assign({}, state, {
          totalprice: parseFloat(action.price) + parseFloat(state.totalprice),
          items: state.items.concat(action.id)
        })
      }

    case types.ADD_ALL_TO_CART:
      return Object.assign({}, state, {
        totalprice: action.totalPrice,
        items: action.ids
      })

    default:
      return state
  }
}
