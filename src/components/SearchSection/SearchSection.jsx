import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

const SearchSection = ({ fetchMovies, setSearchedMovies }) => {
  const [loading, setLoading] = useState(false);
  const [desc, setDesc] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const movies = await fetchMovies({ desc: desc, year: year, genre: genre });
    setSearchedMovies(movies);
    setDesc("");
    setYear("");
    setGenre("");
    setLoading(false);
  };

  return (
    <div className="py-10 px-10 flex flex-col gap-5 ">
      <div>
        <IoMdArrowRoundBack />
      </div>
      <h1 className="font-bold text-white">Search Parameters</h1>
      <div className="flex flex-col">
        <label
          htmlFor="Description"
          className="text-sm font-semibold text-neutral-200"
        >
          Movie Description
        </label>
        <input
          className="text-sm pr-5 pl-2 py-1 w-fit text-black"
          type="text"
          id="Description"
          name="Description"
          placeholder="Enter movie description"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="Year"
          className="text-sm font-semibold text-neutral-200"
        >
          Release Year
        </label>
        <input
          className="text-sm pr-5 pl-2 py-1 w-fit"
          type="text"
          id="Year"
          name="Year"
          placeholder="Enter release year"
          value={year}
          onChange={(e) => {
            setYear(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="Genre"
          className="text-sm font-semibold text-neutral-200"
        >
          Genre
        </label>
        <input
          className="text-sm pr-5 pl-2 py-1 w-fit"
          type="text"
          id="Genre"
          name="Genre"
          placeholder="Enter movie genre"
          value={genre}
          onChange={(e) => {
            setGenre(e.target.value);
          }}
        />
      </div>
      <button
        className="bg-lime-600 text-white text-sm py-2 px-5 rounded-md disabled:cursor-not-allowed"
        onClick={handleSubmit}
        disabled={
          (desc === "" && (genre === "" || year === "")) || loading === true
            ? true
            : false
        }
      >
        Search
      </button>
    </div>
  );
};

export default SearchSection;
