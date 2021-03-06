import { Switch, Redirect, Route, useHistory } from 'react-router-dom'
import EarnForm from './pages/EarnForm/EarnForm'
import useEarnings from './hooks/useEarnings'
import Home from './pages/Home/Home'
import DistributeCoins from './pages/DistributeCoins/DistributeCoins'
import Chart from './components/Chart/Chart'
import Header from './components/Header/Header'
import UseCoins from './pages/UseCoins/UseCoins'

function App() {
  const { lastEarning, distribute, addEarning, earnings } = useEarnings()
  const history = useHistory()

  return (
    <>
      <Header earnings={earnings} />
      <Chart data={earnings} />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/use-coins">
          <UseCoins />
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
