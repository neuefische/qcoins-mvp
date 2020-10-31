
export default function DistributeCoins({earnedCoins}) {

    return(
    <div>{earnedCoins.amount}</div>
    )
}

// import { useState } from 'react'
// import styled from 'styled-components/macro'
// import AmountButton from './AmountButton'

// const initialState = {
//   amount: 0,
//   description: '',
//   transactionType: '',
// }

// const transactionTypes = [
//   {
//     type: 'Spend',
//     color: 'orange'
//   },
//   {
//     type: 'Grow',
//     color: 'blue'
//   },
//   {
//     type: 'Share',
//     color: 'purple'
//   }
// ]

// export default function DistributeCoins({ onNewTransaction, earnedCoins }) {
//   const [transaction, setTransaction] = useState(initialState)

//   return (
//     <FormStyled onSubmit={handleSubmit}>
//       <section>
//         Type of transaction:
//         <div>
//         {transactionTypes.map(({type, color}) => {
//           return <ButtonStyled key={type} type="button" color={color} onClick={() =>
//             setTransaction({ ...transaction, transactionType: type })
//           }>{type}</ButtonStyled>
//         })}
//         </div>
//       </section>
//       <section>
//         Amount: 
//       <div>
//         <AmountButton onClick={() => setTransactionAmount(-1)} amount="-1" />
//         <AmountButton onClick={() => setTransactionAmount(-10)} amount="-10" />
//         <span name="amount" value={transaction.description} type="text">
//         {transaction.amount}
//         </span>
//         <AmountButton onClick={() => setTransactionAmount(10)} amount="10" />
//         <AmountButton onClick={() => setTransactionAmount(1)} amount="1" />
//       </div>
//       </section>
//       <LabelStyled>
//         Description
//         <input name="description" type="text" onChange={handleChange} />
//       </LabelStyled>
//       <div>
//         <button type="button">Cancel</button>
//         <button>Save</button>
//       </div>
//     </FormStyled>
//   )

  
//   function handleSubmit(event) {
//     event.preventDefault()
//     onNewTransaction(transaction)
//     setTransaction(initialState)
//   }
  
//   function handleChange(event) {
//     const { name, value } = event.target
//     setTransaction({
//       ...transaction,
//       [name]: value,
//     })
//   }

//   function setTransactionAmount(amount) {
//     setTransaction({ ...transaction, amount: transaction.amount + amount })
//   }
// }

// const FormStyled = styled.form`
//   padding: 20px;
// `
// const LabelStyled = styled.label`
//   display: flex;
//   flex-direction: column;
//   align-items: baseline;
//   justify-content: space-between;
// `
// const ButtonStyled = styled.button`
//   background: ${props => props.color ?? 'gray'};
//   color: white;
//   padding: 6px;
// `