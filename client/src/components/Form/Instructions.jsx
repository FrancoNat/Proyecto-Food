import BtnAdd from "../Buttons/BtnAdd";


const Instructions = ({state, error, handleChange, addInstruction}) =>{
    return(
        <div className="formContainer">
          <h3 className="formNote">Add instructions.</h3>
          <input type="text" placeholder="Instruction:" name="instruction" value={state.instruction} onChange={handleChange} />
          {error.instruction && <p className="errorMessage errorMessage">{error.instruction}</p>}
          <BtnAdd add={addInstruction}/>
          {state.instructions.map((ins, index) => 
            <input type="text" value={ins.name} key={index} disabled/>
            )
          }
        </div>
    )
}

export default Instructions;