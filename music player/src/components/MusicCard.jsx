import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MusicCard = ({
  image,
  name,
  artist,
  audio,
  albumId,
  index,
  currentSong,
  setCurrentSong,
  audioRefs
}) => {
  function handleplay() {
    if (currentSong != null && currentSong !== index) {      
      audioRefs.current[currentSong].pause();
    }
    setCurrentSong(index);
    
  }
  console.log(audioRefs.current);
  return (
    <Link to={`/album/${albumId}`}>
      <div className="h-72 w-auto shadow-lg rounded-lg text-center mt-14 cursor-pointer flex flex-col items-center justify-center gap-5 pb-5 overflow-hidden">
        <img src={image} alt="" className="w-full h-[60%] object-cover" />

        <div className="w-full">
          <p className="w-full text-left font-semibold text-lg pl-4 text-nowrap">
            {name.length > 20 ? name.slice(0, 15) + "..." : name}
          </p>
          <p className="text-sm text-left pl-4">
            <span className="font-semibold">Artist:</span>{" "}
            {artist.length > 20 ? artist.slice(0, 15) + "..." : artist}
          </p>
        </div>

        {audio && (
          <audio
            ref={(el) => (audioRefs.current[index] = el)}
            src={audio}
            controls
            onPlay={handleplay}
          >
            Your browser does not support the audio element.
          </audio>
        )}
      </div>
    </Link>
  );
};

export default MusicCard;
