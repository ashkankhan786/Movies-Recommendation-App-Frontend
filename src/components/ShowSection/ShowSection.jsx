import React, { useEffect, useState } from "react";
import MovieDiv from "../MovieDiv/MovieDiv";

const ShowSection = ({ formData, searchedMovies }) => {
  const [selectedMovie, setSelectedMovie] = useState({});
  const [loading, setLoading] = useState(false);

  searchedMovies.sort((a, b) => b.vote_average - a.vote_average);

  const [cPage, setCPage] = useState(1);
  const mPerPage = 20;
  const idxLast = cPage * mPerPage;
  const idxFirst = idxLast - mPerPage;
  const currMovies = searchedMovies.slice(idxFirst, idxLast);

  const totalPages = Math.ceil(searchedMovies.length / mPerPage);

  const handlePrevious = () => {
    if (cPage > 1) {
      setCPage(cPage - 1);
    }
  };

  const handleNext = () => {
    if (cPage < totalPages) {
      setCPage(cPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];

    if (totalPages <= 7) {
      // Display all pages if total pages are 7 or less
      for (let page = 1; page <= totalPages; page++) {
        pages.push(
          <button
            key={page}
            onClick={() => setCPage(page)}
            className={`px-4 py-2 ${
              cPage === page ? "bg-blue-700" : "bg-blue-500"
            } text-white rounded`}
          >
            {page}
          </button>
        );
      }
    } else {
      // Always show the first two pages
      pages.push(
        <button
          key={1}
          onClick={() => setCPage(1)}
          className={`px-4 py-2 ${
            cPage === 1 ? "bg-blue-700" : "bg-blue-500"
          } text-white rounded`}
        >
          1
        </button>
      );

      // Show ellipsis if current page is beyond page 4
      if (cPage > 4) {
        pages.push(
          <span key="start-dots" className="px-2">
            ...
          </span>
        );
      }

      // Show two pages before the current page, and two after the current page
      for (
        let page = Math.max(2, cPage - 2);
        page <= Math.min(totalPages - 1, cPage + 2);
        page++
      ) {
        pages.push(
          <button
            key={page}
            onClick={() => setCPage(page)}
            className={`px-4 py-2 ${
              cPage === page ? "bg-blue-700" : "bg-blue-500"
            } text-white rounded`}
          >
            {page}
          </button>
        );
      }

      // Show ellipsis if current page is before totalPages - 3
      if (cPage < totalPages - 3) {
        pages.push(
          <span key="end-dots" className="px-2">
            ...
          </span>
        );
      }

      // Always show the last page
      pages.push(
        <button
          key={totalPages}
          onClick={() => setCPage(totalPages)}
          className={`px-4 py-2 ${
            cPage === totalPages ? "bg-blue-700" : "bg-blue-500"
          } text-white rounded`}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="px-5 py-8 h-full">
      <h1 className="font-bold text-lg text-slate-300">
        Recommended Movies based on your search
      </h1>
      <div className="flex flex-col gap-5 mt-5">
        {Array.isArray(searchedMovies) &&
          currMovies.map((m) => {
            return (
              m.adult == false && (
                <div id={m.id}>
                  <MovieDiv movie={m} setSelectedMovie={setSelectedMovie} />
                </div>
              )
            );
          })}
      </div>
      <div className="flex justify-center mt-8 space-x-4">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          disabled={cPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Previous
        </button>

        {/* Page Numbers */}
        {renderPageNumbers()}

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={cPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ShowSection;
