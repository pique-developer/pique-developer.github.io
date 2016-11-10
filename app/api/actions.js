import * as API from 'api'

export const launchModal = _ => {
  document.body.style.overflow = 'hidden'
  return {type: 'LAUNCH_MODAL'}
}
export const removeModal = _ => {
  document.body.style.overflow = 'auto'
  return {type: 'REMOVE_MODAL'}
}

export const locationChange = payload => {
  return {type: 'LOCATION_CHANGE', payload}
}

export const styleUpdate = payload => {
  return {type: 'STYLE_UPDATE', payload}
}

export const submitForm = data => {
  API.register(data)
  return {type: 'SUBMIT_FORM'}
}

export const authenticating = _ => {
  return {type: 'AUTHENTICATING'}
}

export const switchForm = _ => {
  return {type: 'SWITCH_FORM'}
}

export const loginSuccess = payload => {
  return {type: 'LOGIN_SUCCESS', payload}
}

export const loginError = payload => {
  return {type: 'LOGIN_ERROR', payload}
}

export const signOut = _ => {
  API.signOut()
  return {type: 'SIGNOUT'}
}