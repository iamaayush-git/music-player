import { configureStore } from "@reduxjs/toolkit";
import songReducer from "../features/songSlice";
import filterReducer from "../features/filterSlice";
import favSongReducer from "../features/favSong";
export const store = configureStore({
  reducer: {
    songs: songReducer,
    filterSongs: filterReducer,
    favSongs: favSongReducer,
  },
});
