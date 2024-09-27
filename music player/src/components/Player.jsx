import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";
import { FaDownload } from "react-icons/fa";
import { FaVolumeHigh } from "react-icons/fa6";
import VolumeController from "./VolumeController";
const Player = () => {
  const [showVolumeController, setShowVolumeController] = useState(false);
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-200 text-center">
      <input type="range" className="w-[90vw]" min={0} max={100}/>
      <div className="w-[90vw] mx-auto flex justify-between">
        <div className="flex items-center justify-center gap-2">
          <img
            src="https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            width={40}
            alt="imgnotfound"
          />
          <div className="text-left">
            <p className="text-md font-semibold">Lorem, ipsum.</p>
            <p className="text-sm">Lorem ipsum...</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <IoPlaySkipBackSharp className="text-sm md:text-lg" />
          <FaPlay  className="text-sm md:text-lg" />
          <IoPlaySkipForward  className="text-sm md:text-lg" />
        </div>
        <div className="hidden md:flex items-center justify-center gap-2">
          <FaDownload  className="text-lg" />
          <div onClick={()=>setShowVolumeController((prev)=>!prev)} className="">
            <FaVolumeHigh  className="text-lg"  />
            {showVolumeController && <VolumeController className="text-lg" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
