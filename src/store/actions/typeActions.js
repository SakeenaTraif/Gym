import instance from "./instance";
import * as types from "../actions/types";

export const fetchTypes = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/types");
      dispatch({
        type: types.FETCH_TYPE,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};