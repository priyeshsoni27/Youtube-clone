import React from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addMessages } from "../utils/chatSlice";
import { randomMessages, randomNameGenerate } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatItems = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessages({
          name: randomNameGenerate(),
          message: randomMessages(20) + " 🚀 ",
        })
      );
    }, 9000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="m-2 border border-black p-2 w-full h-[500px] bg-slate-100 rounded-lg overflow-y-auto flex flex-col-reverse">
      {chatItems.map((items, index) => (
        <ChatMessages key={index} name={items.name} message={items.message} />
      ))}
      
    </div>
  );
};

export default LiveChat;
