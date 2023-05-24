const CheckboxDiets = ({diets, handleChange, isChecked}) => {
    return(
           <div>
             <div>
               <h3>Choose diets:</h3>
                {Array.isArray(diets) && diets.map(dt => (
                 <div key={dt.id}>
                 <input
                 type="checkbox"
                 id={`check-${dt.id}`}
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
 
 export default CheckboxDiets;
                 