import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  name: "",
  email: "",
  pass: "",
  cPass: "",
  errMsg: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        user: action.payload,
      };
    },
    setName: (state, action) => {
      return {
        ...state,
        name: action.payload,
      };
    },
    setEmail: (state, action) => {
      return {
        ...state,
        email: action.payload,
      };
    },
    setPass: (state, action) => {
      return {
        ...state,
        pass: action.payload,
      };
    },
    setCPass: (state, action) => {
      return {
        ...state,
        cPass: action.payload,
      };
    },
    setErrMsg: (state, action) => {
      return {
        ...state,
        errMsg: action.payload,
      };
    },
  },
});

export const { setUser, setName, setEmail, setPass, setCPass, setErrMsg } =
  userSlice.actions;

export default userSlice.reducer;
