import { useState } from 'react'
import styled from 'styled-components/macro'

export default function DistributionButton({ type, onSubtract, onAdd, value }) {
  return (
    <section>
      <span>{type}</span>
      <button onClick={onSubtract}>-</button>
      <span>{value}</span>
      <button onClick={onAdd}>+</button>
    </section>
  )
}
