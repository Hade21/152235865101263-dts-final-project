import React from "react";
import { CardBook } from "../../molecules";

const ListBook = ({ data }) => {
  return (
    <div className="list-wrapper h-full overflow-auto">
      {data.length > 0 ? (
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
            />
          );
        })
      ) : (
        <p>Tidak ada data</p>
      )}
    </div>
  );
};

export default ListBook;
