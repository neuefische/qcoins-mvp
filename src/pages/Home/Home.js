import { useHistory } from 'react-router-dom'
import NavigationButtons from '../../components/NavigationButton/NavigationButton'
import styled from 'styled-components'

export default function Home() {
  const history = useHistory()
  return (
    <ButtonWrapper>
      <NavigationButtons onClick={() => history.push('/earn-coins')}>
        Earn coins
      </NavigationButtons>
      <NavigationButtons onClick={() => history.push('/use-coins')}>
        Use coins
      </NavigationButtons>
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.main`
  display: flex;
  justify-content: center;
`
