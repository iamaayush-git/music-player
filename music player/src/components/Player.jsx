import React, { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoPlaySkipBackSharp, IoPlaySkipForward } from "react-icons/io5";
import { FaDownload } from "react-icons/fa";
import { FaVolumeHigh } from "react-icons/fa6";
import VolumeController from "./VolumeController";
import musicGifStop from "../assets/musicGifStop.png";
import musicGif from "../assets/musicGif.webp";
import { useDispatch, useSelector } from "react-redux";
import { setIndex } from "../features/songSlice";

const Player = () => {
  const audioRef = useRef();
  const dispatch = useDispatch();
  const [showVolumeController, setShowVolumeController] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const [songRange, setSongRange] = useState(0);
  const [duration, setDuration] = useState(0);

  const index = useSelector((state) => state.songs.index);
  const songs = useSelector((state) => state.songs.list);

  // Handle playing and pausing of the audio
  useEffect(() => {
    if (isPlay) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlay, index]);

  // Update song duration when audio loads
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.onloadedmetadata = () => {
        setDuration(audioRef.current.duration);
      };
      audioRef.current.ontimeupdate = () => {
        setSongRange((audioRef.current.currentTime / duration) * 100);
      };
    }
  }, [duration, index]);

  const handlePlayPause = () => {
    if (isPlay) {
      audioRef.current.pause();
      setIsPlay(false);
    } else {
      audioRef.current.play();
      setIsPlay(true);
    }
  };

  const handleSkipBack = () => {
    let flag = index;
    if (flag > 0) {
      flag--;
      dispatch(setIndex(flag));
    } else {
      dispatch(setIndex(0));
    }
    setIsPlay(true);
  };

  const handleSkipForward = () => {
    let flag = index;
    if (flag < songs.length - 1) {
      flag++;
    } else {
      flag = 0;
    }
    dispatch(setIndex(flag));
    setIsPlay(true);
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = seekTime;
    setSongRange(e.target.value);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-transparent text-center py-2">
      <input
        type="range"
        className="w-[90vw]"
        min={0}
        max={100}
        value={songRange}
        onChange={handleSeek}
      />
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
              alt="music-animation"
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <IoPlaySkipBackSharp
            onClick={handleSkipBack}
            className="text-sm md:text-lg cursor-pointer"
          />
          {isPlay ? (
            <FaPause onClick={handlePlayPause} className="text-sm md:text-lg" />
          ) : (
            <FaPlay onClick={handlePlayPause} className="text-sm md:text-lg" />
          )}
          <IoPlaySkipForward
            onClick={handleSkipForward}
            className="text-sm md:text-lg cursor-pointer"
          />
        </div>
        <div className="hidden md:flex items-center justify-center gap-2">
          <FaDownload className="text-lg cursor-pointer" />
          <div
            onClick={() => setShowVolumeController((prev) => !prev)}
            className="cursor-pointer"
          >
            <FaVolumeHigh className="text-lg" />
            {showVolumeController && (
              <VolumeController className="text-lg cursor-pointer" />
            )}
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
