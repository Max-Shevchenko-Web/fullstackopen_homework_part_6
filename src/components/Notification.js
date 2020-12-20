import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notificationMessage = useSelector(store => store.notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if (notificationMessage === null) {
    return null
  }

  return (
    <div style={style}>
      {notificationMessage}
    </div>
  )
}

export default Notification