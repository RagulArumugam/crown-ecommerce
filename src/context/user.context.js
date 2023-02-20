import React, { useState, createContext, useEffect, useReducer } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase";

// as the acutal value
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

export const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  // when the component mounts , this function knows the user is authenticated or not

  const setCurrentUser = (user) => {
    disptach({ type: USER_ACTION_TYPES, payload: user });
  };

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChangedListener((user) => {
  //     if (user) {
  //       createUserDocumentFromAuth(user);
  //     }
  //     setCurrentUser(user);
  //   });
  //   return unsubscribe;
  // }, []);

  // const [currentUser, setCurrentUser] = useState(null);
  const [{ currentUser }, disptach] = useReducer(userReducer, INITIAL_STATE);
  console.log(currentUser);
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
