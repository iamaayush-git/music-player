import React from "react";
import Navbar from "../components/Navbar";
import Player from "../components/Player";
import MainSection from "../components/MainSection";
const Home = () => {
  return (
    <div className="w-[90vw] mx-auto">
      <Navbar />
      <MainSection />
      <Player />
    </div>
  );
};

export default Home;
