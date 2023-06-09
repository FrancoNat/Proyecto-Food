import '../Form/inputForm.css';

const CheckboxDishType = ({dishTypes, handleChange, isChecked}) =>{
    return (
        <div className="formContainer">
          <div className="checkboxContainer">
            <h3>Choose dish types:</h3>
             {Array.isArray(dishTypes) && dishTypes.map(dt => (
              <div key={dt.id}>
               <input
                type="checkbox"
                id={`check-${dt.id}`}
                className="checkbox"
                onChange={() => handleChange(dt.id)}
                defaultChecked={isChecked(dt.id)}//Includes retorna true o false
                />
                 <label htmlFor={`check-${dt.id}`}>
                {dt.name}
              </label>
            </div>
          ))}
        </div>
      </div>
    )
}

export default CheckboxDishType;
                