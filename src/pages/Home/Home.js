import { useHistory } from 'react-router-dom'

export default function Home() {
  const history = useHistory()
  return (
    <main>
      <button onClick={() => history.push('/earn-coins')}>Earn coins</button>
    </main>
  )
}
