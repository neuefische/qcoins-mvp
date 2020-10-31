import { useEffect, useState } from 'react'
import loadFromLocal from '../services/loadFromLocal'
import saveToLocal from '../services/saveToLocal'

const STORAGE_KEY = 'qcoins-transactions'

export default function useTransactions() {
  const [transactions, setTransactions] = useState(
    loadFromLocal(STORAGE_KEY) ?? []
  )
  useEffect(() => saveToLocal(STORAGE_KEY, transactions), [transactions])
  function addTransaction(transaction) {
    transaction = { ...transaction, timestamp: new Date().toISOString() }
    setTransactions([...transactions, transaction])
  }
  return [transactions, addTransaction]
}
