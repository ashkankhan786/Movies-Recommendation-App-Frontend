import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate(`/movie/${searchText}`);
  };

  const handleNavigation = (id) => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="w-screen h-fit p-3 py-6 px-7 bg-neutral-400 fixed top-0 z-50">
      <nav className="flex justify-between items-center">
        <h1
          className="text-slate-950 font-bold text-2xl cursor-pointer"
          onClick={() => handleNavigation("first-section")}
        >
          Movie Library
        </h1>
        <ul className="md:flex gap-3 hidden text-slate-700 font-semibold ">
          <li
            className="cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </li>
          <li
            className="cursor-pointer"
            onClick={() => handleNavigation("movie-genres")}
          >
            Categories
          </li>
          <li
            className="cursor-pointer"
            onClick={() => handleNavigation("explore-movies")}
          >
            Recommended
          </li>
        </ul>
        <div className="flex items-center justify-between md:gap-3 gap-2">
          <input
            className="md:px-3 px-1 py-1 active:outline-none focus-within:outline-none rounded md:w-36 w-28 md:text-md text-sm"
            type="text"
            placeholder="Search Movies..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-slate-800 text-white px-3 py-1 hidden md:block rounded-lg "
            onClick={handleSearchClick}
          >
            Search
          </button>
          <button
            className="bg-slate-800 text-white p-2 rounded-lg md:hidden"
            onClick={handleSearchClick}
          >
            <FaSearch />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
