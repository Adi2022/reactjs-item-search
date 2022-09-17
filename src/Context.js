import { createContext, useReducer } from "react";
import React, { useEffect } from "react";
import reducer from './reducer';
const API = "https://jsonplaceholder.typicode.com/users";

const AppContext = createContext();
const initialState = {
  usersData: [],
  
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer,initialState)


  const getApiData = async (url) => {
    try {
      const resposne = await fetch(url);
      const data = await resposne.json();
    
      dispatch({
        type: "GET_USERS",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApiData(API);
   
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export { AppProvider, AppContext };
