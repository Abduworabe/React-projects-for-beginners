import { useState } from 'react';
import classCssForme from './expenseForm.module.css'
const ExpenseForm = () => {
    const [userInput, setUserInput] = useState({
        interdTilte: '',
        interdprice: '',
        interddate: '',
    });

    const InputTitleHandler = (event) => {
        setUserInput((previousState) => {
            return { ...previousState, interdTilte: event.target.value }
        }
        );

    }
    const InputPriceHandler = (event) => {
        setUserInput((previousState) => {
            return { ...previousState, interdprice: event.target.value }
        }
        );

    }
    const InputDateHandler = (event) => {
        const dateString = event.target.value; // e.g., "2023-04-04"
        setUserInput((previousState) => {
            return { ...previousState, interddate: dateString }; // Store the date as a string
        });
    };
    const FormSubmitHandler = (event) => {
        event.preventDefault();
        console.log(userInput)

      
        // Reset the form
        setUserInput({
            interdTilte: '',
            interdprice: '',
            interddate: '',
        });

    };
    return <>
        <form onSubmit={FormSubmitHandler} className={classCssForme['form']}>
            <div className={classCssForme['form-group']}>
                <label htmlFor="title">Title</label>
                <input type="text" value={userInput.interdTilte} id="title" onChange={InputTitleHandler} />
            </div>
            <div className="form-group">
                <label htmlFor="date">Date</label>
                <input type="date" id="date" value={userInput.interddate} onChange={InputDateHandler} />
            </div>
            <div className="form-group">
                <label htmlFor="price">Price</label>
                <input type="number" value={userInput.interdprice} id="price" onChange={InputPriceHandler} />
            </div>
            <button type="submit" className={classCssForme['buttons']}>Submit</button>
        </form>
    </>
};
export default ExpenseForm;