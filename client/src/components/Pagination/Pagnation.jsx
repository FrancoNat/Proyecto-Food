import {useDispatch} from 'react-redux'
import { changePage } from '../../redux/actions';
import '../Pagination/Pagination.css'
import BtnNext from '../Buttons/BtnNext';

export default function Pagination({pageCount, currentPage}) {
  const dispatch = useDispatch();
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }

  //cp = currentPage
  const handlerPage = (cp) =>{
    dispatch(changePage(cp));
  }

  const handlerNext = () => {
    dispatch(changePage(currentPage + 1))
  }

  return(
    <div className="pagination">
      <section>
        <ul>
          {pages.map(page => (
            page === currentPage 
              ? <li key={page} onClick={() => handlerPage(page)} className="pageSelected">{page}</li>
              : <li key={page} onClick={() => handlerPage(page)}>{page}</li>
            ))}
        </ul>
      </section>
      <section>
        {currentPage < pageCount && <BtnNext handlerNext={handlerNext}/>}
      </section>
    </div>
  )
}