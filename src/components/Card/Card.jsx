import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import {useState, useEffect } from  "react"
import { addFavorite, deleteFavorite } from "../../redux/actions";

export default function Card(props) {
   const dispatch = useDispatch();
   const myFavorites = useSelector((state) => state.myFavorites);

   const [isFav, setIsFav] = useState(false);

   const handleFavorite =() => {
      if(isFav) {
         setIsFav(false); 
         dispatch(deleteFavorite(props.id))
      }
      else{
         setIsFav(true);
         dispatch(addFavorite(props))
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   
   return (
     
      <div className= {style.contenedor}>

         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }

         <button className ={style.buttonClose} onClick={props.onClose}> <img  src="https://previews.123rf.com/images/valentint/valentint1612/valentint161200989/66630585-x-icono-de-cierre-x-bot%C3%B3n-cerrar-el-sitio-web-en-el-fondo-blanco-.jpg"  height= "15 " width = "25" /> </button>

          <Link to= {`/detail/${props.id}`}>        
         <h2 className= {style.name}> {props.name} </h2>
         </Link>
         <img className = {style.imagen} src={props.image} alt="imagen" />
         <h2 className = {style.species} > { props.species} </h2>
         <h2 className = {style.gender}> {props.gender} </h2>
         


      </div>
   
   );
}
