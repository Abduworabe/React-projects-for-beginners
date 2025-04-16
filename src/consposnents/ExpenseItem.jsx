import classExpCss from './ExpenseItem.module.css'
const ExpenseItem = () => {

    return <>
        <div className={classExpCss['expense-item']}>
            <div className={classExpCss['expense-itme-div1']}>
               <div> March 28th 2025</div>
                <h2 className={classExpCss['typeh2']}>Car_Insurance</h2>
                
            </div>
        
                <div  className={classExpCss['price']}>

                    &23.33
                </div>
            
        </div>

    </>
};
export default ExpenseItem;