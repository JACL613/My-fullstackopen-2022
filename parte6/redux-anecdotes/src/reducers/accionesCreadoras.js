export const CreateAnecdote = (content) => {
    return  {
        type: 'Create_Anecdote',
        data: {
            content: content,
            id: (100000 * Math.random()).toFixed(0),
            votes: 0,
            important: false
        }
    }
}
export const ToggableVoted = (id) => {
    return {
        type: 'Voto',
        data: {id}
    }
}
export const ToggableImportant = (id) => {
    return {
        type: 'Toggable_Important',
        data: {id}
    }
}
export const ToggableFilterVoted = () => {
    return {
        type: 'Filter_For_Voted'
    }
}

export const filterChange = filter => {
    return {
      type: 'SET_FILTER',
      filter,
    }
  }