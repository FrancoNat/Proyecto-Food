import './Btns.css'

const BtnAdd = ({add}) =>{
    return (
        <button className="btnRoundBack" onClick ={add}>Add</button>
    );
};

export default BtnAdd;