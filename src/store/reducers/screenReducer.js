// @flow

import ActionTypes, { ScreenTypes } from '../actions'

type stateType = {
  screen: $Values<typeof ScreenTypes>
}

type actionType = {
  type: $Values<typeof ScreenTypes>
}

const initialState = {screen: ActionTypes.SMALL_SCREEN}
export default function screenReducer(state : stateType = initialState, action : actionType) {
  switch(action.type) {
    case ActionTypes.SMALL_SCREEN:
      return {screen: ActionTypes.SMALL_SCREEN}
    case ActionTypes.MEDIUM_SCREEN:
      return {screen: ActionTypes.MEDIUM_SCREEN}
    case ActionTypes.LARGE_SCREEN:
      return {screen: ActionTypes.LARGE_SCREEN}
    default:
      return state
 }
}