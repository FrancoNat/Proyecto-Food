import Card from "../Card/Card";
import style from '../Cards/Cards.jsx'



const Cards = ({recipes}) => {
  
  return (
        <div className={style.cards}>
        {
          recipes.map(recipe  => <Card 
          key={recipe.id} 
          id={recipe.id} 
          image={recipe.image} 
          title={recipe.title} 
          healthScore={recipe.healthScore} 
          time={recipe.time} 
          diets={recipe.diets}/>)
        }
        </div>
      );
  };
  
  
  export default Cards;
   
