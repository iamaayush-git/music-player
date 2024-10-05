import { createSlice } from "@reduxjs/toolkit";


const songSlice = createSlice({
  name : "songs",
  initialState:{
    list:[],
    index: 0
  },
  reducers:{
    setSongs: (state, action)=>{
      state.list = action.payload;
    },
    setIndex:(state, action)=>{
      state.index = action.payload 
  }
  }
})

export const {setSongs, setIndex} = songSlice.actions;
export default songSlice.reducer;
