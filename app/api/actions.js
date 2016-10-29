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

export const startTimelineScroll = scrollTop => {
  return {type: 'START_LISTENING' }
}

export const stopTimelineScroll = scrollTop => {
  return {type: 'STOP_LISTENING' }
}

