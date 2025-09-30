import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    if (searchQuery === "") {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    try {
      const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const data = await response.json();
      setSuggestions(data[1]);

      dispatch(
        cacheResults({
          [searchQuery]: data[1],
        })
      );
    } catch (err) {
      console.error("Error fetching suggestions:", err);
    }
  };

  return (
    <div className="grid grid-flow-col p-4 px-6 items-center shadow-md bg-white sticky top-0 z-50">
      
      <div className="flex col-span-1 items-center space-x-4">
        <img
          onClick={toggleMenuHandler}
          className="h-6 w-6 cursor-pointer hover:scale-110 transition-transform"
          alt="menu"
          src="https://cdn-icons-png.flaticon.com/128/1828/1828859.png"
        />
        <a href="/">
          <img
            className="h-8 md:h-10"
            alt="youtube-logo"
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
          />
        </a>
      </div>

      
      <div className="col-span-10 flex justify-center relative">
        <div className="flex w-2/3 md:w-1/2">
          <input
            className="w-full border border-gray-300 p-2 pl-4 rounded-l-full focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm md:text-base"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          />
          <button className="border border-gray-300 px-4 rounded-r-full bg-gray-100 hover:bg-gray-200 transition-colors">
            🔍
          </button>
        </div>

      
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-12 w-2/3 md:w-1/2 bg-white shadow-xl rounded-lg border border-gray-200 overflow-hidden">
            <ul>
              {suggestions.map((s, index) => (
                <li
                  key={index}
                  className="py-2 px-4 text-sm md:text-base hover:bg-gray-100 cursor-pointer flex items-center space-x-2"
                  onClick={() => setSearchQuery(s)}
                >
                  <span>🔍</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      
      <div className="col-span-1 flex justify-end">
        <img
          className="h-8 w-8 rounded-full cursor-pointer hover:scale-105 transition-transform"
          alt="user"
          src="https://cdn-icons-png.flaticon.com/128/149/149071.png"
        />
      </div>
    </div>
  );
};

export default Head;
