import { Switch, Redirect, Route, useHistory } from 'react-router-dom'
import EarnForm from './EarnForm'
import useEarnings from './hooks/useEarnings'
import Home from './Home'
import DistributeCoins from './DistributeCoins'
import Chart from './components/Chart'

function App() {
  const { lastEarning, distribute, addEarning, earnings } = useEarnings()
  const history = useHistory()

  return (
    <>
      <Chart data={earnings} />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/earn-coins">
          <EarnForm
            onSave={handleSaveEarnings}
            onCancel={() => history.push('/home')}
          />
        </Route>
        <Route path="/distribute-coins">
          <DistributeCoins lastEarning={lastEarning} distribute={distribute} />
        </Route>
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </>
  )

  function handleSaveEarnings(earning) {
    addEarning(earning)
    history.push('/distribute-coins')
  }
}

export default App
