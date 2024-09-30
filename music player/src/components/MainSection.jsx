import React, { useEffect, useState, useRef } from "react";
import MusicCard from "./MusicCard";
import { setSongs } from "../features/songSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const MainSection = () => {
  // const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSong, setCurrentSong] = useState(null);
  const audioRefs = useRef([]);
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs.list);
  const filteredSongs = useSelector((state) => state.filterSongs.filteredSongs);
  function getData() {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=''`
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch(setSongs(data.data)); // Deezer returns track data in 'data' array
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching music data:", error);
        setLoading(true);
      });
  }
  useEffect(() => {
    getData();
  }, []);
  if (loading) {
    return (
      <div className="w-full mx-auto text-center mt-16 md:mt-20 lg:mt-28 md:text-3xl text-xl font-bold text-green-600">
        <p>please wait..</p>
      </div>
    );
  }
  if (filteredSongs.length > 0) {
    return (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mb-20">
        {filteredSongs.map((item, i) => {
          return (
            <MusicCard
              key={i}
              image={item.album.cover}
              name={item.album.title}
              artist={item.artist.name}
              audio={item.preview}
              albumId={item.album.id}
              index={i}
              currentSong={currentSong}
              setCurrentSong={setCurrentSong}
              audioRefs={audioRefs}
            />
          );
        })}
      </div>
    );
  }
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mb-20">
      {songs.map((item, i) => {
        return (
          <MusicCard
            key={i}
            image={item.album.cover}
            name={item.album.title}
            artist={item.artist.name}
            audio={item.preview}
            albumId={item.album.id}
            index={i}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            audioRefs={audioRefs}
          />
        );
      })}
    </div>
  );
};
export default MainSection;
