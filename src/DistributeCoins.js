const transactionTypes = [
  {
    type: 'Grow',
    color: 'blue',
  },
  {
    type: 'Spend',
    color: 'orange',
  },
  {
    type: 'Share',
    color: 'purple',
  },
]

export default function DistributeCoins({ earnedCoins }) {
  return (
    <>
      <section>
        <h2>Coins earned: {earnedCoins.amount}</h2>
        <span>You have 12 coins left to distribute.</span>
      </section>
      <section>
        {transactionTypes.map(({ type, color }) => {
          return <button key={type}>{type}</button>
        })}
      </section>
    </>
  )
}
