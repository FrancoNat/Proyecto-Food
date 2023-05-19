import { useState } from "react";

const Form = () => {

    const [form, setForm] = useState({
        email:"",
        name:"",
        phone:""
    })

    const [errors, setErrors] = useState({
        email:"",
        name:"",
        phone:""
    })
     
    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        validate({...form, [property]:value})
       
        setForm({...form, [property]:value})
    }

    const validate = (form) => {
      
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)){
            setErrors({...errors,email:""})
        }else{
            setErrors({...errors,email:"Hay un error en el email"})
        }
        if(form.email==="") setErrors({...errors,email:""})
    }

        
    return(
        <form>
           <div>
            <label>Email: </label>
            <input type="text" value={form.email} onChange={changeHandler} name="email" />
            {errors.email && <span>{errors.email}</span>}
           </div> 

           <div>
            <label>Name: </label>
            <input type="text" value={form.name} onChange={changeHandler} name="name" />
           </div> 

           <div>
            <label>Phone: </label>
            <input type="text" value={form.phone} onChange={changeHandler} name="phone" />
           </div> 

           <button type="submit">Submit</button>
        </form>
    );
};


export default Form;