import styled from 'styled-components/macro'

export default function Knob({ type, value }) {
  const colors = getColors(type)
  return (
    <Wrapper data-testid={type} colors={colors}>
      {value}
    </Wrapper>
  )

  function getColors(type) {
    const color = {
      Grow: function () {
        return [
          'var(--main-yellow)',
          'var(--main-darkerYellow)',
          'var(--navigationButton-font-darkgrey)',
        ]
      },
      Share: function () {
        return [
          'var(--main-green)',
          'var(--main-darkerGreen)',
          'var(--navigationButton-font-darkgrey)',
        ]
      },
      Spend: function () {
        return ['var(--main-blue)', 'var(--main-darkerBlue)', 'white']
      },
      default: function () {
        return ''
      },
    }
    return (color[type] || color['default'])()
  }
}

const Wrapper = styled.div`
  display: flex;
  color: ${({ colors }) => colors[2]};
  font-weight: bold;
  font-size: 1.4em;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  text-align: center;
  width: 75px;
  height: 60px;
  background: linear-gradient(
    180deg,
    rgba(${({ colors }) => colors[0]}, 1) 0%,
    rgba(${({ colors }) => colors[1]}, 1) 100%
  );
`
