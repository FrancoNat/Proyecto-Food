import BtnAbout from "../Buttons/BtnAbout";
import BtnLanding from "../Buttons/BtnLanding";
import "../NavBar/NavBar.css"


const NavBar = () =>{
    return(
        <div className="LandingContainer">
            <BtnLanding />
          <div className="AboutContainer" >
            <BtnAbout />
          </div>
        </div>
        
    );
};

export default NavBar;