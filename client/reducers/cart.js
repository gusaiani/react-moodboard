import * as types from '../constants/actionTypes'
import includes from 'lodash/collection/includes'


const initialCart = {
  totalprice: 0.00,
  items: []
}

export default function boardItems(state = initialCart, action) {
  switch(action.type) {
    case types.ADD_TO_CART:
      if (includes(state.items, action.id)) {
        return state
      } else {
        return Object.assign({}, state, {
          totalprice: parseFloat(action.price) + parseFloat(state.totalprice),
          items: state.items.concat(action.id)
        })
      }

    default:
      return state
  }
}
