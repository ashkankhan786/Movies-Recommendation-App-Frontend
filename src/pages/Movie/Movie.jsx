import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
  const { movieName } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const urlToServer = import.meta.env.VITE_ALL_URL;
  useEffect(() => {
    const fetchSingleMovie = async (movieName) => {
      try {
        const response = await fetch(`${urlToServer}movie/${movieName}`);
        if (!response.ok) {
          throw new Error("Movie not found");
        }
        const data = await response.json();
        setMovie(data[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSingleMovie(movieName);
  }, [movieName]);

  if (loading) {
    return (
      <div className="min-h-screen flex bg-slate-950 justify-center items-center text-white">
        <p className="font-bold text-2xl">Loading...</p>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }

  const imgUrl = import.meta.env.VITE_IMG_URL;

  return (
    <div className="min-h-screen min-w-full bg-slate-900">
      <div className="flex justify-center md:items-center items-start md:h-screen h-fit lg:mb-20 md:mb-12 mb-12">
        <img
          className="shadow-lg shadow-black max-h-screen"
          src={`${imgUrl}${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="md:flex flex-col gap-4 p-5 w-full max-w-md hidden">
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-3xl font-semibold italic">
              {movie.title}
            </h1>
            {movie.tagline === "Unknown" ? (
              <></>
            ) : (
              <p className="text-white text-base font-bold italic">
                {movie.tagline}
              </p>
            )}
          </div>
          <p className="text-white text-base">{movie.overview}</p>
        </div>
      </div>
      <div className="lg:px-40 md:px-32 px-10 lg:py-10 md:py-7 py-3">
        <div className="bg-slate-950 md:grid md:grid-cols-3 flex flex-col shadow-md shadow-black">
          <div className="col-span-1 md:flex hidden justify-center items-center md:pt-10 ">
            <img
              src={`${imgUrl}${movie.poster_path}`}
              alt={movie.title}
              className="lg:h-60 md:h-52 sm:h-44"
            />
          </div>
          <div className="flex flex-col gap-2 col-span-2 text-white py-5 pl-10">
            <div className="flex gap-1 items-end">
              <div>
                <h1 className="text-xl font-bold">{movie.title}</h1>
              </div>
              <div>
                <h2 className="text-base">
                  ({movie.release_date.slice(0, 4)})
                </h2>
              </div>
            </div>
            <div className="flex gap-1">
              {movie.genres === null ? (
                <p>NA |</p>
              ) : (
                <p className="italic">{movie.genres} | </p>
              )}
              <p> {movie.release_date}</p>
            </div>

            <div>
              <p className="font-bold">Keywords</p>
              {movie.keywords === "Unknown" ? (
                <p>NA</p>
              ) : (
                <p>{movie.keywords}</p>
              )}
            </div>
            <div>
              <p className="font-bold">Overview</p>
              {movie.overview === "Unknow" ? (
                <p>NA</p>
              ) : (
                <p className="text-wrap">{movie.overview}</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-1">
                <p className="font-bold">Rating:</p>
                <p>
                  {movie.vote_average == 0 ? "NA" : `${movie.vote_average}/10`}
                </p>
              </div>
              <div className="flex gap-1">
                <p className="font-bold">Runtime:</p>
                {movie.runtime === 0 ? <p>NA</p> : <p>{movie.runtime}m</p>}
              </div>
              <div className="flex gap-1">
                <p className="font-bold">Original Language:</p>
                <p>{movie.original_language}</p>
              </div>
              <div className="flex gap-1">
                <p className="font-bold">Box Office:</p>
                {movie.revenue === 0 ? (
                  <p>NA</p>
                ) : (
                  <p>
                    {movie.revenue / 1000000 > 1000
                      ? `${movie.revenue / 1000000000} Billion USD`
                      : `${movie.revenue / 1000000} Million USD`}
                  </p>
                )}
              </div>
              <div className="flex gap-1">
                <p className="font-bold">Budget:</p>
                {movie.budget === 0 ? (
                  <p>NA</p>
                ) : (
                  <p>
                    {movie.budget / 1000000 > 1000
                      ? `${movie.budget / 1000000000} Billion USD`
                      : `${movie.budget / 1000000} Million USD`}
                  </p>
                )}
              </div>
              <div className="flex gap-1">
                <p className="font-bold">Production Companies:</p>
                {movie.production_companies === null ? (
                  <p>NA</p>
                ) : (
                  <p>{movie.production_companies}</p>
                )}
              </div>
              <div className="flex gap-1">
                <p className="font-bold">Country:</p>
                <p>{movie.production_countries}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
