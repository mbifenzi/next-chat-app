
import React, { useState, createContext, useContext } from "react";

const getUserData = () =>{

  var data : ContextProps =  {
    username: "mbifenzi",
    avatar: "",
    chat: [],
    friends: [],
    rooms: [],
  
    }
    return data
  // axios.get("http://localhost:3000/api/user").then((res) => {
     // data = res.data;
  // }).catch((err) => {
    // o the error
  }

    

interface ContextProps {
  username: string;
  chat: {message: string, friend: string}[],
  friends: string[];
  avatar: string;
  rooms: string[];
}
 
export const Context = createContext(getUserData());

// export const userContext = () => useContext(Context);

export const ContextProvider = ({children}: {children:React.ReactNode}) => {
  
  const userContext = {
    username: "",
    chat: [ {message: "", friend: ""}],
    friends: [""],
    avatar: "",
    rooms: [""],
  }

  function setUsername(username: string) {
    userContext.username = username;
  }
  
  return (
    <Context.Provider
      value={userContext}
    >
    </Context.Provider>
  );
};