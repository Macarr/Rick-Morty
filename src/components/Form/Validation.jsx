const validation = (userData) => {
    let errors = {};

    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.username)) {
        errors.username = "El email ingresado es inválido"
    } 
    if(!userData.username){ 
        errors.username = "Este campo no puede estar vacio"

    }
    if(userData.username.length > 35){
        errors.username = "El email no puede superar los 35 caracteres"
    }
 
    if(!userData.password.match(/\d/)){
        errors.password = "La contraseña debe contener al menos un numero"

    }
    if(userData.password.length <6 || userData.password.length >10 ){
        errors.password = "La contraseña debe tener entre 6 y 10 caracteres"
    }
return errors;
}
export default validation;