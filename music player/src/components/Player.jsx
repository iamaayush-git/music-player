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
      <input type="range" className="w-[90vw]" min={0} max={100} value={0} />
      <div className="flex items-center justify-between w-[90vw] mx-auto py-2">
        <div className="flex items-center justify-center gap-2 flex-1">
          <img
            src="https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            width={70}
            alt="imgnotfound"
          />
          <div className="flex flex-col items-left justify-center">
            <p className="text-md font-semibold">Lorem, ipsum.</p>
            <p className="text-sm">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5  flex-1">
          <IoPlaySkipBackSharp size={20} />
          <FaPlay size={20} />
          <IoPlaySkipForward size={20} />
        </div>
        <div className="flex items-center justify-center gap-5 flex-1">
          <FaDownload size={20} />
          <div onClick={()=>setShowVolumeController((prev)=>!prev)} className="flex items-center justify-center gap-3">
            <FaVolumeHigh size={20} />
            {showVolumeController && <VolumeController />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
