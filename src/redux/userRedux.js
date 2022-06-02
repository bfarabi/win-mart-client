import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false
  },
  reducers: {
    loginStart:(state)=>{
        state.isFetching = true
    },
    loginSuccess:(state, action)=>{
        state.isFetching = false;
        state.currentUser = action.payload
    },
    loginFailure:(state)=>{
        state.isFetching = false;
        state.error = true;
    },
    logout:(state)=>{
      state.currentUser = null;
  },


    registerUser:(state, action)=>{
        state.currentUser = action.payload;
    },
    
  },
});

export const {loginStart, loginSuccess, loginFailure, logout, registerUser } = userSlice.actions;
export default userSlice.reducer;