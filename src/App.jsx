import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import the UUID library
import './App.css';
import ExpenseItem from './consposnents/Expense/ExpenseItem';
import NewExpense from './consposnents/NewExpense/NewExpense';
import ExpensesFilter from '../src/consposnents/Expense/ExpensesFilter';

let initialData = [
  {
    id: uuidv4(), // Add unique ID
    title: 'somee',
    price: 348,
    date: new Date(2025, 3, 4),
  },
  {
    id: uuidv4(), // Add unique ID
    title: 'HOnber',
    price: 930.3,
    date: new Date(2055, 6, 16),
  },
  {
    id: uuidv4(), // Add unique ID
    title: 'mare',
    price: 23,
    date: new Date(2030, 7, 23),
  },
  {
    id: uuidv4(), // Add unique ID
    title: 'chdoo',
    price: 64.4,
    date: new Date(2035, 9, 3),
  },
];

function App() {
  const [datab, setDatab] = useState(initialData);
  const [filterdYear, setfilterdYear] = useState('2022');

  const finlDataHandler = (finilReceivedData) => {
    const newExpense = {
      id: uuidv4(), // Generate a new ID for the new expense
      title: finilReceivedData.title,
      price: +finilReceivedData.price, // Convert price to a number
      date: new Date(finilReceivedData.date), // Convert date string to Date object
    };

    // Update the state with the new expense
    setDatab((prevData) => [...prevData, newExpense]);
  };

  const onChageFilterHandler = (SelctedYear) => {
    setfilterdYear(SelctedYear);
  };

  // Filter expenses based on the selected year
  const filteredExpenses = datab.filter(expense => {
    return expense.date.getFullYear().toString() === filterdYear;
  });

  return (
    <>
      <NewExpense onFinlDataPass={finlDataHandler} />
      <ExpensesFilter selected={filterdYear} onChageFilter={onChageFilterHandler} />
      {filteredExpenses.map(item => (
        <ExpenseItem
          key={item.id} // Use the unique id as the key
          title={item.title}
          price={item.price}
          date={item.date}
        />
      ))}
    </>
  );
}

export default App;