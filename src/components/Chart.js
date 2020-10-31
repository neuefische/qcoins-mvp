import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

function accummulateAccounts(data) {
  const newData = []

  data.reduce(
    (prev, cur) => {
      const earn = prev.earn + cur.earn
      const spend = prev.spend + cur.spend
      const grow = prev.grow + cur.grow
      const share = prev.share + cur.share

      newData.push({
        description: cur.description,
        earn: earn,
        spend: spend,
        grow: grow,
        share: share,
        timestamp: new Date(cur.timestamp).getDate(),
      })

      return {
        description: cur.description,
        earn: earn,
        spend: spend,
        grow: grow,
        share: share,
        timestamp: cur.timestamp,
      }
    },
    { description: '', earn: 0, spend: 0, grow: 0, share: 0 }
  )
  return newData
}
export default function Chart({ data }) {
  return (
    <LineChart
      width={400}
      height={300}
      data={accummulateAccounts(data)}
      margin={{
        top: 10,
        right: 30,
        left: -10,
        bottom: 20,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="timestamp" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="spend"
        stroke="#82ca9d"
        activeDot={{ r: 8 }}
      />
      <Line
        type="monotone"
        dataKey="grow"
        stroke="#334CFF"
        activeDot={{ r: 8 }}
      />
      <Line
        type="monotone"
        dataKey="share"
        stroke="#FF33F9"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  )
}
