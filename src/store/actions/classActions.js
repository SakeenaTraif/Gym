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

export const fetchClass = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/classes");
      dispatch({
        type: types.FETCH_CLASS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const addClass = (newClass) => {
  return async (dispatch) => {
    try {
      const fromData = new FormData();
      for (const key in newClass) fromData.append(key, newClass[key]);
      const res = await instance.post(
        `gyms/${newClass.gymId}/classes`,
        fromData
      );
      dispatch({
        type: types.ADD_CLASS,
        payload: { newClass: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
