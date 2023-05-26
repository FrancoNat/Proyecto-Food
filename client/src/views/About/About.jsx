import'./About.css';
import miImage from '../../Assets/foto cv.jpg';
import reactred from '../../Assets/Refencias.png'
import BtnBack from "../../components/Buttons/BtnHome"


const About = () =>{
    return(
   <main className="container">
      <div className="card">
       <img src={miImage} alt="Profile Photo" className="cardImage" />
        <h1 className="cardTitle">Gracias por la atención!</h1>
        <div className="cardContent">
         Este sitio fue realizado por Franco Bogado, con las siguientes tecnologías <span>React, </span>
          Redux, <span> Express, </span> HTML, <span>CSS, </span>SQL, Node y JavaScript
        </div>
        <img src={reactred} alt="foto de tecnologias" className='reactredux' />
        <BtnBack />
       </div>
      </main>
        
    );
};


export default About;