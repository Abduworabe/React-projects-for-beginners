import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseItem from './consposnents/ExpenseItem'
const datab = [
  {
  
    date: new Date(March, 2, 2030),
    pric: 35.3,
    itmeName: CareInsuranve,
  },
  {
    date: new Date(March, 2, 2030),
    pric: 35.3,
    itmeName: some,
  },
  {
    date: new Date(March, 2, 2030),
    pric: 35.3,
    itmeName: what,
  },
  {
    date: new Date(March, 2, 2030),
    pric: 35.3,
    itmeName: care,
  },
]
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ExpenseItem date={datab.forEach()} />
      <ExpenseItem />
      <ExpenseItem />

    </>
  )
}

export default App
