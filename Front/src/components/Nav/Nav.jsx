import SearchBar from "../SearchBar/SearchBar.jsx";
import style from "./Nav.module.css";
import { NavLink } from "react-router-dom";

export default function Nav(props) {

    return (
        
        <nav className = {style.nav}> 
        <div >
         <NavLink to = "/about"> ABOUT </NavLink>
         <NavLink to = "/home"> HOME</NavLink>
         <NavLink to = "/">LOGOUT</NavLink>
         <NavLink to = "/favorites">FAVORITES</NavLink>
        </div>

         <SearchBar onSearch={props.onSearch} />
       
           

        </nav>
    )

}

