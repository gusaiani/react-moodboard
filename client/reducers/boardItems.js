import * as types from '../constants/actionTypes'
import items from '../model/boardItems'

const initialBoardItems = {
  seeMoreItem: null,
  items: items
}

export default function boardItems(state = initialBoardItems, action) {
  switch(action.type) {
    case types.SEE_MORE:
    return Object.assign({}, state, {
      seeMoreItem: action.itemId
    })

    default:
      return state
  }
}
