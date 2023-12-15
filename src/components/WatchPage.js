import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
import { addMessages } from "../utils/chatSlice";

const WatchPage = () => {
  const [searchParms] = useSearchParams();
  const [comment, setComment] = useState("");

  // console.log(searchParms.get("v"));
  // searchParms.get(v)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const handleAddedComment = () => {
    dispatch(
      addMessages({
        name: "Priyesh Soni",
        message: comment,
      })
    );
    setComment("");
  };

  return (
    <div className="flex flex-col w-[99%] ">
      <div className="flex ">
        <div>
          <iframe
            width="1000"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParms.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
          <div className="w-full border border-black flex justify-around  rounded-lg p-1">
            <input
              className="w-full p-2 bg-slate-100 border rounded-lg  border-transparent"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Chat..."
            />
           {comment.length!==0&& <button className=" border border-transparent rounded-lg w-1/4 font-bold " onClick={handleAddedComment}>
             <img className="object-cover h-10 w-96 " alt="chat-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo81aetlXTYt_IrQ7MbCHzfnEaHmLf8sHr5Z9MvDJq4JBNPv9lJRR2K4SE0lCRMsoJMXo&usqp=CAU"/>
            </button>}
          </div>
        </div>
      </div>
      <CommentContainer />
    </div>
  );
};

export default WatchPage;
