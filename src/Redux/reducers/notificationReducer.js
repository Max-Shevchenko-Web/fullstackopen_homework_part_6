const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return action.message
    default:
      return state
  }
}

export const addNotification = (content, time) => {
  return dispatch => {
    dispatch({
      type: 'ADD_NOTIFICATION',
      message: content,
    })
    setTimeout(() => {
      dispatch(clearNotification(null))
    }, time * 1000)
  }
}

export const clearNotification = () => {
  return {
    type: 'ADD_NOTIFICATION',
    message: null
  }
}

export default notificationReducer