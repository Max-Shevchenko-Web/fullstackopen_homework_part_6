import React from 'react'
import { connect } from 'react-redux'
import { addVote } from '../Redux/reducers/anecdoteReducer'
import { addNotification } from './../Redux/reducers/notificationReducer'

function AnecdoteList(props) {
  const vote = (id, content) => {
    props.addVote(id, props.anecdotes)
    props.addNotification(`you voted ${content}`, 5)
  }

  console.log(props)

  return (
    <>
      {props.anecdotes.map(anecdote =>
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

const mapStateToProps = (state) => {
  let { anecdote, filterSearch } = state
  console.log(state.anecdote)
  let reg = new RegExp(filterSearch, 'gi')
  const arr = anecdote.filter(anec => reg.test(anec.content))
  return {
    anecdotes : arr.sort((a,b) =>  b.votes - a.votes)
  }
}

const mapDispatchToProps = {
  addNotification,
  addVote
}


const ConnectAnecdotes  = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default ConnectAnecdotes
