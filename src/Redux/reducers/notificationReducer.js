const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return action.message
    default:
      return state
  }
}

export const addNotification = (content) => {
  let message = `you voted ${content}`
  return {
    type: 'ADD_NOTIFICATION',
    message,
  }
}

export const deleteNotification = () => {
  return {
    type: 'ADD_NOTIFICATION',
    message: null
  }
}

export default notificationReducer