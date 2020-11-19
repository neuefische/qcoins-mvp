import { useHistory } from 'react-router-dom'

export default function UseCoins() {
  const history = useHistory()
  return (
    <div>
      <button onClick={() => history.push('/home')}>Return</button>
    </div>
  )
}
