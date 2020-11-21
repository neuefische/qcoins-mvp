import styled from 'styled-components/macro'
import Knob from './Knob'

export default function LastTransaction({ data }) {
  const knobData = data[data.length - 1] || {
    description: '',
    grow: 0,
    spend: 0,
    share: 0,
  }
  const knobs = ['Grow', 'Share', 'Spend']

  return (
    <WrapperBorder>
      <WrapperContent>
        <Title>
          LAST TRANSACTION: <span>{knobData.description}</span>
        </Title>
        <KnobWrapper>
          {knobs.map((knob) => (
            <Knob key={knob} type={knob} value={knobData[knob.toLowerCase()]} />
          ))}
        </KnobWrapper>
      </WrapperContent>
    </WrapperBorder>
  )
}

const WrapperBorder = styled.section`
  margin: 10px;
  width: 100%;
  position: relative;
  padding: 4px;
  border-radius: 25px;
  background: linear-gradient(
    90deg,
    rgba(var(--main-yellow), 1) 0%,
    rgba(var(--main-green), 1) 50%,
    rgba(var(--main-blue), 1) 100%
  );
`

const WrapperContent = styled.div`
  padding: 20px 25px;
  background: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`

const KnobWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const Title = styled.header`
  font-weight: bold;
  margin-bottom: 20px;
  & span {
    font-weight: 400;
    font-size: 0.8em;
  }
`
