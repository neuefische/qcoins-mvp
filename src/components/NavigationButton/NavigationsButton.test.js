import NavigationButton from './NavigationButton'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

test("NavigationButton renders correctly with 'Earn Coins'", () => {
  render(<NavigationButton>Earn Coins</NavigationButton>)
  expect(screen.getByRole('button')).toHaveTextContent('EARN COINS')
})

test('calls onClick prop when Clicked', () => {
  const handleClick = jest.fn()
  render(<NavigationButton onClick={handleClick}>Earn Coins</NavigationButton>)
  fireEvent.click(screen.getByRole('button'))
  expect(handleClick).toHaveBeenCalledTimes(1)
})

test('button have awesome gradient background color', () => {
  render(<NavigationButton>Earn Coins</NavigationButton>)
  expect(screen.getByRole('button')).toHaveStyle({
    background: `linear-gradient(
    90deg,
    rgba(var(--main-yellow), 1) 0%,
    rgba(var(--main-green), 1) 50%,
    rgba(var(--main-blue), 1) 100%
  )`,
  })
})
