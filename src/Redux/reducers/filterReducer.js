const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'FILTER':
      return action.data
    default:
      return state
  }
}

export const setFilter = (str) => {
  return {
    type: 'FILTER',
    data: str
  }
}

export default filterReducer