import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
    const dispatch=useDispatch();
    const handleToggleClick=()=>{
        dispatch(toggleMenu())
    }
  return (
    <div className="grid grid-flow-col shadow-sm">
      <div className="flex m-1 ">
        
        <img
          onClick={handleToggleClick}
          className="h-8 col-span-1 cursor-pointer"
          alt="hamburger-menu"
          src={
            "https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
          }
        />
        <a href="/">
        <img
          className="h-6 m-1"
          alt="youtube-logo"
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwGODoCWG12sFLdictA7wnOcoGgY0wjzZd9g&usqp=CAU"
          }
        />
    </a>
      </div>
      <div className="col-span-10">
        <input type="text" className="w-1/2 border border-black rounded-l-full mt-2 p-1" placeholder="Search..." />
        <button className="border border-black rounded-r-full p-1 ">🔍</button>
      </div>
      <div>
        <img
          className="h-6 m-1 col-span-1"
          alt="profile"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAY1BMVEX///8AAAD6+vppaWn19fVgYGCxsbF5eXnm5uZjY2Pi4uLx8fEzMzPS0tKTk5OoqKgYGBglJSV/f3+7u7tJSUnKysoJCQnBwcHc3Nyfn58+Pj4SEhJVVVVERERxcXGFhYUsLCwRzyATAAACRklEQVR4nO3ajXKqMBCGYTb8CAEDVCzUWvT+r/LoeDpWIYlIwtrp91zBO5KGZGkQAAAAAAAAAAAAAMCQENwFd7pErcJwpZKOu+RbXjYV/Vc1Zc7dc5YUdKNIuIuCNKOBLOVtksWw6fRjSc6mrh5rIqoZF3zUjDcRNRFbVK9rIuq5mtb6JqI1U9SXKeqLp2n7bop637JEvZmaiN44msToFnVVcLygU3MTEce+vrVFcSyqxBbF8WIubVEloi5aW1TLENXZojhOCpEtiuWgEJqbQo4m257Ac1TPje+ZgulW82GK+uBpCqKdvmnHdh5eV7qmiuvgGRh2ddYLqaaK4w3zw+i+wH5xl/F9Usx6P74Qm5sradO+yJxKqqwp6rpoMvUCv9JVLrtOvsRoCuCvyVMp05f56xNdq+LP763zM1Ztx717pmo/GHvWe84tNE/0M8+E51GK0jzJKxme4sYynjpdHTYLJ6WGwfBVv+iIqtUezm9VC84T1GNJZ2qhJHF4vInosMx6H/luZZItkCRW05qIVv5/q8lNpyrfTdah4hjP10DrTHGc151BHJ+LOvpcVpbPMXoeP9QYP/CZ+ZvCGOZRNjtfTU+u8gtPaz3az4na+xntzVhRZ35W1cR33j0v78DowTOUTuXj+Vm/79n4mO9NOkWNObhvymdsUhc797cuObeJyP0VdTM/yv2Va8JlQcf9JWIwmZ4udh41e537eCk/ebz76ei6SWj+0W2K2vX5U/ThbL3zQ7FwwHUTAAAAAAAAAAAAwG/wD96vGLbDGbQnAAAAAElFTkSuQmCC"
        />
      </div>
    </div>
  );
};

export default Head;
