import React, { PureComponent } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

const data = [
  {
    description: 'clean room',
    earn: 8,
    spend: 1,
    grow: 4,
    share: 3,
    timestamp: new Date(),
  },
  {
    description: 'read book to sister',
    earn: 6,
    spend: 5,
    grow: 1,
    share: 0,
    timestamp: new Date(),
  },
  {
    description: 'sell art',
    earn: 6,
    spend: 1,
    grow: 2,
    share: 3,
    timestamp: new Date(),
  },
  {
    description: 'write book',
    earn: 5,
    spend: 3,
    grow: 0,
    share: 2,
    timestamp: new Date(),
  },
  {
    description: 'help cook',
    earn: 10,
    spend: 1,
    grow: 4,
    share: 5,
    timestamp: new Date(),
  },
]

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
      timestamp: cur.timestamp.getDate(),
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

export default class Example extends PureComponent {
  render() {
    return (
      <LineChart
        width={400}
        height={300}
        data={newData}
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
}
