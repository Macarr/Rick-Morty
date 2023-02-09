import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Detail = ()=> {
 const {detailId} = useParams();
 const [character, setCharacter] = useState({});

 useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

 return (
    <div>
        <button>
        <NavLink to={"/home"}> HOME </NavLink>
        </button>
    <h1>{character?.name} </h1>
    <p>{character?.status}</p>
    <p>{character?.species}</p>
    <p>{character?.gender}</p>
    <p>{character?.origin?.name}</p>
    <img src={character?.image} alt="" />
    </div>
  
  // el ? es un condicional que le va a preguntar al estado si hay algo adentro 
  //porque cuando se cargan datos al estado puede haber una demora, y si en sos 
  //segundos quiero mostras la informacion va a estar vacio y se rompe la pagina 
 )

}

export default Detail;
