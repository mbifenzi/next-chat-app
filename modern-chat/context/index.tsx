
import React, { useState, createContext, useContext } from "react";

const getUserData = () =>{
  
  var data : ContextProps =  {
    username: "mbifenzi",
    firstName: "mohamed",
    lastName: "bifenzi",
    avatar: "",
    chat: [],
    friends: [],
    rooms: [],
    id: 1,
  }
  // axios.get("http://localhost:3000/api/user").then((res) => {
     // data = res.data;
  // }).catch((err) => {
    // o the error
    return data
  }

    

interface ContextProps {
  username: string;
  firstName: string;
  lastName: string;
  chat: {message: string, friend: string}[],
  friends: string[];
  avatar: string;
  rooms: string[];
  id: number;
}
 
export const Context = createContext(getUserData());

// export const userContext = () => useContext(Context);

export const ContextProvider = ({children}: {children:React.ReactNode}) => {
  
  const userContext = {
    username: "",
    firstName: "",
    lastName: "",
    chat: [ {message: "", friend: ""}],
    friends: [""],
    avatar: "",
    rooms: [""],
    id: 1,
  }
  
  return (
    <Context.Provider
      value={userContext}
    >
    </Context.Provider>
  );
};