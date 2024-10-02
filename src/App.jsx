import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="/about" element={<About />} />*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
