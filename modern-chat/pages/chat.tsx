import Head from "next/head";
import React from "react";
import Leftbar from "../components/Leftbar";
import { Context } from "../context";
import { useRouter } from "next/router";
import { BiSearchAlt2 } from "react-icons/bi";
import friend1 from "../assets/friends/friend1.jpeg";
import friend2 from "../assets/friends/friend2.jpeg";
import friend3 from "../assets/friends/friend3.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Convo from "../components/Convo";
import Link from "next/link";

const Chat = () => {
  const { username, id } = React.useContext(Context);
  const router = useRouter();
  // const { id } = router.query;
  const redirect = (id: string) => {
    router.push(`${id}`);
  };
  const chatData = [
    {
      id: 1,
      avatar: friend1,
      name: "friend 1",
      lastMessage: "hello",
      lastMessageTime: "12:00",
      unreadMessages: 0,
    },
    {
      id: 2,
      avatar: friend2,
      name: "friend 2",
      lastMessage: "hello",
      lastMessageTime: "12:00",
      unreadMessages: 0,
    },
    {
      id: 3,
      avatar: friend3,
      name: "friend 3",
      lastMessage: "hello",
      lastMessageTime: "12:00",
      unreadMessages: 0,
    },
  ];
  const onlineFriends = [
    {
      id: 1,
      avatar: friend1,
      name: "friend 1",
    },
    {
      id: 2,
      avatar: friend2,
      name: "friend 2",
    },
    {
      id: 3,
      avatar: friend3,
      name: "friend 3",
    },
    {
      id: 4,
      avatar: friend1,
      name: "friend 1",
    },
    {
      id: 5,
      avatar: friend2,
      name: "friend 2",
    },
    {
      id: 6,
      avatar: friend3,
      name: "friend 3",
    },
  ];
  return (
    <div className="flex">
      <Head>
        <title>Dashboard</title>
      </Head>
      <Leftbar />
      <div className="flex w-screen">
        <div className="w-[380px] flex flex-col justify-start items-start  bg-[#303841]">
          <h1 className="text-3xl text-white p-5 text-left">Chats</h1>
          <div className=" m-2 flex bg-[#262E35] rounded-lg">
            <BiSearchAlt2 className="h-10 w-10   p-3 rounded-lg cursor-pointer" />
            <input
              className="w-60 h-10 bg-[#262E35] text-white"
              placeholder="Search"
            />
          </div>

          <div className="w-full flex justify-center items-center flex-row">
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {onlineFriends.map((friend) => (
                <SwiperSlide className=" cursor-pointer">
                  <Link href={`/chat/${friend.id}`} className="flex flex-col hover:bg-slate-400 transition duration-300  w-[95%] rounded-lg p-1">
                    <div className="flex justify-center items-center">
                      <img
                        src={`${friend.avatar.src}`}
                        alt="friend1"
                        className="h-14 w-14 rounded-full"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center ">
                      <div className="text-2xl text-white">{friend.name}</div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="text-2xl text-white p-5 text-left">Recent</div>
          <div className="text-4xl text-black w-full flex justify-center items-center flex-col">
            {chatData.map((chat) => (
              <Link href={`/chat/${chat.id}`} className=" cursor-pointer flex hover:bg-slate-400 transition duration-300  gap-3 w-[95%] rounded-lg">
                <div className="flex justify-center items-center h-20">
                  <img
                    src={`${chat.avatar.src}`}
                    alt="friend1"
                    className="h-14 w-14 rounded-full"
                  />
                </div>
                <div className="flex flex-col justify-center items-center h-20">
                  <div className="text-2xl text-white">{chat.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* <Convo /> */}
        <div className="bg-[#262E34] h-full w-full">

        </div>
      </div>
    </div>
  );
};

export default Chat;
