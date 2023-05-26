import { Link } from "react-router-dom";

const BtnKnowMore = ({idRecipe}) => {
    return(
      <Link to={`/detail/${idRecipe}`}>
       <button className="button">Know more</button>
      </Link>
    );
};

export default BtnKnowMore;