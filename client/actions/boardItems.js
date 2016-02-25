import * as types from '../constants/actionTypes'

export function showDetails(itemId) {
  return {
    type: types.SHOW_DETAILS,
    itemId
  }
}

export function hideDetails(itemId) {
  return {
    type: types.HIDE_DETAILS,
    itemId
  }
}
