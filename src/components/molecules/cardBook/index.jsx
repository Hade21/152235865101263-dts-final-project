import React from "react";
import { Button } from "../../atoms";

const CardBook = ({ image }) => {
  return (
    <div className="card">
      <img src={image} alt="poster" />
      <div className="detail">
        <h3>Title</h3>
        <p>Description</p>
        <p>Price</p>
      </div>
      <div className="buttons">
        <Button type="submit">Beli</Button>
        <Button type="submit" model="outlined">
          Wishlist
        </Button>
      </div>
    </div>
  );
};

export default CardBook;
