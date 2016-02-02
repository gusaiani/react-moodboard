import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'

import boardItems from './boardItems'

const rootReducer = combineReducers({
  boardItems,
  routing: routeReducer
})

export default rootReducer
