import Style from '../Card/Card.module.css';
import BtnKnowMore from '../Buttons/BtnKnowMore'

const Card = ({id, image, title, healthScore, time, diets}) => {
    return(
        <div className={Style.container}>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <div className={Style.scores}>
            <h4 className={Style.scoreHeart}>{healthScore}</h4>
            <h4>{time}min</h4>
        </div>
        <section className={Style.diets}>
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