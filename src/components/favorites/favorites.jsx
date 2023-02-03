import { useSelector } from "react-redux";
import style from "./favorites.module.css"
import { Link } from "react-router-dom";

const Favorites = () =>{
 const {myFavorites} = useSelector (state => state)
return(
   <div>
        {
                myFavorites.map((character)=> {
                    return(
                        <div className= {style.contenedor}>
                            

                            <Link to= {`/detail/${character.id}`}>        
                            <h2 className= {style.name}> {character.name} </h2>
                            </Link>
                            <img className = {style.imagen} src={character.image} alt="character.name" />
                            <h2 className = {style.species} > { character.species} </h2>
                            <h2 className = {style.gender}> {character.gender} </h2>



                            
                            
                            
                            
                        
                        
                         </div>
                    )

                })


        }

   </div>
)

}

export default Favorites;