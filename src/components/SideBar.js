import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {

    const isMenuOpen = useSelector((store)=>store.app.isMenuOpen)
    if(!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48">
        <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subcriptions</li>
        <li>History</li>
      </ul>
      <h1 className="font-bold">Subcriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Moives</li>
        <li>Vlogs</li>
      </ul>
      <h1  className="font-bold">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Moives</li>
        <li>Vlogs</li>
      </ul>
      <h1  className="font-bold">Latest</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Moives</li>
        <li>Vlogs</li>
      </ul>
    </div>
  );
};

export default SideBar;
