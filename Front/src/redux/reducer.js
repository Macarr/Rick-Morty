import { ADD_FAVORITE } from "./action-Types";
import { DELETE_FAVORITE } from "./action-Types";

const initialState ={
    myFavorites : []

};


const reducer = (state = initialState, {type, payload}) =>{
    switch (type) {
        case ADD_FAVORITE:
            return{
                    ...state,
                    myFavorites:[...state.myFavorites, payload]

            }
        case DELETE_FAVORITE:
            let filtrados = state.myFavorites.filter((char) => char.id !== payload)
            return{
                    ...state,
                    myFavorites: filtrados
            }
            
            
    
        default:
            return {
                ...state
            }
            
    }


}
export default reducer;