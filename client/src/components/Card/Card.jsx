import '../Card/Card.module.css';
import BtnKnowMore from '../Buttons/BtnKnowMore'

const Card = ({id, image, title, healthScore, time, diets}) => {
    return(
        <div className="container">
            <img className="recipeImage "src={image} alt={title} />
            <h3>{title}</h3>
            <div className="scores">
            <h4 className="scoreHeart">{healthScore}</h4>
            <h4>{time}min</h4>
        </div>
        <section className="diets">
         {diets.map((diet, index) => (
           (diets.length-1) > index
            ? `${diet} - `
            : diet
        ))}
        </section>
      <BtnKnowMore idRecipe={id}/>
    </div>
  )
}
export default Card;