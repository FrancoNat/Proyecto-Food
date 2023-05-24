import BtnAdd from '../Buttons/BtnAdd'


const ingredients = ({state, error, handleChange, addIngredient}) => {
    return(
        <div>
             <h3>Add ingredients.</h3>
             <input type="text" placeholder="Ingredient name:" name="ingredient" value={state.ingredient} onChange={handleChange} />
             {error.ingredient && <p className={`errorMessage`}>{error.ingredient}</p>}
             <BtnAdd add={addIngredient}/>
             {state.ingredients.map((ing, index) => 
              <input type="text" value={ing.name} key={index} disabled/>
            )
        }
        </div>
    );
};

export default ingredients;