import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerUser,
} from "./userRedux";
import { publicRequest, userRequest } from "../requestMethod";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const register = async (dispatch, user) => {
  try {
    const res = await userRequest.post("/auth/register", user);
    dispatch(registerUser(res.data));
  } catch (err) {}
};
