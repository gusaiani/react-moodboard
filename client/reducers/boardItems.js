import * as types from '../constants/actionTypes'
import items from '../model/boardItems'

const initialBoardItems = {
  seeMoreItem: null,
  items: items
}

export default function boardItems(state = initialBoardItems, action) {
  switch(action.type) {
    case types.SHOW_DETAILS:
      return Object.assign({}, state, {
        seeMoreItem: action.itemId
      })

    case types.HIDE_DETAILS:
      return Object.assign({}, state, {
        seeMoreItem: null
      })

    default:
      return state
  }
}
