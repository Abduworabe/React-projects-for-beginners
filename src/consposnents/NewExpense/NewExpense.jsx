import classCssNewExpens from './newExpense.module.css';
import Card from '../UI/Card';
import ExpenseForm from './ExpenseForm';

const NewExpense = () => { 

    return<>
    <Card>
    <div className={classCssNewExpens['contner']}>
<ExpenseForm/>
    </div>
    </Card>
    </>
};
export default NewExpense;