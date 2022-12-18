
import React, { useState, createContext, useContext } from "react";

interface ContextProps {
  username: string;
  chat: {message: string, friend: string}[],
  friends: string[];
  avatar: string;
  rooms: string[];
}
const Context = createContext<ContextProps>({
  username: "pp",
  chat: [ {message: "", friend: ""}],
  friends: [""],
  avatar: "",
  rooms: [""],
});

export const userContext = () => useContext(Context);

export const ContextProvider = ({children}: {children:React.ReactNode}) => {
  const [username, setUsername] = useState("");
  const [chat, setChat] = useState([{message: "", friend: ""}]);
  const [friends, setFriends] = useState([""]);
  const [avatar, setAvatar] = useState("");
  const [rooms, setRooms] = useState([""]);
  return (
    <Context.Provider
      value={{
        username,
        chat,
        friends,
        avatar,
        rooms,
      }}
    >
    </Context.Provider>
  );
};