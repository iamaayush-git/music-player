import React, { useState } from "react";
import { Link } from "react-router-dom";

const MusicCard = ({ image, name, artist }) => {
  return (
    <Link to={"album/id"} >
      <div className="h-60 w-52 shadow-lg rounded-lg text-center mt-14 cursor-pointer flex flex-col items-center justify-start gap-5 pb-5 overflow-hidden">
      <img src={image} alt="" className="w-full h-[60%] object-cover" />
      <div className="w-full">
        <p className="w-full text-left font-semibold text-lg pl-4 text-nowrap">
          {name.length > 20 ? name.slice(0, 15) + "..." : name}
        </p>
        <p className="text-sm text-left pl-4">
          {" "}
          <span className="font-semibold">Artist:</span> {artist}
        </p>
      </div>
    </div>
    </Link>
  );
};

export default MusicCard;
