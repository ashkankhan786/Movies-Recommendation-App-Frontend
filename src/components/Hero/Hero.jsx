import React, { useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Hero = () => {
  const url = import.meta.env.VITE_ALL_URL;
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(url + "all");
      const data = await response.json();
      setMovies(data);
    };
    fetchMovies();
  }, []);

  const imgUrl = import.meta.env.VITE_IMG_URL;
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 15;

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const navigate = useNavigate();

  return (
    <div className="w-full py-6 px-10 relative z-10">
      <div className="w-full  flex flex-col rounded p-8 gap-14">
        <div className="flex md:flex-row flex-col md:gap-4 gap-10 justify-around">
          <div className="flex justify-center items-center">
            <div className="flex flex-col gap-4">
              <div
                className="flex flex-col sm:gap-1 md:gap-3 text-white"
                id="first-section"
              >
                <p className="lg:text-4xl md:text-3xl text-2xl font-bold md:shadow-lg md:shadow-white">
                  Discover new movies
                </p>
                <p className="lg:text-4xl md:text-3xl text-2xl font-bold md:shadow-lg md:shadow-white">
                  based on your
                </p>
                <p className="lg:text-4xl md:text-3xl text-2xl font-bold md:shadow-lg md:shadow-white">
                  preferences !
                </p>
              </div>
              <button
                className="bg-white text-cyan-800 font-semibold rounded mt-5 py-2"
                onClick={() => navigate("/explore")}
              >
                Explore
              </button>
            </div>
          </div>
          <div className="sm:flex sm:justify-center sm:items-center">
            <img
              src="posterCollage.jpg"
              width={500}
              height={500}
              alt="Image"
              className="rounded shadow-lg shadow-black sm:w-[400px]
              md:w-[500px]"
            />
          </div>
        </div>
        <div className="md:pt-10 lg:pt-[5rem] pt-8" id="explore-movies">
          <div className="flex flex-col gap-5">
            <h1 className="md:text-2xl text-xl text-cyan-50 font-semibold md:pl-3">
              Explore Recommended Movies
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-between">
              {Array.isArray(currentMovies) ? (
                currentMovies.map((movie) => {
                  return (
                    <MovieCard
                      key={movie.id}
                      title={movie.title}
                      url={imgUrl + movie.poster_path}
                    />
                  );
                })
              ) : (
                <></>
              )}
            </div>
            {/* Pagination */}
            <div className="flex md:justify-center mt-8 md:space-x-4 flex-wrap gap-2 justify-center">
              {/* Previous Button */}
              <a href="#explore-movies">
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                >
                  Previous
                </button>
              </a>

              {/* Page Numbers */}
              {[...Array(Math.ceil(movies.length / moviesPerPage)).keys()].map(
                (page) => (
                  <a href="#explore-movies">
                    <button
                      key={page + 1}
                      onClick={() => setCurrentPage(page + 1)}
                      className={`px-4 py-2 ${
                        currentPage === page + 1 ? "bg-blue-700" : "bg-blue-500"
                      } text-white rounded hidden md:block`}
                    >
                      {page + 1}
                    </button>
                  </a>
                )
              )}

              {/* Next Button */}
              <a href="#explore-movies">
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={
                    currentPage === Math.ceil(movies.length / moviesPerPage)
                  }
                  className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                >
                  Next
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
