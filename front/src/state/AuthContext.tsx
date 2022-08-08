import { createContext, useReducer, Context, FC } from "react";
import { State } from "../types/reducer";

import { AuthReducer } from "./AuthReducer";

const initialState: State = {
  user: null,
  isFetching: false,
  error: false,
};

interface Props {
  children: JSX.Element;
}

export const AuthContext: Context<State> = createContext(initialState);

export const AuthContextProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
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
