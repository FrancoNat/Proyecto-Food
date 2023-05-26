import Header from '../Header/Header'
import '../DetailCard/DetailCard.css';
import Error404 from '../Errors/Error404'




const DetailCard = ({ recipe }) => {

    if (recipe.hasOwnProperty('error')) {
      return <div><Header /> <Error404 /></div>
    }
    return (
      <article className="detailCard">
        <Header />
        {recipe.hasOwnProperty('message') && <h3 className="successMessage">{recipe.message}</h3>}
        
        <div className="card">
          <section className="mainContent">
            <figure className="containerImage">
              <img src={recipe.image} alt={recipe.title} className="recipeImage" />
            </figure>
            <div className="basicDetails">
              <h1>{recipe.title}</h1>
              <h3>Dish type:</h3>
              <p>{recipe.dishTypes.map((dishType, index) => (
                (recipe.dishTypes.length -1) > index 
                  ? <span key={index}>{dishType} - </span>
                  : <span key={index}>{dishType}</span>
              ))}</p>
              <h3>Diet:</h3>
              <p>{recipe.diets.map((diet, index) => (
                (recipe.diets.length -1) > index 
                  ? <span key={index}>{diet} - </span>
                  : <span key={index}>{diet}</span>
              ))}</p>
              <div className="scores">
                <span className="scoreHeart">
                
                  {recipe.healthScore}
                  </span>
                <span>
                 
                  {recipe.time}
                </span>
              </div>
            </div>
          </section>
          <section className="secondaryContent">
            <h2>Summary:</h2>
            <p className="summary" dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
            {/* <p className={style.summary}>{recipe.summary}</p> */}
            <h2>Ingredients:</h2>
            <ul>
              {recipe.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
            </ul>
            <h2>Instructions:</h2>
            <ol>
              {recipe.instructions.map((instruction, index) => <li key={index}>{instruction}</li>)}
            </ol>
          </section>
        </div>
      </article>
  
    );
  };

  export default DetailCard;
