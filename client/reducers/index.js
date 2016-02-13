import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'

import boardItems from './boardItems'
import cart from './cart'

const rootReducer = combineReducers({
  boardItems,
  cart,
  routing: routeReducer
})

export default rootReducer
