import EarnForm from './EarnForm'
import useTransactions from './hooks/useEarnings'

function App() {
  const [transactions, addTransaction] = useTransactions()
  const [earnings, addEarning] = useEarnings()

  return (
    <div>
      <EarnForm onSave={addEarning} />
    </div>
  )
}

export default App
