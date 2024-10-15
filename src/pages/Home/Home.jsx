import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Genres from "../../components/Genres/Genres";

const Home = () => {
  return (
    <div className="relative h-full w-full bg-slate-950">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
      <div>
        <Navbar />
      </div>
      <div className="mt-20">
        <Hero />
      </div>
      <div id="movie-genres">
        <Genres />
      </div>
    </div>
  );
};

export default Home;
