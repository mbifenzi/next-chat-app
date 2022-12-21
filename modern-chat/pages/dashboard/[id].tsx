import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Leftbar from "../../components/Leftbar";
import { Context } from "../../context";
import Image from "next/image";
import face from "../../assets/face.jpg";
import { RiRadioButtonLine } from "react-icons/ri";
import { BiUser } from "react-icons/bi";

const dashboard = () => {
  const { username, firstName, lastName } = React.useContext(Context);
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="flex">
      <Head>
        <title>dashboard</title>
      </Head>
      <Leftbar />
      <div className="w-[380px] h-screen flex justify-center items-center bg-[#303841]">
        <div className="w-full flex flex-col justify-between items-center h-full">
          <div>
            <Image
              src={face.src}
              alt="test"
              width={200}
              height={200}
              className=" rounded-full p-3 cursor-pointer"
            />
            <div className="flex te justify-center items-center gap-4 align-middle">
              <RiRadioButtonLine className="text-4xl text-green-500 w-4 h-4 align-middle" />
              <h1 className="text-xl text-white text-center ">
                {firstName} {lastName}
              </h1>
            </div>
          </div>
          <div className=" gap-2 flex justify-center items-center text-xl text-center text-white bg-[#36404A] w-4/5 rounded-lg ">
            <BiUser className="h-4 w-4 text-[#A6B0CF] hover:bg-[#3E4A56] rounded-lg cursor-pointer" />
            <h1>about</h1>
          </div>
        </div>
      </div>
      <div className="w-full h-screen bg-[#262E35]">
        <div className="flex justify-center items-center h-20">
          <div className="text-4xl text-white">dashboard</div>
        </div>
        <div className="flex justify-center items-center h-full">
          <div className="text-4xl text-white">dashboard</div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
