import Logo1 from "../../Assets/Logo1.svg"
import Logo2 from "../../Assets/Logo2.svg"
import Logo3 from "../../Assets/Logo3.svg"
import {Link} from "react-router-dom";
import BulpOn from "../../Assets/BulpOn.svg"
import BulpOff from "../../Assets/BulpOff.svg"
import { useState } from "react";

const Navbar = ({Theme}) => {
    const [Bulp, setBulp] = useState(true)
    const LOGO = [Logo1,Logo2,Logo3]
    const random = Math.floor(Math.random()*LOGO.length)

    return (
        <div className="Navbar">

            <div className="Navbar_Logo">

               <Link className="Link" to="/">
                <img className="NavbarImg" src={LOGO[random]} alt="Logo" width="100%"/>
               </Link>   

               <div className="Theme">
                 <img onClick={()=>{setBulp(!Bulp); Theme("Hi Man",Bulp)}} src={Bulp? BulpOn : BulpOff} alt="Bulp" width="100%" height="100%"/>
               </div>

            </div>

            <div className="Navbar_Buttons">
                <button><Link className="Link" to="/">Home</Link></button>
                <button><Link className="Link" to="/India">India</Link></button>
                <button><Link className="Link" to="/Hollywood">Hollywood</Link></button>
                <button><Link className="Link" to="/Technology">Technology</Link></button>
                <button><Link className="Link" to="/Fitness">Fitness</Link></button>
                <button><Link className="Link" to="/Food">Food</Link></button>
            </div>
            
        </div>
    )
}

export default Navbar