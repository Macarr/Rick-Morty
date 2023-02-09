import style from "./SearchBar.module.css"; 
import {useState} from "react";

export default function SearchBar(props) {
   const [character, setCharacter] = useState("");

     const handleInputChange = (event) => {
      setCharacter (event.target.value);

     }

      return (
      <div>
         <input onChange={handleInputChange} className = {style.search} type='search' value ={character} />

      <button className = {style.butt} onClick={() => props.onSearch(character)}>AGREGAR</button>
      </div>
   );
}
