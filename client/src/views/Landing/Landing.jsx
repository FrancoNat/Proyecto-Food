import style from "./Landing.module.css";
import BtnStart from "../../components/Buttons/BtnStart";
import imgLand from "../../Assets/cooking.png"





const Landing = () => {
    
    return(
      <main className={style.container}>
      <div className={style.card}>
        <img src={imgLand} alt="fondo de landing" className={style.image} />
        <h1 className={style.cardTitle}>Bienvenido!</h1>
        <div className={style.cardContent}>
          Esta pagina web fue creada por Franco Bogado, podes encontrar las mejores <span>recetas. </span>
          Además los ingredientes <span>necesarios </span> y  <span>instrucciones</span> para prepararlos.
        </div>
        <BtnStart />
        </div>
      </main>
    );
};


export default Landing;
        
