import { Link } from "react-router-dom"
import "../NavBar/NavBar.css"


const NavBar = () =>{
    return(
        <div className="mainContainer">
            <Link to="/">Landing Page</Link>
            <Link to="/home">Home</Link>
            <Link to="/detail">Detail</Link>
            <Link to="/create">Form</Link>
        </div>

    );
};

export default NavBar;