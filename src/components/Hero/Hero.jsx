import React, { useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { useState } from "react";

const Hero = () => {
  const url = import.meta.env.VITE_ALL_URL;
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data);
    };
    fetchMovies();
  }, []);

  console.log("movies", movies);

  const imgUrl = "https://image.tmdb.org/t/p/w500";

  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 20;

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  return (
    <div className="w-full py-6 px-10">
      <div className="w-full bg-teal-500 flex flex-col rounded p-8 gap-14">
        <div className="flex md:flex-row flex-col md:gap-4 gap-8 justify-around">
          <div className="flex justify-center items-center">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:gap-1 md:gap-3">
                <p className="md:text-4xl text-2xl font-bold md:shadow-lg md:shadow-white">
                  Discover new movies
                </p>
                <p className="md:text-4xl text-2xl font-bold md:shadow-lg md:shadow-white">
                  based on your
                </p>
                <p className="md:text-4xl text-2xl font-bold md:shadow-lg md:shadow-white">
                  preferences !
                </p>
              </div>
              <button className="bg-white text-cyan-800 font-semibold rounded mt-5 py-2">
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
        <div className="flex flex-col gap-5 md:mt-10 mt-6">
          <h1 className="md:text-2xl text-l font-semibold md:pl-3">
            Explore Recommended Movies
          </h1>
          <div className="grid grid-cols-4 gap-10 justify-between">
            {Array.isArray(currentMovies) ? (
              currentMovies.map((movie) => {
                return (
                  <MovieCard
                    key={movie.id}
                    title={movie.title}
                    overview={movie.overview}
                    release_date={movie.release_date}
                    url={imgUrl + movie.poster_path}
                  />
                );
              })
            ) : (
              <></>
            )}
          </div>
          {/* Pagination */}
          <div className="flex justify-center mt-8 space-x-4">
            {/* Previous Button */}
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            >
              Previous
            </button>

            {/* Page Numbers */}
            {[...Array(Math.ceil(movies.length / moviesPerPage)).keys()].map(
              (page) => (
                <button
                  key={page + 1}
                  onClick={() => setCurrentPage(page + 1)}
                  className={`px-4 py-2 ${
                    currentPage === page + 1 ? "bg-blue-700" : "bg-blue-500"
                  } text-white rounded`}
                >
                  {page + 1}
                </button>
              )
            )}

            {/* Next Button */}
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={
                currentPage === Math.ceil(movies.length / moviesPerPage)
              }
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
