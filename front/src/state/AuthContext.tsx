import { createContext, useReducer, Context, FC } from "react";
import { State } from "../types/reducer";

import { AuthReducer } from "./AuthReducer";

const initialState: State = {
  // user: null,
  user: {
    _id: "62f0d9508e0947d8e65b2a1e",
    username: "wawa",
    email: "tyutyu@test.com",
    password: "$2b$10$0y5wdhr.IMWCQZ3OPRCMauiqLTKMXgKihldH1S9c9qI1IpvJwSLky",
    profilePicture: "/person/1.jpeg",
    coverPicture: "",
    followers: [],
    followings: [],
    isAdmin: false,
  },
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
