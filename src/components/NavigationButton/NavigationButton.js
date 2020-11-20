import styled from 'styled-components'
import PropTypes from 'prop-types'

NavigationButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
}

export default function NavigationButton({ onClick, children }) {
  return <StyledButton onClick={onClick}>{children.toUpperCase()}</StyledButton>
}

const StyledButton = styled.button`
  all: unset;
  border-radius: 25px;
  text-align: center;
  background: linear-gradient(
    90deg,
    rgba(var(--main-yellow), 1) 0%,
    rgba(var(--main-green), 1) 50%,
    rgba(var(--main-blue), 1) 100%
  );
  color: var(--navigationButton-font-darkgrey);
  font-weight: bold;
  font-size: 1.2em;
  width: 100%;
  padding: 15px;
  margin: 10px;
  cursor: pointer;
`
