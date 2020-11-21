import Knob from './Knob'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

test('Grow Knob renders correctly', () => {
  render(<Knob type="Grow" value={38}></Knob>)
  expect(screen.getByTestId('Grow')).toBeInTheDocument()
  expect(screen.getByText('38')).toBeInTheDocument()
})
test('Share Knob renders correctly', () => {
  render(<Knob type="Share" value={38}></Knob>)
  expect(screen.getByTestId('Share')).toBeInTheDocument()
  expect(screen.getByText('38')).toBeInTheDocument()
})
test('Spend Knob renders correctly', () => {
  render(<Knob type="Spend" value={38}></Knob>)
  expect(screen.getByTestId('Spend')).toBeInTheDocument()
  expect(screen.getByText('38')).toBeInTheDocument()
})
