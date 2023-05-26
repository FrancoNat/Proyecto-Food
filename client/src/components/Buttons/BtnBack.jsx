import React from 'react';
import { Link } from 'react-router-dom';
import './Btns.css'


const BtnBack = () => {
   return(
   
   <Link to='/home'>
        <button className='btnRoundBack'>Home</button>
    </Link>
   )
};

export default BtnBack;