import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: null,
  booklist: null,
  searchKey: null,
  searchResult: null,
  page: 1,
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
    setNextPage: (state) => {
      const nextPage = state.page + 1;
      return {
        ...state,
        page: nextPage,
      };
    },
    setPrevPage: (state) => {
      if (state.page > 1) {
        const prevPage = state.page - 1;
        return {
          ...state,
          page: prevPage,
        };
      }
    },
    setReset: (state, action) => {
      return {
        ...state,
        category: null,
        booklist: null,
        searchKey: null,
        searchResult: null,
        page: 1,
      };
    },
  },
});

export const {
  setCategory,
  setBookList,
  setSearchKey,
  setSearchResult,
  setNextPage,
  setPrevPage,
  setReset,
} = bookSlice.actions;

export default bookSlice.reducer;
