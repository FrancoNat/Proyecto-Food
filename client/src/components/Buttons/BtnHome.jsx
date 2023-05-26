import { Link } from "react-router-dom";
import './Btns.css'

const btnHome = () => {
    return(
        <Link to="/home">
           <button className="button">Home</button>
        </Link>
    );
};

export default btnHome;