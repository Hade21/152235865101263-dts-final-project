import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNextPage, setPrevPage } from "../../../app/bookSlice/bookSlice";
import { Button } from "../../atoms";
import { CardBook } from "../../molecules";

const ListBook = ({ data }) => {
  const dispatch = useDispatch();
  const [wishlist, setWishList] = useState([]);
  const user = useSelector((state) => state.user.user);
  const page = useSelector((state) => state.book.page);

  const onWishlist = (id) => {
    const book = data.filter((item) => item.slug === id)[0];
    const books = wishlist;
    const exist = books.filter((item) => item.slug === book.slug);
    if (exist.length === 0) {
      setWishList(books);
    }
  };

  useEffect(() => {
    if (wishlist && user) {
      localStorage.setItem(user.name, JSON.stringify(wishlist));
    }
  }, [wishlist, user]);

  const navigation = (
    <div className="button col-span-2 flex justify-around mt-2 transition-all duration-200">
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

  return (
    <div className="list-wrapper h-full grid grid-cols-2 gap-4 overflow-auto">
      {data ? (
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
              onWishlist={() => {
                onWishlist(item.slug);
              }}
            />
          );
        })
      ) : (
        <p className="w-full h-full col-span-2 flex justify-center items-center text-3xl font-rubik font-semibold">
          Tidak ada data!
        </p>
      )}
      {data ? navigation : null}
    </div>
  );
};

export default ListBook;
