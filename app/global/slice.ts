import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user:{},
  toggle: false
};

const slice = createSlice({
  name: "reducer",
  initialState,
  reducers: {
   signUser: (state, {payload})=>{state.user = payload;
   },
   toggle: (state, {payload}) => {
    state.toggle = payload
   }
  },
});

export const {signUser, toggle } = slice.actions;

export default slice.reducer;