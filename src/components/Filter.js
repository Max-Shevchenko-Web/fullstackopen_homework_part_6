import React from 'react'
import { useDispatch } from 'react-redux'
import { setFilter } from './../Redux/reducers/filterReducer'

const Filter = () => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    let filterText = event.target.value
    dispatch(setFilter(filterText))
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter