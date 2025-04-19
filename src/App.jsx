import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseItem from './consposnents/Expense/ExpenseItem'
import NewExpense from './consposnents/NewExpense/NewExpense'
import ExpensesFilter from '../src/consposnents/Expense/ExpensesFilter'

function App() {
  const intialData = [
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
 const [datab, setDatab]=useState(intialData);

 const finlDataHandler = (finilReceivedData) => {
  // Assuming finilReceivedData contains the necessary fields
  const { title, price, date } = finilReceivedData;

  // Create a new expense object
  const newExpense = {
    id: Math.random(), // Generate a unique ID
    title: title,
    price: parseFloat(price), // Convert price to a number
    date: new Date(date), // Convert date to a Date object
  };

  // Update the state with the new expense
  setDatab((prevData) => [
    ...prevData,
    newExpense, // Add the new expense to the existing array
  ]);
};
  const [filterdYear, setfilterdYear] =useState('2022')
  const onChageFilterHandler=(SelctedYear)=>{
      setfilterdYear(SelctedYear);
  }

  return (
    <>

    <NewExpense onFinlDataPass={finlDataHandler}/>
    <ExpensesFilter selected={filterdYear} onChageFilter={onChageFilterHandler}/>
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