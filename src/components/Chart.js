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
    timestamp: 'timestamp',
    saving: 1,
  },
  {
    timestamp: 'timestamp',
    saving: 4,
  },
  {
    timestamp: 'timestamp',
    saving: 5,
  },
  {
    timestamp: 'timestamp',
    saving: 3,
  },
  {
    timestamp: 'timestamp',
    saving: 6,
  },
  {
    timestamp: 'timestamp',
    saving: 6,
  },
  {
    timestamp: 'timestamp',
    saving: 7,
  },
]

export default function Chart({ data }) {
  return (
    <LineChart
      width={400}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 50,
        left: -15,
        bottom: 20,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="saving" stroke="#82ca9d" />
    </LineChart>
  )
}
