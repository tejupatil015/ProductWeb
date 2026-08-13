import React from "react";
import Jacket from "./../assets/leather-jacket.png";
import { FaTrash } from "react-icons/fa";

const WishList = ({handel , closePanel}) => {
    if (handel !== "wishlist") return null;
  return (
    <section className="wishlist-overlay">
      <div className="wishlist-panel">

        <div className="wishlist-header">
          <h1 className="wishlist-heading">Your Wishlist</h1>
          <span className="wishlist-count">1 Item</span>
        </div>

        <div className="wishlist-item">
          <div className="wishlist-image">
            <img src={Jacket} alt="Leather Jacket" />
          </div>

          <div className="wishlist-info">
            <h3>Leather Jacket</h3>
            <p>₹1,499</p>
          </div>

          <button className="wishlist-delete">
            <FaTrash />
          </button>
        </div>

        <div className="wishlist-actions">
          <button className="wishlist-close" onClick={closePanel}>Close</button>
          <button className="wishlist-cart">Add To Cart</button>
        </div>

      </div>
    </section>
  );
};

export default WishList;