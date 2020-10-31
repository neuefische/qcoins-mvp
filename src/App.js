import Chart from './components/Chart'
import useTransactions from './hooks/useTransactions'

function App() {
  const [transactions, addTransaction] = useTransactions()
  const lastTransactionValue =
    transactions[transactions.length - 1]['saving'] ?? 0

  const formDataEntry = 1

  return (
    <div>
      <Chart data={transactions} />
      <button
        onClick={() =>
          addTransaction({ saving: lastTransactionValue + formDataEntry })
        }
      >
        Test localStorage
      </button>
    </div>
  )
}

export default App
