import React, { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";
import { FaDownload } from "react-icons/fa";
import { FaVolumeHigh } from "react-icons/fa6";
import VolumeController from "./VolumeController";
import musicGifStop from "../assets/musicGifStop.png";
import musicGif from "../assets/musicGif.webp";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Player = ({ selectedSong }) => {
  console.log(selectedSong);
  let audioRef = useRef();
  const [showVolumeController, setShowVolumeController] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  let playingSong = useParams().index;
  const [currentSong, setCurrentSong] = useState(playingSong);
  const songs = useSelector((state) => state.songs.list);
  console.log(songs[currentSong]);

  function handlePlayPause() {
    if (isPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlay((prev) => !prev);
  }

  function handleSkipBack() {
    let flag = currentSong;
    if (flag > 0) {
      flag--;
      setCurrentSong(flag);
    } else {
      setCurrentSong(0);
    }
  }

  function handleSkipForward() {
    console.log("hell");
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-transparent text-center py-2">
      <input type="range" className="w-[90vw]" min={0} max={100} />
      <div className="w-[90vw] mx-auto flex justify-between">
        <div className="flex items-center justify-center gap-2">
          <img
            className="rounded-lg"
            src={songs[currentSong].album.cover_xl}
            width={40}
            alt="imgnotfound"
          />
          <div className="text-left">
            <img
              className="w-12 h-10 md:w-16 md:h-12 rounded-full"
              src={isPlay ? musicGif : musicGifStop}
              alt=""
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <IoPlaySkipBackSharp
            onClick={handleSkipBack}
            className="text-sm md:text-lg"
          />
          {isPlay ? (
            <FaPause onClick={handlePlayPause} className="text-sm md:text-lg" />
          ) : (
            <FaPlay onClick={handlePlayPause} className="text-sm md:text-lg" />
          )}
          <IoPlaySkipForward
            onClick={handleSkipForward}
            className="text-sm md:text-lg"
          />
        </div>
        <div className="hidden md:flex items-center justify-center gap-2">
          <FaDownload className="text-lg" />
          <div
            onClick={() => setShowVolumeController((prev) => !prev)}
            className=""
          >
            <FaVolumeHigh className="text-lg" />
            {showVolumeController && <VolumeController className="text-lg" />}
          </div>
        </div>
      </div>
      <audio
        className="hidden"
        ref={audioRef}
        src={songs[currentSong].preview}
        controls
      ></audio>
    </div>
  );
};

export default Player;
