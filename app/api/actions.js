import { signUp } from 'api'

export const launchModal = _ => {
  document.body.style.overflow = 'hidden'
  return {type: 'LAUNCH_MODAL'}
}
export const removeModal = _ => {
  document.body.style.overflow = 'auto'
  return {type: 'REMOVE_MODAL'}
}

export const submitForm = _ => {
  signUp()
  return {type: 'SUBMIT_FORM'}
}

export const locationChange = payload => {
  return {type: 'LOCATION_CHANGE', payload}
}

export const styleUpdate = payload => {
  return {type: 'STYLE_UPDATE', payload}
}