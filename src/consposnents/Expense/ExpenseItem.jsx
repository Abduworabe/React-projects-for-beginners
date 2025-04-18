import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import classExpCss from './ExpenseItem.module.css'
const ExpenseItem = (props) => {

    
   const [title ,setTitle]= useState(props.title);

    const buttonClickHandler = () => {
        setTitle('Updated')

    };
    return <>
        <Card>
            <div className={classExpCss['expense-item']}>
                <div className={classExpCss['expense-itme-div1']}>
                    <div>

                        <ExpenseDate date={props.date} />

                    </div>
                    <h2 className={classExpCss['typeh2']}>{title}</h2>

                </div>

                <div className={classExpCss['price']}>

                    &{props.price}
                </div>

                <button onClick={buttonClickHandler}>Chamge title</button>
            </div>

        </Card>

    </>
};
export default ExpenseItem;