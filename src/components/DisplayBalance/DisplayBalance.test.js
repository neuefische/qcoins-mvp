import DisplayBalance from './DisplayBalance'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

test('DisplayBalance renders correctly', () => {
  render(<DisplayBalance type="Grow" value={38}></DisplayBalance>)
  expect(screen.getByTestId('svgGrow')).toBeInTheDocument()
  expect(screen.getByText('38')).toBeInTheDocument()
  expect(screen.getByText('Grow')).toBeInTheDocument()
})
test('Display Balance renders correctly with Grow Symbol', () => {
  render(<DisplayBalance type="Grow" value={38}></DisplayBalance>)
  expect(screen.getByTestId('svgGrow')).toBeInTheDocument()
  expect(screen.getByText('38')).toBeInTheDocument()
  expect(screen.getByText('Grow')).toBeInTheDocument()
  expect(screen.getByTestId('svgGrow')).toHaveStyle({
    backgroundColor: 'rgba(255, 226, 148)',
  })
})
test('Display Balance renders correctly with Share Symbol', () => {
  render(<DisplayBalance type="Share" value={38}></DisplayBalance>)
  expect(screen.getByTestId('svgShare')).toBeInTheDocument()
  expect(screen.getByText('38')).toBeInTheDocument()
  expect(screen.getByText('Share')).toBeInTheDocument()
  expect(screen.getByTestId('svgShare')).toHaveStyle({
    backgroundColor: 'rgba(255, 226, 148)',
  })
})
test('Display Balance renders correctly with Spend Symbol', () => {
  render(<DisplayBalance type="Spend" value={38}></DisplayBalance>)
  expect(screen.getByTestId('svgSpend')).toBeInTheDocument()
  expect(screen.getByText('38')).toBeInTheDocument()
  expect(screen.getByText('Spend')).toBeInTheDocument()
  expect(screen.getByTestId('svgSpend')).toHaveStyle({
    backgroundColor: 'rgba(255, 226, 148)',
  })
})
