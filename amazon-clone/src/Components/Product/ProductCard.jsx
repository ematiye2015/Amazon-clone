



import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css"
function ProductCard({ product }) {
  const { title, image, price, rating } = product;

  return (
    <div className={`${classes.card_container}`}>
      <a href="#">
        <img src={image} alt={title} width={150} />
      </a>

      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
          {/* rating */}
          {rating && (
            <>
              <Rating value={rating.rate} precision={0.1} readOnly />
              <small>({rating.count})</small>
            </>
          )}
        </div>
      </div>

      <div>
        {/* price */}
        <CurrencyFormat amount={price} />
      </div>

      <button className={classes.buttonf}>
        Add to cart
    </button>
    </div>
  );
}

export default ProductCard;