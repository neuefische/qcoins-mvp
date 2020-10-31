import DistributionButton from './DistributionButton'
import { Link } from 'react-router-dom'
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

export default function DistributeCoins({ lastEarning, distribute }) {
  const { unallocated, spend, share, grow } = lastEarning
  const totalCoins = unallocated + spend + share + grow
  return (
    <>
      <section>
        <h2>Coins earned: {totalCoins}</h2>
        <span>You have {unallocated} coins left to distribute.</span>
      </section>
      <section>
        {transactionTypes.map(({ type, color }) => {
          return (
            <DistributionButton
              key={type}
              type={type}
              onAdd={() => distribute(type, 1)}
              onSubtract={() => distribute(type, -1)}
              value={lastEarning[type]}
            />
          )
        })}
      </section>
      <Link to={unallocated === 0 && '/home'}>Confirm</Link>
    </>
  )
}
