import { Link } from "react-router-dom";

const BtnStart = () => {
    return(
      <Link to="/home">
       <button className="button">Start</button>
      </Link>
    );
};

export default BtnStart;