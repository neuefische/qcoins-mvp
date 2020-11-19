import { useEffect, useState } from 'react'
import loadFromLocal from '../services/loadFromLocal'
import saveToLocal from '../services/saveToLocal'

const STORAGE_KEY = 'qcoins-earnings'

export default function useEarnings() {
  const [earnings, setEarnings] = useState(loadFromLocal(STORAGE_KEY) ?? [])
  const lastEarning = earnings[earnings.length - 1]
  useEffect(() => saveToLocal(STORAGE_KEY, earnings), [earnings])

  function addEarning(earning) {
    earning = {
      ...earning,
      spend: 0,
      grow: 0,
      share: 0,
      timestamp: new Date().toISOString(),
    }
    console.log(earning)
    setEarnings([...earnings, earning])
  }

  function distribute(type, value) {
    if (
      (value === 1 && lastEarning.unallocated === 0) ||
      (value === -1 && lastEarning[type] === 0)
    ) {
      return
    }
    const newEarning = {
      ...lastEarning,
      unallocated: lastEarning.unallocated - value,
      [type]: lastEarning[type] + value,
    }
    setEarnings([...earnings.slice(0, earnings.length - 1), newEarning])
  }

  function spendCoins(type, value) {
    const lastSpending = {
      ...lastEarning,
      [type]: lastEarning[type] + value,
    }
    setEarnings([...earnings.slice(0, earnings.length - 1), lastSpending])
  }

  return { lastEarning, distribute, addEarning, earnings, spendCoins }
}
