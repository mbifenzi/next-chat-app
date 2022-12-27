import { useRouter } from "next/router";
import React from "react";

const Convo = () => {
  const router = useRouter();
  const { id } = router.query;
  const sender = "me";
  const message = "hello";
  const time = "12:00";
  
  // 
  //fetch chat data using that id
  // store chat data in state
  // render chat data
  return (
    <div className="w-full h-full bg-[#262E35]">
      <div className="flex justify-center items-center h-20">
        <div className="text-4xl text-white">{id}</div>
      </div>
      <div className="flex justify-center items-center h-full">
        <div className="text-xl text-white">

        </div>
      </div>
    </div>
  );
};

export default Convo;
