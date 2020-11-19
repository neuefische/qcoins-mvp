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

function accumulateAccounts(sums, { spend, grow, share }) {
  if (sums.length === 0) {
    return [{ spend, grow, share }]
  }
  const nextSum = { ...sums[sums.length - 1] }
  nextSum.spend += spend
  nextSum.grow += grow
  nextSum.share += share
  return [...sums, nextSum]
}

export default function Chart({ data }) {
  return (
    <LineChart
      width={400}
      height={300}
      data={data.reduce(accumulateAccounts, [])}
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
