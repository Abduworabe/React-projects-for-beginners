import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseItem from './consposnents/ExpenseItem'

function App() {
  const datab = [
    {
      id: 1,
      title: 'somee',
      price: 348,
      date: new Date(2025, 2, 23),
    },
    {
      id: 2,
      title: 'HOnber',
      price: 930.3,
      date: new Date(2025, 2, 23),
    },
    {
      id: 3,
      title: 'mare',
      price: 23,
      date: new Date(2025, 2, 23),
    },
    {
      id: 4,
      title: 'chdoo',
      price: 64.4,
      date: new Date(2025, 2, 23),
    },
  ]

  return (
    <>
      <ExpenseItem tiltle={datab[0].title} price={datab[0].price} date={datab[0].date} />
      <ExpenseItem tiltle={datab[1].title} price={datab[1].price} date={datab[1].date} />
      <ExpenseItem tiltle={datab[2].title} price={datab[2].price} date={datab[2].date} />
      <ExpenseItem tiltle={datab[3].title} price={datab[3].price} date={datab[3].date} />
    </>
  )
}

export default App
