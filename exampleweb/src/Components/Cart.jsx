import React from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

const Cart = ({
    handel,
    closePanel,
    cart,
    removeproduct,
    quantityincrement,
    quantitydecrement,
    setOrderSummary
}) => {

    if (handel !== "cart") return null;

    return (
        <section className="cart-overlay">
            <div className="cart-panel">
                {/* Header */}
                <div className="cart-header">
                    <h1 className="cart-heading">
                        Your Cart
                    </h1>
                    <span className="cart-count">
                        {cart.length} Items
                    </span>
                </div>

                {/* Cart Items */}
                <div className="cart-items">

                    {cart.length === 0 ? (

                        <p>Your cart is empty</p>

                    ) : (

                        cart.map((product) => (

                            <div
                                className="cart-item"
                                key={product.id}
                            >
                                {/* Image */}
                                <div className="cart-image">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                    />
                                </div>
                                {/* Product Info */}
                                <div className="cart-info">

                                    <h3>
                                        {product.name}
                                    </h3>

                                    <p>
                                        ₹{product.price}
                                    </p>
                                    {/* Quantity */}
                                    <div className="quantity-box">

                                        <button
                                            onClick={() =>
                                                quantitydecrement(product)
                                            }
                                        >
                                            <FaMinus />
                                        </button>
                                        <span>
                                            {product.quantity}
                                        </span>
                                        <button
                                            onClick={() =>
                                                quantityincrement(product)
                                            }
                                        >
                                            <FaPlus />
                                        </button>
                                    </div>

                                </div>
                                {/* Delete */}
                                <button
                                    className="cart-delete"
                                    onClick={() =>
                                        removeproduct(product)
                                    }
                                >
                                    <FaTrash />
                                </button>
                            </div>
                        ))
                    )}
                </div>
                {/* Summary */}
                <div className="cart-summary">
                    <div>
                        <span>Subtotal</span>
                        <span>
                            ₹
                            {cart.reduce(
                                (total, item) =>
                                    total +
                                    item.price * item.quantity,
                                0
                            )}
                        </span>
                    </div>
                    <div>
                        <span>
                            Shipping & Handling
                        </span>

                        <span>
                            {cart.length > 0 ? "₹100" : "$0"}
                        </span>
                    </div>
                    <div className="cart-total">
                        <span>
                            Order Total
                        </span>
                        <span>
                            ₹
                            {cart.reduce(
                                (total, item) =>
                                    total +
                                    item.price * item.quantity,
                                0
                            ) + (cart.length > 0 ? 100 : 0)}
                        </span>
                    </div>
                </div>
                {/* Actions */}
                <div className="cart-actions">

                    <button
                        className="cart-close"
                        onClick={closePanel}
                    >
                        Close
                    </button>
                    <button
                        className="checkout-btn"
                        disabled={cart.length === 0}
                        onClick={() => {
                            setOrderSummary(true)
                            closePanel()
                        }}
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Cart;