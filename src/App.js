import React, { useEffect} from 'react'

import AnecdoteForm from './components/AnecdoteForm ';
import AnecdoteList from './components/AnecdoteList';
import Notification from './components/Notification';
import Filter from './components/Filter';
import { useDispatch } from 'react-redux';
import anecdoteService from './services/anecdoteService';
import { initializeNotes } from './Redux/reducers/anecdoteReducer';

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    anecdoteService
      .getAll().then(anecdotes =>
        dispatch(initializeNotes(anecdotes))
    )
  })
  return (
    <div>
      <Notification />
      <Filter />
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App