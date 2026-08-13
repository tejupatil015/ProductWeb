import React from "react";
import { FaTrash } from "react-icons/fa";

const WishList = ({
    handel,
    closePanel,
    wishlist,
    removeFromWishlist,
    addToCart
}) => {

    if (handel !== "wishlist") return null;

    return (
        <section className="wishlist-overlay">

            <div className="wishlist-panel">

                {/* Header */}
                <div className="wishlist-header">

                    <h1 className="wishlist-heading">
                        Your Wishlist
                    </h1>

                    <span className="wishlist-count">
                        {wishlist.length} Items
                    </span>

                </div>


                {/* Wishlist Items */}
                <div className="wishlist-items">

                    {wishlist.length === 0 ? (

                        <p className="empty-wishlist">
                            Your wishlist is empty
                        </p>

                    ) : (

                        wishlist.map((product) => (

                            <div
                                className="wishlist-item"
                                key={product.id}
                            >

                                {/* Image */}
                                <div className="wishlist-image">

                                    <img
                                        src={product.image}
                                        alt={product.name}
                                    />

                                </div>


                                {/* Product Info */}
                                <div className="wishlist-info">

                                    <h3>
                                        {product.name}
                                    </h3>

                                    <p>
                                        ₹{product.price}
                                    </p>

                                </div>


                                {/* Delete */}
                                <button
                                    className="wishlist-delete"
                                    onClick={() =>
                                        removeFromWishlist(product)
                                    }
                                >
                                    <FaTrash />
                                </button>

                            </div>

                        ))

                    )}

                </div>


                {/* Actions */}
                <div className="wishlist-actions">

                    <button
                        className="wishlist-close"
                        onClick={closePanel}
                    >
                        Close
                    </button>

                    <button
                        className="wishlist-cart"
                        disabled={wishlist.length === 0}
                        onClick={() => {

                            wishlist.forEach(product => {
                                addToCart(product);
                            });

                            closePanel();

                        }}
                    >
                        Add To Cart
                    </button>

                </div>

            </div>

        </section>
    );
};

export default WishList;