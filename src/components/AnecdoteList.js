import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../Redux/reducers/anecdoteReducer'
import { addNotification } from './../Redux/reducers/notificationReducer'

function AnecdoteList() {
  const anecdotes = useSelector(({anecdote, filterSearch}) => {
    let reg = new RegExp(filterSearch, 'gi')
    const arr = anecdote.filter(anec => reg.test(anec.content))
    return arr.sort((a,b) =>  b.votes - a.votes)
  })
  const dispatch = useDispatch()

  const vote = (id, content) => {
    dispatch(addVote(id, anecdotes))
    dispatch(addNotification(`you voted ${content}`, 5))
  }

  return (
    <>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}&nbsp
            <button onClick={() => vote(anecdote.id,  anecdote.content)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList
