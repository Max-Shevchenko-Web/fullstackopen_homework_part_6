import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../Redux/reducers/anecdoteReducer'
import { addNotification } from './../Redux/reducers/notificationReducer'

function AnecdoteForm (props) {
  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.newAnecdote.value
    event.target.newAnecdote.value = ''
    props.createAnecdote(content)
    props.addNotification(`new anecdote ${content}`, 10)
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name='newAnecdote'  />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  )
}

export default connect(
  null,
  { createAnecdote, addNotification }
)(AnecdoteForm)
