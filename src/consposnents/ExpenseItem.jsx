import ExpenseDate from './ExpenseDate';
import classExpCss from './ExpenseItem.module.css'
const ExpenseItem = (props) => {

    return <>
        <div className={classExpCss['expense-item']}>
            <div className={classExpCss['expense-itme-div1']}>
                <div>

                    <ExpenseDate date={props.date} year={props.year} month={props.month} />

                </div>
                <h2 className={classExpCss['typeh2']}>{props.tiltle}</h2>

            </div>

            <div className={classExpCss['price']}>

                &{props.price}
            </div>

        </div>

    </>
};
export default ExpenseItem;