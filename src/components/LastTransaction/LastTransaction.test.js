import LastTransaction from './LastTransaction'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

const mockData = [
  {
    unallocated: 0,
    description: 'First entry',
    spend: 1,
    grow: 8,
    share: 2,
    timestamp: '2020-11-21T11:50:28.124Z',
  },
]

test('LastTransaction renders correctly', () => {
  render(<LastTransaction data={mockData}></LastTransaction>)
  expect(screen.getByTestId('Grow')).toBeInTheDocument()
  expect(screen.getByTestId('Share')).toBeInTheDocument()
  expect(screen.getByTestId('Spend')).toBeInTheDocument()
  expect(screen.getByText('8')).toBeInTheDocument()
  expect(screen.getByText('1')).toBeInTheDocument()
  expect(screen.getByText('2')).toBeInTheDocument()
  expect(screen.getByText('First entry')).toBeInTheDocument()
  expect(screen.getByText('LAST TRANSACTION:')).toBeInTheDocument()
})
test('LastTransaction renders correctly with nothing in local storage', () => {
  render(<LastTransaction data={[]}></LastTransaction>)
  expect(screen.getByTestId('Grow')).toBeInTheDocument()
  expect(screen.getByTestId('Share')).toBeInTheDocument()
  expect(screen.getByTestId('Spend')).toBeInTheDocument()
  expect(screen.getAllByText('0')).toHaveLength(3)
  expect(screen.getByText('LAST TRANSACTION:')).toBeInTheDocument()
})
