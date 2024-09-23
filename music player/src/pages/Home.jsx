import React from "react";
import Navbar from "../components/Navbar";
import Player from "../components/Player";
import MusicCard from "../components/MusicCard";
const Home = () => {
  return (
    <div className="w-[90vw] mx-auto">
      <Navbar />
      <div className="flex items-center justify-left gap-5 flex-wrap mb-[40vh]">
        <MusicCard/>
      </div>
      <Player />
    </div>
  );
};

export default Home;
