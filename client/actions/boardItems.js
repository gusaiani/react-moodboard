import * as types from '../constants/actionTypes'

export function seeMore(itemId) {
  return {
    type: types.SEE_MORE,
    itemId
  }
}
