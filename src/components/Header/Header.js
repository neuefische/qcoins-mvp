import styled from 'styled-components'
import DisplayBalance from '../DisplayBalance/DisplayBalance'

export default function Header({ earnings }) {
  const { grow, share, spend } = earnings.reduce(
    (acc, { grow, spend, share }) => {
      acc.grow += grow
      acc.share += share
      acc.spend += spend
      return acc
    },
    { grow: 0, spend: 0, share: 0 }
  )
  return (
    <HeaderStyled>
      <DisplayBalance type={'Grow'} value={grow} />
      <DisplayBalance type={'Share'} value={share} />
      <DisplayBalance type={'Spend'} value={spend} />
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  padding: 12px;
  display: flex;
  justify-content: space-evenly;
`
