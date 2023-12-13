import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router";
// import Demo from "./Demo";

const Body = () => {
  return (
    <div className="flex">
      <SideBar />
      {/* <MainContainer /> */}
      <Outlet/>
    </div>
  );
};

export default Body;
