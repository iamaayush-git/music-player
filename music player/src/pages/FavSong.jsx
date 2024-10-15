import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavSong } from "../features/favSong";
const FavSong = () => {
  const favSongList = useSelector((state) => state.favSongs.favList);
  const [startPlayer, setStartPlayer] = useState();
  const dispatch = useDispatch();
  const audioRef = useRef();

  function handleRemove(event, song) {
    event.stopPropagation();
    if (startPlayer === song.preview) {
      audioRef.current.pause();
      setStartPlayer(null);
    }

    let x = favSongList.filter((item) => {
      return item.id !== song.id;
    });
    dispatch(removeFavSong(x));
  }

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
            className="flex items-center justify-between"
          >
            <div className="flex items-center justify-left gap-14 p-2 my-7 shadow-lg cursor-pointer w-[75%]">
              <img src={song.album.cover_small} alt="" />
              <div>
                <div className="text-lg font-semibold">{song.album.title}</div>
                <div className="text-sm text-gray-500">{song.artist.name}</div>
              </div>
            </div>
            <button
              onClick={(event) => handleRemove(event, song)}
              type="button"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="fixed bottom-0 left-0 w-full p-4 bg-gray-100 shadow-md">
        <audio
          ref={audioRef}
          src={startPlayer}
          controls
          autoPlay
          className="w-full"
        />
      </div>
    </div>
  );
};

export default FavSong;
