import './Btns.css';

const BtnNext = ({handlerNext}) => {
   return(
    <button className="btnRoundBack" onClick={handlerNext}>Next</button>
   )
}

export default BtnNext;