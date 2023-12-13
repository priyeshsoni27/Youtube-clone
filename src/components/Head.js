import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { HAMBURGER_LOGO, YOUTUBE_SEARCH_API, YT_LOGO } from "../utils/constant";
import { cacheItems } from "../utils/searchCache";
import { json } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [suggestionText, setSuggestionText] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const handleToggleClick = () => {
    dispatch(toggleMenu());
  };

  const searchCache = useSelector((store) => store.cacheItems);
  console.log(searchCache);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchText]) {
        setSuggestionText(searchCache[searchText]);
      } else {
        getSearchResults();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const getSearchResults = async () => {
    fetch(YOUTUBE_SEARCH_API + searchText).then((dataValue) => {
      dataValue.json().then((data) =>
        setSuggestionText(
          data[1],
          dispatch(cacheItems({ [searchText]: json[1] }))
        )
      );
    });
  };

  return (
    <div className="grid grid-flow-col shadow-sm">
      <div className="flex m-1 ">
        <img
          onClick={handleToggleClick}
          className="h-8 col-span-1 cursor-pointer"
          alt="hamburger-menu"
          src={HAMBURGER_LOGO}
        />
        <a href="/">
          <img className="h-6 m-1" alt="youtube-logo" src={YT_LOGO} />
        </a>
      </div>
      <div>
        <div className="col-span-10">
          <input
            type="text"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            value={searchText}
            className=" w-[89%] border border-black rounded-l-full mt-2 p-1"
            placeholder="Search..."
          />
          <button className="border border-black rounded-r-full p-1 ">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-2 w-[32rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestionText?.map((suggestionValues, index) => {
                return (
                  <li
                    key={suggestionValues}
                    className="py-2 px-3 shadow-sm hover:bg-gray-100 text-black"
                  >
                    🔍 {suggestionValues}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
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
