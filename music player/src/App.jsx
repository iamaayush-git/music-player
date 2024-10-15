import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AlbumDetails from "./pages/AlbumDetails";
import FavSong from "./pages/FavSong";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/album/`} element={<AlbumDetails />} />
        <Route path={`/favSong/`} element={<FavSong />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
