import ActionTypes from '../actions'

const initialState = {screen: ActionTypes.SMALL_SCREEN}
export default function screenReducer(state = initialState, action) {
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