import { Switch, Redirect, Route, useHistory } from 'react-router-dom'
import EarnForm from './EarnForm'
import useTransactions from './hooks/useTransactions'
import useEarnings from './hooks/useEarnings'
import Home from './Home'

function App() {
  const [transactions, addTransaction] = useTransactions()
  const [earnings, addEarning] = useEarnings()

  const history = useHistory()

  return (
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/earn-coins">
        <EarnForm onSave={addEarning} onCancel={() => history.push('/home')} />
      </Route>
      <Route path="/">
        <Redirect to="/home" />
      </Route>
    </Switch>
  )
}

export default App
