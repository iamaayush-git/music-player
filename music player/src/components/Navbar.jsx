import React from "react";
import musicLogo from "../assets/musicLogo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-col mt-5 items-center justify-center lg:flex-row lg:gap-4">
      {/* Left section with logo and menu */}
      <div className="flex flex-col items-center justify-center gap-2">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <Link to={"/"}>
            <img
              className="rounded-[50%] w-[50px] sm:w-[80px]"
              src={musicLogo}
              alt="Music Logo"
            />
          </Link>
          <Link to={"/"}>
            <p className="font-bold mx-2 text-xl sm:text-2xl">Music</p>
          </Link>
        </div>

        {/* Menu items */}
        <ul className="flex items-center justify-center gap-2 text-sm sm:text-md font-semibold text-slate-600">
          <li className="cursor-pointer">Music</li>
          <li className="cursor-pointer">Podcasts</li>
          <li className="cursor-pointer text-nowrap ">Go Pro</li>
        </ul>
      </div>

      {/* Search input */}
      <div className="w-full my-3">
        <input
          className="px-3 w-full border-2 rounded-lg h-10"
          type="text"
          placeholder="Search for songs, artist, playlist, podcasts"
        />
      </div>

      {/* Right section with language selector, login, and sign-up */}
      <div className="flex items-center justify-center flex-col gap-2 lg:flex-row text-nowrap">
        {/* Language Selector */}
        <div className="flex items-center justify-center gap-2">
          <div>
            <h2 className="text-sm sm:text-md font-bold">Music Languages</h2>
            <p className="text-xs sm:text-sm font-semibold text-slate-600">
              English
            </p>
          </div>
          <span className="text-lg sm:text-xl font-semibold cursor-pointer">^</span>
        </div>

        {/* Login and Sign Up */}
        <div className="text-sm sm:text-md font-semibold text-slate-600 cursor-pointer">
          Login
        </div>
        <div className="text-sm sm:text-md font-semibold text-slate-600 cursor-pointer">
          Sign Up
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
