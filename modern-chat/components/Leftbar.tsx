import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import face from "../assets/face.jpg";
import { BiUser } from "react-icons/bi";
import { BsChatDots } from "react-icons/bs";
import { FiUsers } from  "react-icons/fi";
import { BiSmile } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { useRouter } from "next/router";
import dashboard from "../pages/dashboard/[id]";
import { Context } from "../context";


const icons = "h-14 w-14 text-[#A6B0CF] hover:bg-[#3E4A56] p-3 rounded-lg"

const Leftbar = () => {
  const { username, id } = React.useContext(Context);
  const router = useRouter();
  const redirect = (id:number) => {
    router.push(`/dashboard/${id}`);
  }
  const khriwa = () => {
    <div>
      <h1>khriwa</h1>
    </div>
  }
  return (
    <div
      className=" w-20 h-screen bg-[#36404A] flex flex-col 
      justify-around drop-shadow-lg"
    >
      <div className="flex justify-center items-center">
        <Image src={logo.src} alt="test" width={40} height={40} />
      </div>
      <div
        className="w-full h-full flex flex-col justify-center 
              space-y-4 items-center"
      >
        <BiUser className={icons} onClick={() => redirect(id)}/>
        <BsChatDots className={icons}/>
        <FiUsers className={icons}/>
        <BiSmile className={icons}/>
        <FiSettings className={icons}/>
        
      </div>
      <div>
        <Image src={face.src} alt="test" width={100} height={100} 
        className=" rounded-full p-3"/>
      </div>
    </div>
  );
};

export default Leftbar;
