import { Link } from "react-router-dom";
import './Btns.css'


const BtnAbout = () =>{
    return(
    <Link to="/about">
       <button className="button">About</button>
    </Link>
  );
};


export default BtnAbout;