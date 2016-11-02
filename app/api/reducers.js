import { combineReducers } from 'redux'

const formReducer = (state=false, action) => {
  switch (action.type) {

    case 'SUBMIT_FORM':
      return true

    default:
      return state
  }
}

const routeReducer = (state='', action) => {
  switch (action.type) {

    case 'LOCATION_CHANGE':
      return action.pathname

    default:
      return state
  }
}

const modalReducer = (state=false, action) => {
  switch (action.type) {

    case 'LAUNCH_MODAL':
      return true

    case 'REMOVE_MODAL':
      return false

    default:
      return state
  }
}

const uiReducer = (state={}, action) => {
  switch (action.type) {

    case 'STYLE_UPDATE':
      return Object.assign({}, state, {
        ...action.payload
      })

    default:
      return state
  }
}

export default combineReducers({
  formSubmitted: formReducer,
  open: modalReducer,
  route: routeReducer,
  ui: uiReducer,
})