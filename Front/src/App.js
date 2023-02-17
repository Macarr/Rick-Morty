import './App.css'
import Nav from "./components/Nav/Nav.jsx"
import Cards from './components/Cards.jsx'
import {useState, useEffect} from "react";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/favorites/favorites';

function App () {
  const [characters, setCharacters] = useState([])
  const location = useLocation()
  const [access, setAccess] = useState(false);
  const username = "rodriguezruccimacarena@gmail.com";
  const password = "123asd";
  const navigate = useNavigate()

  const login = (userData) => {
    if(userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
   }
  }
  useEffect(() => {
    !access && navigate('/');
 }, [access]);
  
  const onSearch = (character)=> {
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.id) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('No hay personajes con ese ID');
         }
      })
      .catch(err => console.log(err))

  }

  const onClose = (id) => {
    setCharacters( characters.filter(character => character.id !== id))
  


  }

  return (
    
    <div className='App' style={{ padding: '25px' }}>
                 
        
          
          {location.pathname === "/" ? <Form login={login}/> : <Nav onSearch={onSearch} /> }
      
        <Routes>
          <Route path = "/home" element = {<Cards onClose = {onClose} characters = {characters} />} />
          <Route path = "/about" element = {<About/>} /> 
          <Route path = "/detail/:detailId/" element= {<Detail/>}/>
          <Route path = "/favorites" element = {<Favorites/>}/>

        </Routes> 
       
          
    </div>
    
  )
}

export default App
