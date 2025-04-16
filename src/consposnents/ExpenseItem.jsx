import classExpCss from './ExpenseItem.module.css'
const ExpenseItem = () => {

    const expenseDate=new Date(2025, 3, 23);
    const expensTitle='Car Insurance';
    const expenseAmount=234.3;
    return <>
        <div className={classExpCss['expense-item']}>
            <div className={classExpCss['expense-itme-div1']}>
               <div> {expenseDate.getUTCDate()}</div>
                <h2 className={classExpCss['typeh2']}>{expensTitle}</h2>
                
            </div>
        
                <div  className={classExpCss['price']}>

                    &{expenseAmount}
                </div>
            
        </div>

    </>
};
export default ExpenseItem;