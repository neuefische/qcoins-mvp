import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function UseCoins() {
  const history = useHistory()
  return (
    <div>
      <button onClick={() => history.push('/home')}>Return</button>
    </div>
  )
}
