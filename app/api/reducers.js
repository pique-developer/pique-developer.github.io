import { combineReducers } from 'redux'

const registerReducer = (state=false, action) => {
  switch (action.type) {

    case 'SUBMIT_FORM':
      return true

    default:
      return state
  }
}

const loadingReducer = (state=false, action) => {
  switch (action.type) {

    case 'AUTHENTICATING':
      return true

    case 'LOGIN_SUCCESS':
    case 'LOGIN_ERROR':
      return false

    default:
      return state
  }
}

const authReducer = (state={user: false, initialized: false, error: '', login: true, isNew: true}, action) => {
  switch (action.type) {

    case 'AUTHENTICATING':
      return Object.assign({}, state, {
        error: '',
      })

    case 'INIT_AUTH_STATE':
      return Object.assign({}, state, {
        user: action.payload.user,
        initialized: true,
      })

    case 'LOGIN_SUCCESS':
      return Object.assign({}, state, {
        user: action.payload.user,
        login: state.login,
      })

    case 'LOGIN_ERROR':
      return Object.assign({}, state, {
        error: action.payload.error,
        initialized: true,
      })

    case 'SWITCH_FORM':
      return Object.assign({}, state, {
        login: !state.login,
      })

    case 'SIGNOUT':
      return Object.assign({}, state, {
        user: false,
        initialized: false,
      })

    case 'SUBMIT_APPLICATION':
      return {
        ...state,
        isNew: false,
      }

    default:
      return state
  }
}

const routeReducer = (state={route: '', hash: ''}, action) => {
  switch (action.type) {

    case 'LOCATION_CHANGE':
      return Object.assign({}, state, {
        ...action.payload
      })

    case 'SIGNOUT':
      return Object.assign({}, state, {
        ...action.payload
      })

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

const applicants = {
  new: [],
  reviewed: [],
  interviewees: [],
  finalists: [],
}
const appReducer = (state={ applicants }, action) => {
  switch (action.type) {

    case 'FETCH_SUCCESS':
      return Object.assign({}, state, {
        ...action.payload,
        error: '',
      })

    case 'FETCH_ERROR':
      return Object.assign({}, state, {
        error: action.payload.error,
      })

    case 'SIGNOUT':
      return { applicants }

    default:
      return state
  }
}

const applicationReducer = (state={
  title: '',
  description: '',
  awardAmount: [],
  minimumGPA: 0,
  photoURL: '',
  minimumSATScore: 0,
  minimumACTScore: 0,
  recommendationsOK: false,
  genericRecommendations: 0,
  essays: 0,
  essayPrompt: '',
  essayWordLimit: '',
  schoolYearRequirement: [],
  citizenshipRequirement: [],
  maximumFamilyIncome: '',
  genderRequirement: [],
  raceRequirements: [],
  degreeType: [],
  areasOfStudyRequirements: '',
  communityServiceRequirement: [],
  locationLimitationCity: '',
  locationLimitationState: '',
  documentRequirement: '',
}, action) => {
  switch (action.type) {

    case 'UPDATE_USER_INFO':
    case 'UPDATE_APPLICATION':
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}

export default combineReducers({
  routing: routeReducer,
  formSubmitted: registerReducer,
  auth: authReducer,
  open: modalReducer,
  loading: loadingReducer,
  ui: uiReducer,
  app: appReducer,
  application: applicationReducer,
})