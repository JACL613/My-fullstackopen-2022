import { useSelector } from 'react-redux'
const Notification = () => {
  const notification = useSelector(state => state.notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    notification.menssage !== 'CLEAR'
    ?<div style={style}>
    {notification.menssage}
    </div>
    :null
  )
}

export default Notification