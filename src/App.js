import { Switch, Redirect, Route, useHistory } from 'react-router-dom'
import EarnForm from './EarnForm'
import useTransactions from './hooks/useTransactions'
import useEarnings from './hooks/useEarnings'
import Home from './Home'
import  DistributeCoins  from './DistributeCoins'

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
        <EarnForm onSave={handleSaveEarnings} onCancel={() => history.push('/home')} />
      </Route>
      <Route path="/distribute-coins">
        <DistributeCoins earnedCoins={earnings[earnings.length - 1]} />
      </Route>
      <Route path="/">
        <Redirect to="/home" />
      </Route>
    </Switch>
  )
  
  function handleSaveEarnings(earning) {
    addEarning(earning)
    history.push('/distribute-coins')
  }

}

export default App
