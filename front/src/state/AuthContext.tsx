import { createContext, useReducer, Context, FC, useEffect } from "react";
import { State } from "../types/reducer";

import { AuthReducer } from "./AuthReducer";

const initialState: State = {
  user: JSON.parse(localStorage.getItem("user") as string) || null,
  isFetching: false,
  error: false,
};

interface Props {
  children: JSX.Element;
}

export const AuthContext: Context<State> = createContext(initialState);

export const AuthContextProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
