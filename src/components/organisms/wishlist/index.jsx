import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CardBook } from "../../molecules";

const Wishlist = () => {
  const [list, setList] = useState([]);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (user) {
      const list = JSON.parse(localStorage.getItem(user.name));
      if (list) {
        setList(list);
      }
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      localStorage.setItem(user.name, JSON.stringify(list));
    }
  }, [list, user]);

  return (
    <div className="list-wrapper h-full grid grid-cols-2 gap-4 overflow-auto">
      {!list.length > 0 ? (
        <p className="w-full h-full col-span-2 flex justify-center items-center text-3xl font-rubik font-semibold">
          Tidak ada buku di Wishlist!
        </p>
      ) : (
        list.map((item, i) => {
          return (
            <CardBook
              image={item.image}
              title={item.title}
              author={item.author}
              price={item.price}
              url={item.original_url}
              id={item.slug}
              key={i}
            />
          );
        })
      )}
    </div>
  );
};

export default Wishlist;
