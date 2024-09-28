import React, { useEffect, useState } from "react";
import MusicCard from "./MusicCard";
const MainSection = () => {
  const [songs, setSongs] = useState([]);

  function getData() {
    let result = fetch(
      "https://v1.nocodeapi.com/aayush30/spotify/eCIwCGJdYgzRcYFp/search?q=%3Cq%3E"
    )
      .then((response) => response.json())
      .then((data) => setSongs(data.albums.items))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getData();
  }, []);
  console.log(songs);
  
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-items-center mb-20">
      {songs.map((items, i) => {
        return (
          <MusicCard
            key={i}
            image={items.images[0].url}
            name={items.name}
            artist={items.artists[0].name}
          />
        );
      })}
    </div>
  );
};

export default MainSection;
