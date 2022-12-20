
import React, { useState, createContext, useContext } from "react";

const getUserData =  ()  =>{

  var data : ContextProps =  {
    username: "",
    avatar: "",
  
    }
    return data
  // axios.get("http://localhost:3000/api/user").then((res) => {
     // data = res.data;
  // }).catch((err) => {
    // o to
  }

    

interface ContextProps {
  username: string;
  // chat: {message: string, friend: string}[],
  // friends: string[];
  avatar: string;
  // rooms: string[];
  // setUsername : (name : string) => void,
  // setChat : (chat : {message: string, friend: string}[]) => void,
  // setFriends : (friends : string[]) => void,
  // setAvatar : (avatar : string) => void,
  // setRooms : (rooms : string[]) => void,
}
 
export const Context = createContext(getUserData());

// export const userContext = () => useContext(Context);

export const ContextProvider = ({children}: {children:React.ReactNode}) => {
  
  const userContext = {
    username: "",
    // chat: [ {message: "", friend: ""}],
    // friends: [""],
    avatar: "",
    // rooms: [""],
    // setUsername,
    // setFriends,
    // setChat,
    // setAvatar,
    // setRooms,

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