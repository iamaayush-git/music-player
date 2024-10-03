import React from "react";
import Player from "../components/Player";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// Task for tommorrow is to remove album id and use index for identifying the songs and store the index into store
const AlbumDetails = () => {
  const songs = useSelector((state) => state.songs.list);
  const albumId = useParams().id;
  const selectedSong = songs.find((item) => item.album.id == albumId);

  if (!selectedSong) {
    return <div>Album not found</div>;
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
          <h2 className="text-3xl lg:text-4xl font-bold">
            {selectedSong.album.title}
          </h2>
          <p className="text-lg lg:text-xl text-gray-400">
            {selectedSong.artist.name}
          </p>
          <p className="text-gray-400">{selectedSong.album.year}</p>
        </div>
      </div>
      <div className="mt-8 w-full lg:max-w-4xl">
        <Player selectedSong={selectedSong} />
      </div>
    </div>
  );
};

export default AlbumDetails;
