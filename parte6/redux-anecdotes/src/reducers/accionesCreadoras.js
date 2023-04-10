export const CreateAnecdote = (content) => {
    return  {
        type: 'anecdotes/Create_Anecdote',
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
        type: 'anecdotes/Voto',
        data: {id}
    }
}
export const ToggableImportant = (id) => {
    return {
        type: 'anecdotes/Toggable_Important',
        data: {id}
    }
}
export const ToggableFilterVoted = () => {
    return {
        type: 'anecdotes/Filter_For_Voted'
    }
}

export const filterChange = filter => {
    return {
      type: 'filter/SET_FILTER',
      filter,
    }
  }
export const messageNotification = menssage => {
    return {
      type: 'notification/SET_MENSSAGE',
      data: menssage,
    }
  }