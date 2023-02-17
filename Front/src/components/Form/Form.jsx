import {useState} from "react";
import validation from "./Validation";
import style from "./Form.module.css";

const Form = ({login}) => {
 const [userData, setUserData] = useState({ username: "", password: "" });

 const [errors, setErrors] = useState ({ username: "", password: "" })
    
 const handleInputChange = (event) => {
        const propiedades = event.target.name;
        const value = event.target.value;
        setUserData({
            ...userData,
            [propiedades]:value
        })
        
        setErrors(
            validation({
                ...userData,
                [propiedades]:value
            })
        )
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        login(userData)

    }

   
  return (
    
    <form onSubmit={handleSubmit}> 

          <div className={style.contenedor}>
            <label htmlFor="username" >Username:</label>
      
            <input type="text" 
             name="username" 
             value={userData.username} 
             onChange={handleInputChange}/>


            {errors.username && <p style={{color:"red"} }>{errors.username}</p>}

            <label htmlFor="password" > Password: </label>
              <input type="text" 
              name="password" 
              value={userData.password} 
              onChange={handleInputChange}/>
              {errors.password && <p style={{color:"red"} }>{errors.password}</p>} 

                    
            <button>LOGIN</button>
            </div>
    </form>
    
  )

}
export default Form;