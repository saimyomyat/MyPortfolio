import React from 'react'
import { BsMessenger } from "react-icons/bs";

const Messenger = () => {
  return (
    <div
      className=" select-none fixed bottom-0 lg:right-28  right-8 z-[999] bg-cyan-600 w-16 h-16 rounded-full cursor-pointer
    flex items-center justify-center animate-bounce
    "
    >
      <a href="https://m.me/sai.m.myat.792" target=' _blank'>
        <BsMessenger className=" text-3xl  text-white" />
      </a>
    </div>
  );
}

export default Messenger