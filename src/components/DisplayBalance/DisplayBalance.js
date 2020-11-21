import { ReactComponent as GrowSymbol } from '../../assets/growSymbol.svg'
import { ReactComponent as ShareSymbol } from '../../assets/shareSymbol.svg'
import { ReactComponent as SpendSymbol } from '../../assets/spendSymbol.svg'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

DisplayBalance.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.number,
}

export default function DisplayBalance({ type, value }) {
  return (
    <Wrapper>
      <CircleValueWrapper>
        <Circle type={type} data-testid={`svg${type}`} color={getColor(type)}>
          {getSymbol(type)}
        </Circle>
        <Value>{value}</Value>
      </CircleValueWrapper>

      <Title>{type}</Title>
    </Wrapper>
  )

  function getColor(type) {
    const color = {
      Grow: function () {
        return 'var(--main-yellow)'
      },
      Share: function () {
        return 'var(--main-green)'
      },
      Spend: function () {
        return 'var(--main-blue)'
      },
      default: function () {
        return ''
      },
    }
    return (color[type] || color['default'])()
  }

  function getSymbol(type) {
    const symbol = {
      Grow: function () {
        return <GrowSymbol />
      },
      Share: function () {
        return <ShareSymbol />
      },
      Spend: function () {
        return <SpendSymbol />
      },
      default: function () {
        return ''
      },
    }
    return (symbol[type] || symbol['default'])()
  }
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 140px;
`

const CircleValueWrapper = styled.div`
  display: flex;
  align-items: center;
`
const Circle = styled.div`
  background-color: rgb(${({ color }) => color});
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  margin: 15px;
`

const Value = styled.span`
  width: 75px;
  height: 45px;
  z-index: -1;
  background-color: var(--color-babyblue);
  font-size: 1.3em;
  font-weight: bold;
  padding: 15px;
  border-radius: 15px;
  text-align: center;
  margin-left: -40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const Title = styled.span`
  text-align: center;
  font-weight: bold;
  font-size: 1.3em;
`
