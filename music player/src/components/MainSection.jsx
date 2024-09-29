import React, { useEffect, useState, useRef } from "react";
import MusicCard from "./MusicCard";

const MainSection = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSong, setCurrentSong] = useState(null);
  const audioRefs = useRef([]);
  function getData() {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=''`
    )
      .then((response) => response.json())
      .then((data) => {
        setSongs(data.data); // Deezer returns track data in 'data' array
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching music data:", error);
        setLoading(false);
      });
  }
  useEffect(() => {
    getData();
  }, []);
  if (loading) {
    return (
      <div className="w-full mx-auto text-center mt-16 md:mt-20 lg:mt-28 md:text-3xl text-2xl font-bold text-green-600">
        <p>Loading..</p>
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
