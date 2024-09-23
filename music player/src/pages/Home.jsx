import React from "react";
import musicLogo from "../assets/musicLogo.jpg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <nav className="flex items-center justify-between w-[90vw] mx-auto my-5">
      <div className="flex items-center justify-center gap-5">
        <div className="flex items-center justify-center">
          <Link to={"/"}>
            <img className="rounded-[50%]" src={musicLogo} width={80} alt="" />
          </Link>
          <Link to={"/"}>
            <p className="font-bold mx-2 text-2xl">Music</p>
          </Link>
        </div>
        <ul className="flex items-center justify-center gap-4 text-md font-semibold text-slate-600">
          <li>Music</li>
          <li>Podcasts</li>
          <li>Go Pro</li>
        </ul>
      </div>
      <div className="w-[30%]">
        <input
          className="px-3 w-[100%] border-2 rounded-lg h-10"
          type="text"
          placeholder="Search for songs, artist, playlist, podcasts"
        />
      </div>
      <div className="flex items-center justify-center gap-5">
        <div className="flex items-center justify-center gap-2">
          <div>
            <h2 className="text-md font-bold">Music Languages</h2>
            <p className="text-sm font-semibold">English</p>
          </div>
          <span className="text-xl font-semibold">^</span>
        </div>
        <div className="text-md font-bold">Login</div>
        <div className="text-md font-bold">Sign Up</div>
      </div>
    </nav>
  );
};

export default Home;
