import useTransactions from './hooks/useTransactions'

function App() {
  const [transactions, addTransaction] = useTransactions()

  return (
    <div>
      <button onClick={() => addTransaction({ foo: 'bar' })}>
        Test localStorage
      </button>
    </div>
  )
}

export default App
