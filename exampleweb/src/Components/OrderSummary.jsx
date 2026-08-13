import React from 'react'


const OrderSummary = ({
    cart,
    closeOrderSummary,
    orderConfirm
}) => {

    const subtotal = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    )

    const shipping = cart.length > 0 ? 100 : 0

    const orderTotal = subtotal + shipping

    return (
        <section className="order-summary-page">

            <div className="order-summary-card">

                <h1 className="order-summary-title">
                    Order Summary
                </h1>

                <div className="order-summary-details">

                    <div className="order-summary-row">
                        <span>Subtotal</span>
                        <span>₹{subtotal}</span>
                    </div>

                    <div className="order-summary-row">
                        <span>Shipping & Handling</span>
                        <span>₹{shipping}</span>
                    </div>

                    <div className="order-summary-total">
                        <span>Order Total</span>
                        <span>₹{orderTotal}</span>
                    </div>

                </div>


                {/* Buttons */}

                <div className="order-summary-actions">

                    <button
                        className="order-close-btn"
                        onClick={closeOrderSummary}
                    >
                        Close
                    </button>

                    <button
                        className="order-confirm-btn"
                        onClick={orderConfirm}
                    >
                        Confirm Order
                    </button>

                </div>

            </div>

        </section>
    )
}

export default OrderSummary