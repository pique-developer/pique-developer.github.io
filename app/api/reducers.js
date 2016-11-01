import { combineReducers } from 'redux'

const formReducer = (state=false, action) => {
  switch (action.type) {

    case 'SUBMIT_FORM':
      return true

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

const scrollReducer = (state=false, action) => {
  switch (action.type) {

    case 'START_LISTENING':
      return true

    case 'STOP_LISTENING':
      return false

    default:
      return state
  }
}

const headerReducer = (state={fixed: false, fill: false, position: 'top'}, action) => {
  switch (action.type) {

    case 'UPDATE_TIMELINE_POSITION':
      return Object.assign({}, state, {
        positioning: action.positioning,
      })

    case 'HEADER_STYLE_CHANGE':
      return Object.assign({}, state, {
        fill: action.fill,
        fixed: action.fixed,
      })

    default:
      return state
  }
}

export default combineReducers({
  formSubmitted: formReducer,
  open: modalReducer,
  scrollTop: scrollReducer,
  header: headerReducer,
})