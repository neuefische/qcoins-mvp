import DistributionButton from './DistributionButton'
import { Link } from 'react-router-dom'
import CoinPile from './CoinPile'
import styled from 'styled-components/macro'

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
      <CenterColumn>
        <CoinPile coins={totalCoins} />
        <h2>Coins earned: {totalCoins}</h2>
        <CoinPile coins={unallocated} />
        <span>You have {unallocated} coins left to distribute.</span>
      </CenterColumn>
      <CenterColumn>
        {transactionTypes.map(({ type, color }) => {
          return (
            <>
              <CoinPile coins={lastEarning[type]} />
              <DistributionButton
                key={type}
                type={type}
                onAdd={() => distribute(type, 1)}
                onSubtract={() => distribute(type, -1)}
                value={lastEarning[type]}
              />
            </>
          )
        })}
      </CenterColumn>
      <Link to={unallocated === 0 && '/home'}>Confirm</Link>
    </>
  )
}

const CenterColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
