import classCssForme from './expenseForm.module.css'
const ExpenseForm = () => {
    const InputTitleHandler = (event) => {
        let Title = event.target.value;
        console.log(Title)
    }
    const InputPriceHandler = (event) => {
        let price = event.target.value;
        console.log(price)
    }
    const InputDateHandler = (event) => {
        // Get the date string from the input
        const dateString = event.target.value; // e.g., "2023-04-04"
        
        // Create a Date object from the date string
        const date = new Date(dateString);
        
        // Format the date components
        const options = { month: 'long', day: '2-digit', year: 'numeric' };
        const formattedDate = date.toLocaleString('en-US', options);
    
        console.log(formattedDate); // This will log the formatted date
    }

    return <>
        <form action="onSubmit" className={classCssForme['form']}>
            <div className={classCssForme['form-group']}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" onChange={InputTitleHandler} />
            </div>
            <div className="form-group">
                <label htmlFor="date">Date</label>
                <input type="date" id="date" onChange={InputDateHandler} />
            </div>
            <div className="form-group">
                <label htmlFor="price">Price</label>
                <input type="number" id="price" onChange={InputPriceHandler} />
            </div>
            <button type="submit" className={classCssForme['buttons']}>Submit</button>
        </form>
    </>
};
export default ExpenseForm;