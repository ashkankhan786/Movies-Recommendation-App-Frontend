import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MovieDiv = ({ movie, setSelectedMovie }) => {
  const imgUrl = import.meta.env.VITE_IMG_URL;
  const navigate = useNavigate();

  return (
    <div
      className="bg-gray-400 pr-5 pl-2 py-2 rounded-md grid grid-cols-4"
      onClick={() => navigate(`/movie/${movie.title}`)}
    >
      <div className="col-span-1">
        <img
          src={imgUrl + movie.poster_path}
          alt="Movie Poster"
          className="object-cover h-28 rounded-md aspect-auto"
        />
      </div>
      <div className="col-span-3 flex flex-col justify-start items-start">
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold">{movie.title}</h1>
            <h2 className="text-sm">
              {movie.release_date ? movie.release_date : "Unknown"}
            </h2>
            <h2 className="text-sm">{movie.genres}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDiv;
