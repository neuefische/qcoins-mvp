import Chart from './components/Chart.js'
import useTransactions from './hooks/useTransactions'

function App() {
  const [transactions, addTransaction] = useTransactions()

  return (
    <div>
         <Chart />
      <button onClick={() => addTransaction({ foo: 'bar' })}>
        Test localStorage
      </button>
    </div>
  )
}

export default App
