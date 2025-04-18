import classCard from './card.module.css'
const Card = (props)=> {

    return <div className={classCard['cards']}>
        {props.children}
    </div>
};
export default Card;