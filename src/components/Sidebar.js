import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { 
  Home, 
  PlayCircle, 
  Radio, 
  Film, 
  Music, 
  Trophy, 
  Utensils, 
  Clock 
} from "lucide-react";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="col-span-1 w-56 p-4 bg-white shadow-md h-screen sticky top-0 overflow-y-auto rounded-2xl">
      
      <ul className="space-y-3">
        <li>
          <Link
            to="/"
            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>
        </li>
        <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition">
          <PlayCircle className="w-5 h-5" />
          <span>Shorts</span>
        </li>
        <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition">
          <Radio className="w-5 h-5" />
          <span>Live</span>
        </li>
        <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition">
          <Film className="w-5 h-5" />
          <span>Movies</span>
        </li>
      </ul>

      
      <h1 className="font-bold text-gray-700 mt-6 mb-2 text-sm uppercase">
        Subscriptions
      </h1>
      <ul className="space-y-3">
        <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition">
          <Music className="w-5 h-5" />
          <span>Music</span>
        </li>
        <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition">
          <Trophy className="w-5 h-5" />
          <span>Sports</span>
        </li>
        <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition">
          <Utensils className="w-5 h-5" />
          <span>Food</span>
        </li>
        <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition">
          <Film className="w-5 h-5" />
          <span>Movies</span>
        </li>
      </ul>

    
      <h1 className="font-bold text-gray-700 mt-6 mb-2 text-sm uppercase">
        Watch Later
      </h1>
      <ul className="space-y-3">
        <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition">
          <Music className="w-5 h-5" />
          <span>Music</span>
        </li>
        <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition">
          <Trophy className="w-5 h-5" />
          <span>Sports</span>
        </li>
        <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition">
          <Utensils className="w-5 h-5" />
          <span>Food</span>
        </li>
        <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition">
          <Clock className="w-5 h-5" />
          <span>Movies</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
