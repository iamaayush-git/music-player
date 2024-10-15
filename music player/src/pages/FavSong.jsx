import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
const FavSong = () => {
  const favSongList = useSelector((state) => state.favSongs.favList);
  const [startPlayer, setStartPlayer] = useState();

  if (favSongList.length == 0) {
    return (
      <div className="w-full text-center text-3xl mt-10">
        <h1 className="text-2xl font-bold text-center mb-6">Favorite Songs</h1>
        <div className="text-red-600 font-bold my-20 text-2xl md:text-3xl">
          No favorite songs available
        </div>
        <audio src={startPlayer} controls autoPlay className="w-full" />
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">Favorite Songs</h1>
      <ul className="rounded-lg mb-28">
        {favSongList.map((song) => (
          <li
            onClick={() => {
              setStartPlayer(song.preview);
            }}
            key={song.id}
            className="flex items-center justify-left gap-14 p-2 my-7 shadow-lg cursor-pointer"
          >
            <img src={song.album.cover_small} alt="" />
            <div>
              <div className="text-lg font-semibold">{song.album.title}</div>
              <div className="text-sm text-gray-500">{song.artist.name}</div>
            </div>
          </li>
        ))}
      </ul>
      <div className="fixed bottom-0 left-0 w-full p-4 bg-gray-100 shadow-md">
        <audio src={startPlayer} controls autoPlay className="w-full" />
      </div>
    </div>
  );
};

export default FavSong;
