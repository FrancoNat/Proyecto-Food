import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiets, getDishTypes } from "../../redux/actions";
import { URL_BACKEND } from "../../redux/actions/type";
import DetailCard from "../../components/DetailCard/DetailCard";
import Header from "../../components/Header/Header";
import "../Form/Form.css";
//Traemos los inputs del formulario 
import { BasicInfo, CheckboxDishType, CheckboxDiets, Ingredients, Instructions } from "../../components/Form";

//ACÁ irian las funciones de validaciones.
import { inputValidation, handlerCheckbox } from "../../components/FormValidations";

const Form = () => {
    const dispatch = useDispatch();
    const allDishTypes = useSelector(store => store.allDishTypes);
    const allDiets = useSelector(store => store.allDiets);
    const [record, setRecord] = useState({
        registered: false,
        response: {}
    })
    const [error, setError] = useState({title: 'Title required.', summary: 'Summary required.'});
    const [input, setInput] = useState({
    title: '',
    image: '',
    healthScore: '',
    time: '',
    summary: '',
    dishTypes: [],
    diets: [],
    ingredients: [], //Esta propiedad guarda multiples ingredient(propiedad anterior) en el array
    ingredient: '', //Esta propiedad guarda temporalmente lo que el usuario digita en el input
    instruction: '', //Esta propiedad guarda temporalmente lo que el usuario digita en el input
    instructions: [] //Esta propiedad guarda multiples instruction(propiedad anterior) en el array
  });
  useEffect(() => {
    dispatch(getDiets())
    dispatch(getDishTypes())
  },[dispatch])
   
  const handlerSubmit = (event) => {
    event.preventDefault();
    
    fetch(`${URL_BACKEND}/recipes`, {
      method: "POST",
      body: JSON.stringify(input),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
    .then(response => response.json())
    .then( res => {
      res.hasOwnProperty('error')
          ? setError({...error, register: res.error})
          : setRecord({registered: true, response: {...res, message: 'Recipe registered successfully.!'}})
    })
    .catch(err => setError({...error, register: err.message}))
  }
  
  const handlerInputChange = (event) =>{
    setInput({...input, [event.target.name]: event.target.value})
    setError(inputValidation({...input, [event.target.name]: event.target.value}))
  }
  const handlerDishType = (id) =>{
    setInput({...input, dishTypes: handlerCheckbox(id, [...input.dishTypes])});
  }

  const dishTypeIsChecked = (id) =>{
    return input.dishTypes.includes(id)
  }

  const handlerDiets = (id) =>{
    setInput({...input, diets: handlerCheckbox(id, [...input.diets])});
  }

  const dietIsChecked = (id) =>{
    return input.diets.includes(id)
  }
 //agregamos al state ingredients (array) el ingrediente que el usuario tipeo en el input(state ingredient)

  const addIngredient = (event) => {
   event.preventDefault()
    
    if (input.ingredient.length > 0 ){
      const temporary = input.ingredients;
      temporary.push({name: input.ingredient})
      
      setInput({...input, [input.ingredients]: temporary})
      setInput({...input, ingredient: ''})

    }else{
      setError({...error, ingredient: 'empty ingredient'})
    }
    
  }

  //agregamos al state instructions (array) la instruction que  el usuario tipeo en el input(state instruction)
  const addInstruction = (event) => {
    event.preventDefault()
    
    if (input.instruction.length > 0 ){
      const temporary = input.instructions;
      temporary.push({name: input.instruction})
      
      setInput({...input, [input.instructions]: temporary})
      setInput({...input, instruction: ''})

    }else{
      setError({...error, instruction: 'empty instruction'})
    }
    
  }

  const disableButton = () => Object.keys(error).length > 0;

  return (
    record.registered
      ? <DetailCard recipe={record.response}/>
      :
    <div className="formContainer">
      <Header />
      <form>
        <div>
          {/* error.register es cargado con error  generado por el backend, si lo tiene */}
          {error.register && <h2 className="errorMessage errorMessage" >{error.register}</h2>}

          <BasicInfo state={input} error={error} handleChange={handlerInputChange} />
          <CheckboxDishType dishTypes={allDishTypes} handleChange={handlerDishType} isChecked={dishTypeIsChecked}/>
          <CheckboxDiets diets={allDiets} handleChange={handlerDiets} isChecked={dietIsChecked}/>
          <Ingredients state={input} error={error} handleChange={handlerInputChange} addIngredient={addIngredient}/>
          <Instructions state={input} error={error} handleChange={handlerInputChange} addInstruction={addInstruction}/>
        </div>
        <div className="btnContainer">
        <button className="button" disabled={disableButton()} onClick={handlerSubmit}>New Recipe</button>
        </div>
      </form>
    </div>
  )
}

export default Form;