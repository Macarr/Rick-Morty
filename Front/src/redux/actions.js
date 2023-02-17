import { ADD_FAVORITE, DELETE_FAVORITE } from "./action-Types";
import axios from "axios";

export const addFavorite = (character) => {
  return async (dispatch) => {
    const response = await axios.post(
      "http://localhost:3001/rickandmorty/fav",
      character
    );
    const data = response.data;
    return dispatch({
      type: ADD_FAVORITE,
      payload: data,
    });
  };
};

export const deleteFavorite = (id) => {
  return async (dispatch) => {
    const response = await axios.delete(
      `http://localhost:3001/rickandmorty/fav/${id}`
    );
    const data = response.data;
    return dispatch({
      type: DELETE_FAVORITE,
      payload: data,
    });
  };
};
