import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CardBook } from "../../molecules";

const Wishlist = ({ search }) => {
  const user = useSelector((state) => state.user.user);
  const [list, setList] = useState([]);
  const [searchRes, setSearchRes] = useState([]);
  const [update, setUpdate] = useState(false);

  const removeWishlist = (id) => {
    const index = list.findIndex((item) => item.slug === id);
    list.splice(index, 1);
    localStorage.setItem(user.name, JSON.stringify(list));
    setUpdate(!update);
  };

  useEffect(() => {
    if (user) {
      const books = JSON.parse(localStorage.getItem(user.name));
      if (books) {
        setList(books);
        console.log(books);
      }
    }
  }, [user, update]);

  useEffect(() => {
    const result = list.filter((item) => item.title.includes(search));
    setSearchRes(result);
  }, [search, list]);

  const listWishList = list.map((item, i) => {
    return (
      <CardBook
        image={item.image}
        title={item.title}
        author={item.author}
        price={item.price}
        url={item.original_url}
        id={item.slug}
        key={i}
        onWishlist={() => removeWishlist(item.slug)}
      />
    );
  });

  const noBook = (
    <p className="w-full h-full col-span-2 flex justify-center items-center text-xl md:text-2xl lg:text-3xl font-rubik font-semibold">
      Tidak ada buku di Wishlist!
    </p>
  );

  const searchBook = searchRes.map((item, i) => {
    return (
      <CardBook
        image={item.image}
        title={item.title}
        author={item.author}
        price={item.price}
        url={item.original_url}
        id={item.slug}
        key={i}
        onWishlist={() => removeWishlist(item.slug)}
      />
    );
  });

  return (
    <div className="list-wrapper h-full grid grid-cols-1 md:grid-cols-2 gap-4 overflow-auto">
      {search
        ? searchRes?.length > 0
          ? searchBook
          : noBook
        : list?.length > 0
        ? listWishList
        : noBook}
    </div>
  );
};

export default Wishlist;
