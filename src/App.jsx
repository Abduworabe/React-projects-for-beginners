import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseItem from './consposnents/Expense/ExpenseItem'
import NewExpense from './consposnents/NewExpense/NewExpense'
function App() {
  const datab = [
    {
      id: 1,
      title: 'somee',
      price: 348,
      date: new Date(2023, 3, 4),
    },
    {
      id: 2,
      title: 'HOnber',
      price: 930.3,
      date: new Date(2055, 6, 16),
    },
    {
      id: 3,
      title: 'mare',
      price: 23,
      date: new Date(2030, 7, 23),
    },
    {
      id: 4,
      title: 'chdoo',
      price: 64.4,
      date: new Date(2035, 9, 3),
    },
  ];
  const finlDataHandler=(finilRicivedData)=>{
    const finlData={
      finilRicivedData,
    }
    console.log(finlData);

  }

  return (
    <>
    <NewExpense onFinlDataPass={finlDataHandler}/>
      {datab.map(item => (
        <ExpenseItem 
          key={item.id} 
          title={item.title} 
          price={item.price} 
          date={item.date} 
        />
      ))}
    </>
  );
}

export default App;