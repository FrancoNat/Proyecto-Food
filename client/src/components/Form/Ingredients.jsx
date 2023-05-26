import BtnAdd from '../Buttons/BtnAdd'
import '../Form/inputForm.css';

const ingredients = ({state, error, handleChange, addIngredient}) => {
    return(
        <div className="formContainer">
             <h3 className="formNote">Add ingredients.</h3>
             <input type="text" placeholder="Ingredient name:" name="ingredient" value={state.ingredient} onChange={handleChange} />
             {error.ingredient && <p className="errorMessage errorMessage">{error.ingredient}</p>}
             <BtnAdd add={addIngredient}/>
             {state.ingredients.map((ing, index) => 
              <input type="text" value={ing.name} key={index} disabled/>
            )
        }
        </div>
    );
};

export default ingredients;