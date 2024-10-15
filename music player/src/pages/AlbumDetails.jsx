import React, { useEffect, useState } from "react";
import Player from "../components/Player";
import { useDispatch, useSelector } from "react-redux";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { removeFavSong, setFavSongs } from "../features/favSong";

const AlbumDetails = () => {
  const songs = useSelector((state) => state.songs.list);
  const index = useSelector((state) => state.songs.index);
  const [favSong, setFavSong] = useState(true);
  const dispatch = useDispatch();
  const favSongList = useSelector((state) => state.favSongs.favList);

  const selectedSong = songs[index];
  if (!selectedSong) {
    return <div>Songs not found</div>;
  }

  useEffect(() => {
    let x = favSongList.find((item) => item.id == songs[index].id);
    if (x) {
      setFavSong(false);
    } else {
      setFavSong(true);
    }
  }, [index]);

  function addFav() {
    dispatch(setFavSongs(songs[index], index));
    setFavSong(false);
  }
  function removeFav() {
    let x = favSongList.filter((item) => {
      return item.id !== songs[index].id;
    });
    dispatch(removeFavSong(x));
    setFavSong(true);
  }

  return (
    <div className="fixed inset-0 bg-gray-900 text-white p-6 lg:p-12 flex flex-col items-center justify-center overflow-auto">
      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8 w-full lg:max-w-4xl">
        <img
          src={selectedSong.album.cover}
          alt={selectedSong.album.title}
          className="w-64 h-64 lg:w-96 lg:h-96 rounded-lg shadow-lg"
        />
        <div className="text-center lg:text-left space-y-4">
          <div className="flex items-center justify-center gap-10">
            <h2 className="text-3xl lg:text-4xl font-bold">
              {selectedSong.album.title}
            </h2>
            <span className="text-4xl">
              {favSong ? (
                <CiHeart onClick={addFav} />
              ) : (
                <FaHeart onClick={removeFav} />
              )}
            </span>
          </div>
          <p className="text-lg lg:text-xl text-gray-400">
            {selectedSong.artist.name}
          </p>
          <p className="text-gray-400">{selectedSong.album.year}</p>
        </div>
      </div>
      <div className="mt-8 w-full lg:max-w-4xl">
        <Player />
      </div>
    </div>
  );
};

export default AlbumDetails;
