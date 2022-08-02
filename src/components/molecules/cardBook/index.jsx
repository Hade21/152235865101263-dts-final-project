import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../atoms";

const CardBook = ({ image, title, author, price, url, id, onWishlist }) => {
  const navigate = useNavigate();
  return (
    <div className="card h-full flex flex-col lg:flex-row gap-2 lg:gap-4 items-center px-6 py-4 bg-slate-200 rounded-lg">
      <img
        src={image}
        alt="poster"
        className="cursor-pointer w-5/6 md:w-2/5 lg:w-1/3 rounded-lg"
        onClick={() => navigate(`/book/${id}`)}
      />
      <div className="detail cursor-pointer w-full font-rubik text-left flex flex-col justify-between h-full  ">
        <div className="desc">
          <h3
            className="font-bold text-base md:text-xl lg:text-2xl"
            onClick={() => navigate(`/book/${id}`)}
          >
            {title}
          </h3>
          <p className="font-normal text-sm md:text-base lg:text-lg">
            {author}
          </p>
          <p className="font-semibod text-sm md:text-base lg:text-lg text-red-700">
            {price}
          </p>
        </div>
        <div className="buttons w-full flex flex-col lg:flex-row justify-center items-center gap-2 sm:gap-4 mt-6">
          <Button type="submit">
            <a href={url} target="_blank" rel="noopener noreferrer">
              Beli
            </a>
          </Button>
          <Button type="submit" model="outlined" onClick={onWishlist}>
            Wishlist
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardBook;
