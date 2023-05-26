import { Link } from 'react-router-dom'
import './Btns.css';

const BtnSeeMore = () => {
    return(
      <Link to='/create'>
        <button className="button">New Recipe</button>
      </Link>
    )
}

export default BtnSeeMore