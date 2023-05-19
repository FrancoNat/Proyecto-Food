import style from "./Landing.module.css";
import { Link } from 'react-router-dom'
import video from "../../Assets/Video.mp4"




const Landing = () => {
    
    return(
        <main className={style.container}>
           <video className={style.video} autoPlay loop muted>
              <source src={video} type='video/mp4'></source> 
           </video>  
          <Link to="/home">
            <button>Ir a Home</button>
          </Link>
        
        </main>
    );
};


export default Landing;
        
