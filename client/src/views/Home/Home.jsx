import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../redux/actions";
// import btnNew from '../../components/Buttons/NewRec';
import { Link } from "react-router-dom";


const Home = () => {
  const PAGINATOR_SIZE = 9;
  const dispatch = useDispatch();
  const allRecipes = useSelector(store => store.allRecipes);
  const currentPage = useSelector(store => store.currentPage);
    
    useEffect(()=>{
        dispatch(getAll());
    },[dispatch])

    const paginatedRecipes = () =>{
        //allRecipes es asincrono, apenas carga Home es null, por lo tanto no se le puede hacer slice
        if (Array.isArray(allRecipes)) {
          const offset = (currentPage-1) * PAGINATOR_SIZE;
          const limit = offset + PAGINATOR_SIZE;
          return allRecipes.slice(offset, limit)
        }else{
          return []
        }
    }
    
    const pageCount = () => {
        if (Array.isArray(allRecipes)) {
          return Math.ceil(allRecipes.length / PAGINATOR_SIZE)
        }else{
          return 0;
        }
    }

    return(
        <div>
           <div>
            <header>
             <Link to="/create">
               <button>Nueva Receta</button>
             </Link>
            </header>
            <main>
             {/* <SearchBar />
             <Filters />
             <Cards recipes={paginatedRecipes()}/>
             {Array.isArray(allRecipes) && allRecipes.length !== 0 && <Pagination pageCount={pageCount()} currentPage={currentPage}/>} */}
            </main>
           </div>
        </div>
    );
};


export default Home;
           