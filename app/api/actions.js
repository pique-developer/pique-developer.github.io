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

export const applyStyleToHeader = payload => {
  return {type: 'HEADER_STYLE_CHANGE', ...payload}
}

export const updateTimelinePosition = payload => {
  return {type: 'UPDATE_TIMELINE_POSITION', ...payload}
}

export const locationChange = pathname => {
  return {type: 'LOCATION_CHANGE', pathname}
}

export const styleUpdate = payload => {
  return {type: 'STYLE_UPDATE', payload}
}