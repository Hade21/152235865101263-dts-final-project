import React, { useEffect, useState } from "react";
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
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        if (!searchKey && !category) {
          setLoading(true);
          const query = `/books?page=${page}&language=id`;
          const result = await api.get(query, {
            headers: {
              Authorization: `Bearer ${cookies.token}`,
            },
          });
          dispatch(setBookList(result.data.books));
          setLoading(false);
        } else if (!searchKey && category) {
          setLoading(true);
          const query = `/books?page=${page}&language=id&category=${category.slug}`;
          const result = await api.get(query, {
            headers: {
              Authorization: `Bearer ${cookies.token}`,
            },
          });
          dispatch(setBookList(result.data.books));
          setLoading(false);
        } else if (searchKey) {
          setLoading(true);
          const query = `/books/search?keyword=${searchKey}&page=${page}`;
          const result = await api.get(query, {
            headers: {
              Authorization: `Bearer ${cookies.token}`,
            },
          });
          dispatch(setSearchResult(result.data.books));
          setLoading(false);
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
        <div className="content h-3/4 md:h-[70%] lg:h-3/4 px-3 sm:px-4 lg:px-6 py-2 md:py-4">
          <h2 className="font-rubik text-base md:text-xl lg:text-2xl px-2 sm:px4 lg:px-6 pb-2 md:pb-4 font-semibold">
            {!wishlist
              ? category
                ? category.name
                : "Daftar Buku Terpopuler"
              : "Wishlist"}
          </h2>
          {!wishlist ? (
            <ListBook
              data={searchKey ? searchResult : bookList}
              loading={isLoading}
            />
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
