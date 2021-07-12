import './card.css';
import Box from './box';

const Card = () => {
    const foods = [{name:'Pizza', calorie:13 },{name:'Burger', calorie:34 },{name:'Coke', calorie:234 },{name:'Browne', calorie:34 },{name:'Fried Rice', calorie:43 },{name:'Lassania', calorie:43 },{name:'Pani Puri', calorie:42 }];
    return (
        <div className="Card">
            {foods.map((food) => <Box food={food}/>)}
        </div>
    );
}

export default Card;