import { useState } from 'react'
import styled from 'styled-components/macro'

const initialState = {
  amount: 0,
  description: '',
}

export default function EarnForm({ onSave, onCancel }) {
  const [earning, setEarning] = useState(initialState)
  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Coins earned
        <EarnedInput
          name="amount"
          type="text"
          inputMode="numeric"
          value={earning.amount}
          onChange={handleChange}
        />
      </label>
      <label>
        Description
        <input
          name="description"
          type="text"
          value={earning.description}
          onChange={handleChange}
        />
      </label>
      <ButtonGroup>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Save</button>
      </ButtonGroup>
    </Form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    onSave(earning)
  }

  function handleChange(event) {
    const { name, value } = event.target
    if (name === 'amount') {
      const number = Number(value)
      Number.isNaN(number) || setEarning({ ...earning, amount: number })
    } else {
      setEarning({
        ...earning,
        [name]: value,
      })
    }
  }
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 24px;

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    text-align: center;
  }
`

const EarnedInput = styled.input`
  padding: 24px;
  border-radius: 50%;
  width: 72px;
  height: 72px;
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
`
