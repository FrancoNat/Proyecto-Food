import style from "./Landing.module.css";
import BtnStart from "../../components/Buttons/BtnStart";
// import imgLand from "../../Assets/cooking.png"





const Landing = () => {
    
    return(
      <main className={style.container}>
      <div className={style.card}>
        {/* <img src={imgLand} alt="fondo de landing" className={style.image} /> */}
        <h1 className={style.cardTitle}>Wellcome!</h1>
        <div className={style.cardContent}>
          On this site, you can find the best <span>recipes. </span>
          In addition to the necessary <span>ingredients </span>and <span>instructions </span>to prepare them.
        </div>
        <BtnStart />
        </div>
      </main>
    );
};


export default Landing;
        
