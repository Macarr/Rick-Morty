import Card from './Card/Card';

export default function Cards(props) {
   const { characters } = props;
   
   return <div>
    
     {characters.map ((char)=>  {
       return < Card 
       key = {char.id}
       name = {char.name} 
       species = {char.species} 
       gender = {char.gender} 
       image = {char.image}
       onClose = {() => props.onClose(char.id)}
       id= {char.id} />
     }
     )
       }
   </div>;
}
