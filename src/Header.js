import styled from 'styled-components'

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
      <span>Grow: {grow}</span>
      <span>Share: {share}</span>
      <span>Spend: {spend}</span>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  padding: 12px;
  display: flex;
  justify-content: space-evenly;
`
