import React from "react";

const MovieCard = ({ url, title }) => {
  return (
    <div className="bg-slate-800 p-2 rounded-md shadow-md  shadow-gray-400">
      <div>
        <img src={url} alt="Movie poster" className="" />
        <h2 className="text-center font-normal italic text-white">{title}</h2>
      </div>
    </div>
  );
};

export default MovieCard;
