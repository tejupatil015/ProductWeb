import React from "react";
import Jacket from "./../assets/leather-jacket.png";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

const Cart = ({ handel , closePanel}) => {

    if (handel !== "cart") return null;
    return (
        <section className="cart-overlay">
            <div className="cart-panel">

                <div className="cart-header">
                    <h1 className="cart-heading">Your Cart</h1>
                    <span className="cart-count">1 Item</span>
                </div>

                <div className="cart-item">

                    <div className="cart-image">
                        <img src={Jacket} alt="Leather Jacket" />
                    </div>

                    <div className="cart-info">
                        <h3>Leather Jacket</h3>
                        <p>₹1,499</p>

                        <div className="quantity-box">
                            <button>
                                <FaMinus />
                            </button>

                            <span>1</span>

                            <button>
                                <FaPlus />
                            </button>
                        </div>
                    </div>

                    <button className="cart-delete">
                        <FaTrash />
                    </button>

                </div>

                <div className="cart-summary">

                    <div>
                        <span>Subtotal</span>
                        <span>₹1,499</span>
                    </div>

                    <div>
                        <span>Shipping & Handling</span>
                        <span>₹100</span>
                    </div>

                    <div className="cart-total">
                        <span>Order Total</span>
                        <span>₹1,599</span>
                    </div>

                </div>

                <div className="cart-actions">
                    <button className="cart-close" onClick={closePanel}>Close</button>
                    <button className="checkout-btn">Checkout</button>
                </div>

            </div>
        </section>
    );
};

export default Cart;