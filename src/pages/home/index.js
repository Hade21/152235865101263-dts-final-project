import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { setBookList, setSearchResult } from "../../app/bookSlice/bookSlice";
import { Header, ListBook, TopBar } from "../../components";
import { api } from "../../config/api/api";

const Home = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.book.page);
  const category = useSelector((state) => state.book.category);
  const bookList = useSelector((state) => state.book.booklist);
  const searchKey = useSelector((state) => state.book.searchKey);
  const searchResult = useSelector((state) => state.book.searchResult);
  const [cookies] = useCookies(["token"]);

  useEffect(() => {
    async function fetchData() {
      try {
        if (!searchKey && !category) {
          const query = `/books?page=${page}&language=id`;
          const result = await api.get(query, {
            headers: {
              Authorization: `Bearer ${cookies.token}`,
            },
          });
          dispatch(setBookList(result.data.books));
          console.log(bookList);
        } else if (!searchKey && category) {
          const query = `/books?page=${page}&language=id&category=${category}`;
          const result = await api.get(query, {
            headers: {
              Authorization: `Bearer ${cookies.token}`,
            },
          });
          console.log(result);
          dispatch(setBookList(result.data.books));
        } else if (searchKey) {
          const query = `/books/search?keyword=${searchKey}&page=${page}`;
          const result = await api.get(query, {
            headers: {
              Authorization: `Bearer ${cookies.token}`,
            },
          });
          console.log(result);
          dispatch(setSearchResult(result.data.books));
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [searchKey, category, page, cookies, dispatch, bookList]);

  return (
    <div className="flex">
      <Header />
      <main className="w-full">
        <TopBar />
        <div className="content h-full overflow-auto">
          <ListBook data={searchKey ? searchResult : bookList} />
        </div>
      </main>
    </div>
  );
};

export default Home;
