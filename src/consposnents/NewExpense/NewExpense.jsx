import classCssNewExpens from './newExpense.module.css';
import Card from '../UI/Card';
import ExpenseForm from './ExpenseForm';

const NewExpense = () => {
const DataUpseveHandler=(resivedData)=>{

    const  DataRicive={
        resivedData
       
    }
    console.log(DataRicive);

};
    return <>
        <Card>
            <div className={classCssNewExpens['contner']}>
                <ExpenseForm onSave={DataUpseveHandler}/>
            </div>
        </Card>
    </>
};
export default NewExpense;