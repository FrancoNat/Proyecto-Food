import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DetailCard from '../../components/DetailCard/DetailCard'

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const recipe = useSelector(store => store.recipeDetail);
  
    useEffect(() => {
        dispatch(recipe(id))
    }, [dispatch, id])
    
    return(
        <main>
      {
           Object.keys(recipe).length === 0
            ?  null  
            : <DetailCard recipe={recipe}/>
        
      }
      
       </main>
    );
};


export default Detail;