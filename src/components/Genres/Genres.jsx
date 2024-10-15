import React, { useEffect, useState } from "react";

const Genres = () => {
  const genres = [
    "Action",
    "Drama",
    "Adventure",
    "Comedy",
    "Sci-fi",
    "Romance",
    "Thriller",
    "Fantasy",
    "Musical",
    "Crime",
    "Documentary",
    "Biography",
    "Horror",
    "Mystery",
  ];
  const [selectedGenre, setSelectedGenre] = useState(null);
  return (
    <div className="flex flex-col gap-2 px-5 relative pb-4 md:pb-8">
      <div className=" flex items-center justify-center mb-5">
        <h1 className="text-center text-xl font-bold text-white">
          Movie Genres
        </h1>
      </div>
      <div>
        <div className="flex flex-wrap gap-4 justify-center items-center px-3 md:px-8 lg:px-52">
          {genres.map((genre) => (
            <button
              onClick={() => setSelectedGenre(genre)}
              key={genre}
              className="bg-white text-cyan-800 font-semibold rounded py-1 px-3 cursor-pointer"
            >
              {genre}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Genres;
