import styled from 'styled-components'
import coin from '../../assets/qcoin.png'

export default function CoinPile({ coins }) {
  return (
    <StyledCoinPile>
      {[...new Array(coins)].map(() => (
        <StyledCoin src={coin} />
      ))}
    </StyledCoinPile>
  )
}

const StyledCoinPile = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 24px;
`

const StyledCoin = styled.img`
  width: 32px;
  height: 32px;
  border: 1px solid grey;
  border-radius: 50%;

  & + img {
    margin-left: -8px;
  }
`
