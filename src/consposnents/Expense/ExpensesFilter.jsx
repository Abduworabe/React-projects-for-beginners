import classForFilter from './ExpensesFilter.module.css'
const ExpensesFilter=(props)=>{
    const dropDownChangeHamdler=(event)=>{
props.onChageFilter(event.target.value);
    };

    return <>
    <div className={classForFilter['filter']}>
        <label className={classForFilter['label']}>Filter by year</label>
        <select className={classForFilter['select']} value={props.selected}  onChange={dropDownChangeHamdler}>
            <option value='2025'>2025</option>
            <option value='2024'>2024</option>
            <option value='2023'>2023</option>
            <option value='2022'>2022</option>
        </select>
    </div>
    
    </>
};
export default ExpensesFilter;