import classExpCss from './ExpenseItem.module.css'
const ExpenseItem = (props) => {

    const date=props.date.toLocaleString('en-US', {month:'long'});
    const month=props.date.toLocaleString('en-US', {day:'2-digit'});
    const year=props.date.getFullYear()
 
    return <>
        <div className={classExpCss['expense-item']}>
            <div className={classExpCss['expense-itme-div1']}>
               <div>
               <div>{date}</div>
               <div>{year}</div>
                <div>{month}</div>
            
              
               </div>
                <h2 className={classExpCss['typeh2']}>{props.tiltle}</h2>
                
            </div>
        
                <div  className={classExpCss['price']}>

                    &{props.price}
                </div>
            
        </div>

    </>
};
export default ExpenseItem;