import { Dispatch } from "react";

export interface DispatchType {
  type: "LOGIN_START" | "LOGIN_SUCCESS" | "LOGIN_ERROR";
  payload?: any;
}

export interface State {
  user: any;
  isFetching: boolean;
  error: any;
  dispatch?: any;
}
