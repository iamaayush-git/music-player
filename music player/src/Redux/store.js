import {configureStore} from "@reduxjs/toolkit";
import songReducer from "../features/songSlice";
import filterReducer from "../features/filterSlice";

export const store = configureStore({
 reducer:{
  songs: songReducer,
  filterSongs : filterReducer,
 }
})