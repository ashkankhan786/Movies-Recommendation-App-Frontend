import React from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-screen h-fit p-3 py-7 px-7 bg-teal-700 sticky">
      <nav className="flex justify-between items-center">
        <h1 className="text-white font-bold text-2xl">Movie Library</h1>
        <ul className="md:flex gap-3 hidden text-white">
          <li>Home</li>
          <li>Categories</li>
          <li>Movies</li>
          <li>Recommended</li>
        </ul>
        <div className="flex items-center justify-between md:gap-3 gap-2">
          <input
            className="md:px-3 px-1 py-1 active:outline-none focus-within:outline-none rounded md:w-36 w-28 md:text-md text-sm"
            type="text"
            placeholder="Search Movies..."
          />
          <button className="bg-teal-100 px-3 py-1 hidden md:block rounded-lg ">
            Search
          </button>
          <button className="bg-teal-100 p-2 rounded-lg md:hidden">
            <FaSearch />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
