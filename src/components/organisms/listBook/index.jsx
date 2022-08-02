import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNextPage, setPrevPage } from "../../../app/bookSlice/bookSlice";
import { Button } from "../../atoms";
import { CardBook } from "../../molecules";
import { LoadingPage } from "../../atoms";

const ListBook = ({ data, loading }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const page = useSelector((state) => state.book.page);

  const setWishlist = (id) => {
    const book = data.filter((item) => item.slug === id)[0];
    const books = JSON.parse(localStorage.getItem(user.name));
    if (!books || !books.length > 0) {
      const list = [book];
      return localStorage.setItem(user.name, JSON.stringify(list));
    }
    if (books) {
      const exist = books.filter((item) => item.slug === book.slug);
      if (!exist?.length > 0) {
        books.push(book);
        return localStorage.setItem(user.name, JSON.stringify(books));
      }
    }
  };

  const navigation = (
    <div className="button h-fit md:col-span-2 flex gap-4 justify-around mt-2 transition-all duration-200 w-full">
      {page > 1 ? (
        <Button model="outlined" onClick={() => dispatch(setPrevPage())}>
          Prev
        </Button>
      ) : null}
      <Button model="outlined" onClick={() => dispatch(setNextPage())}>
        Next
      </Button>
    </div>
  );

  const content = (
    <div className="list-wrapper h-full snap-y grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4 overflow-auto">
      {data?.length > 0 ? (
        data.map((item, i) => {
          return (
            <CardBook
              image={item.image}
              title={item.title}
              author={item.author}
              price={item.price}
              url={item.original_url}
              id={item.slug}
              key={i}
              btnType="wishlist"
              onWishlist={() => {
                setWishlist(item.slug);
              }}
            />
          );
        })
      ) : (
        <p className="w-full h-full md:col-span-2 flex justify-center items-center text-xl md:text-2xl lg:text-3xl font-rubik font-semibold">
          Tidak ada buku!
        </p>
      )}
      {data?.length > 0 ? navigation : null}
    </div>
  );

  return <>{loading ? <LoadingPage loading={loading} /> : content}</>;
};

export default ListBook;
