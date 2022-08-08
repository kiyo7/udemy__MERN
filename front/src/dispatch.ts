import axios from "axios";
import { Dispatch } from "react";
import { DispatchType } from "./types/reducer";

export const loginCall = async (
  user: any,
  dispatch: Dispatch<DispatchType>
) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("auth/login/", user);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: "LOGIN_ERROR", payload: err });
  }
};
