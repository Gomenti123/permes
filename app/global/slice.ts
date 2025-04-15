import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user:{}
};

const slice = createSlice({
  name: "reducer",
  initialState,
  reducers: {
   signUser: (state, {payload})=>{state.user = payload;
   }
  },
});

export const {signUser } = slice.actions;

export default slice.reducer;