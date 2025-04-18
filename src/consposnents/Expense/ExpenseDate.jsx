import Card from '../UI/Card';
import classDate from './expenseDate.module.css'

const ExpenseDate = (props) => {
    const date = props.date.toLocaleString('en-US', { month: 'long' });
    const month = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear()
    return <>
    <Card>
        <div className={classDate['alldate']}>
            <div>{date}</div>
            <div>{year}</div>
            <div>{month}</div>
        </div>
        </Card>

    </>

};
export default ExpenseDate;