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
    name: '1500',
    saving: 1,
  },
  {
    name: 'timestamp',
    saving: 4,
  },
  {
    name: 'timestamp',
    saving: 5,
  },
  {
    name: 'timestamp',
    saving: 3,
  },
  {
    name: 'timestamp',
    saving: 6,
  },
  {
    name: 'timestamp',
    saving: 6,
  },
  {
    name: 'timestamp',
    saving: 7,
  },
]

export default function Chart() {
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="coins" stroke="#82ca9d" />
    </LineChart>
  )
}
