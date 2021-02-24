import instance from "./instance";
import * as types from "../actions/types";

export const fetchGyms = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/gyms");
      dispatch({
        type: types.FETCH_GYM,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const addGym = (newGym) => {
  return async (dispatch) =>{
    
    try {
      const fromData = new FormData();
      for (const key in newGym) fromData.append(key, newGym[key]);
      const res = await instance.post('/gyms',fromData);
      dispatch({
        type: types.ADD_GYM,
        payload: { newGYM: res.data},
      });
      
    } catch (error) {
      console.log(error);
    }
  };
};
 