import classCssNewExpens from './newExpense.module.css';
import Card from '../UI/Card';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
const DataUpseveHandler=(resivedData)=>{

    const  DataRicive={
        ...resivedData,
        id:Math.random(),
    }
  props.onFinlDataPass(DataRicive);

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