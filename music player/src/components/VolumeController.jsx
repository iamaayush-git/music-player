import React from "react";

const VolumeController = ({ volume, setVolume, audioRef }) => {
  const handleVolume = (e) => {
    audioRef.current.volume = e.target.value / 100;
    setVolume(e.target.value);
  };
  return (
    <input
      value={volume}
      onChange={handleVolume}
      className="w-24"
      type="range"
      max={100}
      min={0}
    />
  );
};

export default VolumeController;
