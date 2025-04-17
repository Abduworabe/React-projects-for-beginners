const ExpenseDate = (props) => {
    const date = props.date.toLocaleString('en-US', { month: 'long' });
    const month = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear()
    return <>
        <div>{date}</div>
        <div>{year}</div>
        <div>{month}</div>
    </>

};
export default ExpenseDate;