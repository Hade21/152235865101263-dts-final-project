import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../atoms";

const CardBook = ({ image, title, author, price, url, id }) => {
  const navigate = useNavigate();
  return (
    <div className="card flex gap-4 items-center px-6 py-4 bg-slate-200 rounded-lg">
      <img
        src={image}
        alt="poster"
        className="cursor-pointer w-1/3 rounded-lg"
        onClick={() => navigate(`/book/${id}`)}
      />
      <div
        className="detail cursor-pointer font-rubik text-left"
        onClick={() => navigate(`/book/${id}`)}
      >
        <h3 className="font-bold text-2xl">{title}</h3>
        <p className="font-normal text-lg">{author}</p>
        <p className="font-semibod text-lg text-red-700">{price}</p>
        <div className="buttons w-full flex justify-center gap-8 mt-6">
          <Button type="submit">
            <a href={url} target="_blank" rel="noopener noreferrer">
              Beli
            </a>
          </Button>
          <Button type="submit" model="outlined">
            Wishlist
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardBook;
