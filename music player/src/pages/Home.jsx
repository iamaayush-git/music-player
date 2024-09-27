import React from "react";
import Navbar from "../components/Navbar";
import Player from "../components/Player";
import MusicCard from "../components/MusicCard";
const Home = () => {
  return (
    <div className="w-[90vw] mx-auto">
      <Navbar />
      <div className="w-full object-center overflow-x-hidden grid grid-cols-1 md:grid-cols-3">
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
      </div>
      <Player />
    </div>
  );
};

export default Home;
