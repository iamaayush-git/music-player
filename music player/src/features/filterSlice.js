// filteredSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredSongs: [], // Initialize with an empty array
};

const filteredSlice = createSlice({
  name: "filteredSongs",
  initialState,
  reducers: {
    setFilterSongs: (state, action) => {
      state.filteredSongs = action.payload; // Update filteredSongs based on search
    },
  },
});

export const { setFilterSongs } = filteredSlice.actions;
export default filteredSlice.reducer;
