import { Link } from "react-router-dom";
import './Btns.css'


const BtnLanding = () =>{
    return(
        <Link to='/'>
          <button className="button">Landing Page</button>
        </Link>
    );
};


export default BtnLanding;