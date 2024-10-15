import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: "favSongs",
  initialState: {
    favList: [],
  },
  reducers: {
    setFavSongs: (state, action) => {
      state.favList.push(action.payload);
    },
    removeFavSong: (state, action) => {
      state.favList = action.payload;
    },
  },
});

export const { setFavSongs, removeFavSong } = songSlice.actions;
export default songSlice.reducer;
