import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'

import products from './products'
import boardItems from './boardItems'
import cart from './cart'

const rootReducer = combineReducers({
  products,
  boardItems,
  cart,
  routing: routeReducer
})

export default rootReducer
