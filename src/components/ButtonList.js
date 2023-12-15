import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const Category = [
    "All",
    "Live",
    "React",
    "Music",
    "Sports",
    "Netflix",
    "Sitcoms",
    "Movies",
    "Latest Vlogs",
    "Cricket",
    "El-Clasico"
    
  ];

  return (
    <div className=" flex gap-6 p-2">
      {Category.map((category_value, index) => (
        <div key={index} className="border bg-slate-100 rounded-lg font-bold p-1 m-1">
          
        <button >{category_value}</button></div>
      ))}
    </div>
  );
};

export default ButtonList;
