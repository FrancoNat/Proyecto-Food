import style from '../Card/Card.module.css';
import BtnKnowMore from '../Buttons/BtnKnowMore'

const Card = ({id, image, title, healthScore, time, diets}) => {
    return(
        <div className={style.container}>
            <img className={style.recipeImage} src={image} alt={title} />
            <h3>{title}</h3>
            <div className={style.scores}>
            <h4 className={style.scoreHeart}>{healthScore}</h4>
            <h4>{time}min</h4>
        </div>
        <section className={style.diets}>
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