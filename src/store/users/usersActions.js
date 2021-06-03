import { SET_USERS } from "./usersTypes";
import { API } from "../../utils/constants";

export const setUsers = (payload) => ({
  type: SET_USERS,
  payload,
});

export const getUsers = () => async (dispatch) => {
  try {
    const res = await fetch(API);
    if (!res.ok) {
      throw new Error("Проверьте URL");
    }
    const response = await res.json();
    dispatch(setUsers(response));
  } catch (error) {
    alert(`Возникла проблема с вашим fetch запросом: ${error.message}`);
  }
};
