import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: null,
  booklist: null,
  searchKey: null,
  searchResult: null,
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      return {
        ...state,
        category: action.payload,
      };
    },
    setBookList: (state, action) => {
      return {
        ...state,
        booklist: action.payload,
      };
    },
    setSearchKey: (state, action) => {
      return {
        ...state,
        searchKey: action.payload,
      };
    },
    setSearchResult: (state, action) => {
      return {
        ...state,
        searchResult: action.payload,
      };
    },
  },
});

export const { setCategory, setBookList, setSearchKey, setSearchResult } =
  bookSlice.actions;

export default bookSlice.reducer;
