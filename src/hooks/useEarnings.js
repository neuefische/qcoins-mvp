import { useEffect, useState } from 'react'
import loadFromLocal from '../services/loadFromLocal'
import saveToLocal from '../services/saveToLocal'

const STORAGE_KEY = 'qcoins-earnings'

export default function useEarnings() {
  const [earnings, setEarnings] = useState(loadFromLocal(STORAGE_KEY) ?? [])
  useEffect(() => saveToLocal(STORAGE_KEY, earnings), [earnings])

  function addEarning(earning) {
    earning = { ...earning, timestamp: new Date().toISOString() }
    setEarnings([...earnings, earning])
  }

  return [earnings, addEarning]
}
