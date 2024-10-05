import React, { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";
import { FaDownload } from "react-icons/fa";
import { FaVolumeHigh } from "react-icons/fa6";
import VolumeController from "./VolumeController";
import musicGifStop from "../assets/musicGifStop.png";
import musicGif from "../assets/musicGif.webp";
import { useDispatch, useSelector } from "react-redux";
import { setIndex } from "../features/songSlice";

const Player = () => {
  let audioRef = useRef();
  const dispatch = useDispatch();
  const [showVolumeController, setShowVolumeController] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const index = useSelector((state) => state.songs.index);
  const songs = useSelector((state) => state.songs.list);
  useEffect(() => {
    setIsPlay(false);
  }, [index]);

  function handlePlayPause() {
    if (isPlay) {
      audioRef.current.pause();
      setIsPlay(false);
    } else {
      audioRef.current.play();
      setIsPlay(true);
    }
    // setIsPlay((prev) => !prev);
  }

  function handleSkipBack() {
    let flag = index;
    if (flag > 0) {
      flag--;
      dispatch(setIndex(flag));
    } else {
      dispatch(setIndex(0));
    }
  }

  function handleSkipForward() {
    let flag = index;
    if (flag < songs.length - 1) {
      flag++;
    } else {
      flag = 0;
    }
    dispatch(setIndex(flag));
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-transparent text-center py-2">
      <input type="range" className="w-[90vw]" min={0} max={100} />
      <div className="w-[90vw] mx-auto flex justify-between">
        <div className="flex items-center justify-center gap-2">
          <img
            className="rounded-lg"
            src={songs[index].album.cover_xl}
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
        src={songs[index].preview}
        controls
      ></audio>
    </div>
  );
};

export default Player;
