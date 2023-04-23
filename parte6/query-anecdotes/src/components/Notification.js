import { useAnecdoteValue } from "../Reducers/AnecdoteContext"

const Notification = () => {
  const notification = useAnecdoteValue()
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  if (notification.length <= 0 || notification.message === 'CLEAR') {
    console.log(notification.length);
    return null
  }

  return (
    <div style={style}>
      {notification.message}
    </div>
  )
}

export default Notification
