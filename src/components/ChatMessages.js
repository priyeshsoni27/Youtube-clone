import React from "react";

const ChatMessages = ({ name, message }) => {

  return (
    <div className="flex items-center shadow-sm p-2">
    <img
        className="h-6 m-1 col-span-1"
        alt="profile"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <p className="p-2 font-bold">{name}</p>
      <p>{message}</p>
    </div>
  );
};

export default ChatMessages;
