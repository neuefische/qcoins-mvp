import { useHistory } from 'react-router-dom'
import DistributionButton from '../../components/DistributionButton/DistributionButton'

const transactionTypes = [
  {
    type: 'grow',
    color: 'blue',
  },
  {
    type: 'spend',
    color: 'orange',
  },
  {
    type: 'share',
    color: 'purple',
  },
]

export default function UseCoins({ spendCoins, lastEarning }) {
  const history = useHistory()
  return (
    <div>
      {transactionTypes.map(({ type, color }) => {
        return (
          <DistributionButton
            key={type}
            type={type}
            onAdd={() => spendCoins(type, -1)}
            onSubtract={() => spendCoins(type, 1)}
            value={lastEarning[type]}
          />
        )
      })}
      <button onClick={() => history.push('/home')}>Return</button>
    </div>
  )
}
