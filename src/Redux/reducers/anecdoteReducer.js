import anecdoteService from '../../services/anecdoteService'
// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

// const getId = () => (100000 * Math.random()).toFixed(0)

// export const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     votes: 0
//   }
// }

// const initialState = anecdotesAtStart.map(asObject)

const anecdoteReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_VOTE':
      const id = action.data.id
      const updatedAnecdote = action.data.updatedAnecdote
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : updatedAnecdote
      )
    case 'NEW_ANECDOTE':
        return [...state, action.data]
    case 'INIT_ANECDOTE':
      return action.data

    default:
      return state
  }
}

export const addVote = (id, arr) => {
  return async dispatch => {
    const anecdoteToChange = arr.find(a => a.id === id)
    const changedAnecdote = {...anecdoteToChange, votes: anecdoteToChange.votes + 1}
    const updatedAnecdote = await anecdoteService.update(id, changedAnecdote)
    dispatch({
      type: 'ADD_VOTE',
      data: {id, updatedAnecdote}
    })
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const initializeNotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTE',
      data: anecdotes
    })
  }
}

export default anecdoteReducer