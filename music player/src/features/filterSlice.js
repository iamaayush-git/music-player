import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredSongs: [],
  searchStatus : false
};

const filteredSlice = createSlice({
  name: "filteredSongs",
  initialState,
  reducers: {
    setFilterSongs: (state, action) => {
      state.filteredSongs = action.payload;
    },
    setSearchStatus:(state, action)=>{
      state.searchStatus = action.payload;
    }
  },
});

export const { setFilterSongs,setSearchStatus } = filteredSlice.actions;
export default filteredSlice.reducer;
