import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { setBookList, setSearchResult } from "../../app/bookSlice/bookSlice";
import { Footer, Header, ListBook, TopBar, Wishlist } from "../../components";
import { api } from "../../config/api/api";

const Home = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.book.wishlist);
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
          const query = `/books?page=${page}&language=id&category=${category.slug}`;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchKey, category, page, cookies, dispatch]);

  return (
    <div className="flex w-screen h-screen overflow-y-scroll">
      <Header />
      <main className="w-full h-full">
        <TopBar />
        <div className="content h-[78%] px-6 py-4">
          <h2 className="font-rubik text-2xl px-6 pb-4 font-semibold">
            {!wishlist
              ? category
                ? category.name
                : "Daftar Buku Terpopuler"
              : "Wishlist"}
          </h2>
          {!wishlist ? (
            <ListBook data={searchKey ? searchResult : bookList} />
          ) : (
            <Wishlist />
          )}
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
