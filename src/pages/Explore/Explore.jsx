import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SearchSection from "../../components/SearchSection/SearchSection";
import ShowSection from "../../components/ShowSection/ShowSection";

const Explore = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);

  const url = import.meta.env.VITE_ALL_URL;

  const fetchMovies = async (data) => {
    try {
      const response = await fetch(url + "recommend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  console.log("searched_movies", searchedMovies);

  const [formData, setFormData] = useState({});
  return (
    <div className="relative h-full w-full bg-slate-950">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>

      <Navbar />
      <div className="grid grid-cols-3 mt-20 min-h-screen relative z-20">
        <div className="border-r-2 col-span-1">
          <SearchSection
            setFormData={setFormData}
            setSearchedMovies={setSearchedMovies}
            fetchMovies={fetchMovies}
            formData={formData}
          />
        </div>
        <div className="border-l-2 col-span-2">
          {searchedMovies.length != 0 ? (
            <ShowSection formData={formData} searchedMovies={searchedMovies} />
          ) : (
            <h1 className="text-center text-white relative top-52 text-2xl font-bold italic">
              Search for your favourite movies
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Explore;
