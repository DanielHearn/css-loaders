import ActionTypes from '../actions'

const initialState = {mobile: false}
export default function counterReducer(state = initialState, action) {
  switch(action.type) {
    case ActionTypes.ENABLE_MOBILE:
      return {mobile: true}
    case ActionTypes.DISABLE_MOBILE:
      return {mobile: false}
    default:
      return state
 }
}