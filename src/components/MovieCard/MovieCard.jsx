import React from "react";

const MovieCard = ({ url, title }) => {
  return (
    <div>
      <img src={url} alt="Movie poster" />
      <h2>{title}</h2>
    </div>
  );
};

export default MovieCard;
