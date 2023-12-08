import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div>
      <h1 className="font-bold flex">Main Container</h1>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
