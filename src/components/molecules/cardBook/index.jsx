import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../atoms";

const CardBook = ({ image, title, author, price, url, id }) => {
  const navigate = useNavigate();
  return (
    <div className="card">
      <img
        src={image}
        alt="poster"
        className="cursor-pointer"
        onClick={() => navigate(`/book/${id}`)}
      />
      <div
        className="detail cursor-pointer"
        onClick={() => navigate(`/book/${id}`)}
      >
        <h3>{title}</h3>
        <p>{author}</p>
        <p>{price}</p>
      </div>
      <div className="buttons">
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
  );
};

export default CardBook;
