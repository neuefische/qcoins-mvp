import EarnForm from './EarnForm'
import useTransactions from './hooks/useTransactions'

function App() {
  const [transactions, addTransaction] = useTransactions()

  return (
    <div>
      <EarnForm />
    </div>
  )
}

export default App
