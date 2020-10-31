import { useEffect, useState } from 'react'
import loadFromLocal from '../services/loadFromLocal'
import saveToLocal from '../services/saveToLocal'

const STORAGE_KEY = 'qcoins-transactions'

export default function useTransactions() {
  const [transactions, setTransactions] = useState(
    loadFromLocal(STORAGE_KEY) ?? [{ saving: 0, timestamp: '0' }]
  )
  useEffect(() => saveToLocal(STORAGE_KEY, transactions), [transactions])

  function addTransaction(transaction) {
    const timestamp = new Date()
    const date = `${timestamp.getFullYear()} - ${timestamp.getMonth()} - ${timestamp.getDate()}`
    transaction = {
      ...transaction,
      timestamp: timestamp.toISOString(),
      date: date,
    }
    setTransactions([...transactions, transaction])
  }

  return [transactions, addTransaction]
}
