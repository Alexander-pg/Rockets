import {Link} from "react-router-dom"
import styleMenu from "../components-style/menu-style.css"
import logo from "./SpaceX.png"

export default function Menu(){
    return(
        <div className="navBar">
            <div className="leftElements">
               <p> <Link className="link" to="/">XplorationX</Link></p> 
               <p> <Link className="link" to="/falcon1">Falcon 1</Link></p>
               <p> <Link className="link" to="/falcon9">Falcon 9</Link></p>
               <p> <Link className="link" to="/falconheavy">Falcon heavy</Link></p>
               <p> <Link className="link" to="/starship">Starship</Link></p>
            </div>

            <div className="rightElements">
                <p><Link className="link" to="/history">History</Link></p>
                <p><Link className="link" to="/Info">Info</Link></p>
            </div>
               
        
            <div>

            </div>
        </div>
    )
}