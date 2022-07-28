import React from "react";
import { CardBook } from "../../molecules";

const ListBook = ({ data }) => {
  return (
    <div className="list-wrapper h-full overflow-auto">
      {data.length > 0 ? (
        data.map((item) => {
          return <CardBook image={item.image} />;
        })
      ) : (
        <p>Tidak ada data</p>
      )}
    </div>
  );
};

export default ListBook;
