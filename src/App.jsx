import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseItem from './consposnents/ExpenseItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<ExpenseItem/>
    </>
  )
}

export default App
