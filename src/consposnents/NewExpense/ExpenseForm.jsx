import { useState } from 'react';
import classCssForme from './expenseForm.module.css';

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({
        title: '',
        price: '',
        date: '',
    });

    const InputTitleHandler = (event) => {
        setUserInput((previousState) => ({
            ...previousState,
            title: event.target.value,
        }));
    };

    const InputPriceHandler = (event) => {
        setUserInput((previousState) => ({
            ...previousState,
            price: event.target.value,
        }));
    };

    const InputDateHandler = (event) => {
        const dateString = event.target.value; // e.g., "2023-04-04"
        const selectedDate = new Date(dateString);
        const startDate = new Date(2022, 0, 1); // January 1, 2022
        const endDate = new Date(2025, 11, 31); // December 31, 2025

        // Check if the selected date is within the range
        if (selectedDate >= startDate && selectedDate <= endDate) {
            setUserInput((previousState) => ({
                ...previousState,
                date: dateString, // Store the date as a string
            }));
        } else {
            alert('Please select a date between 2022-01-01 and 2025-12-31.');
        }
    };

    const FormSubmitHandler = (event) => {
        event.preventDefault();

        // Pass the userInput object directly
        props.onSave({
            title: userInput.title,
            price: userInput.price,
            date: userInput.date,
        });

        // Reset the form
        setUserInput({
            title: '',
            price: '',
            date: '',
        });
    };

    return (
        <form onSubmit={FormSubmitHandler} className={classCssForme['form']}>
            <div className={classCssForme['form-group']}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    value={userInput.title}
                    id="title"
                    onChange={InputTitleHandler}
                />
            </div>
            <div className={classCssForme['form-group']}>
                <label htmlFor="date">Date</label>
                <input
                    type="date"
                    id="date"
                    value={userInput.date}
                    onChange={InputDateHandler}
                />
            </div>
            <div className={classCssForme['form-group']}>
                <label htmlFor="price">Price</label>
                <input
                    type="number"
                    value={userInput.price}
                    id="price"
                    onChange={InputPriceHandler}
                />
            </div>
            <button type="submit" className={classCssForme['buttons']}>Submit</button>
        </form>
    );
};

export default ExpenseForm;