// src/pages/Cart.jsx
import React from "react";
import { useCart } from "./CartContext"; // Make sure path is correct
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar"; // Make sure path is correct

function Cart() {
  const { cartItems, removeFromCart, getCartTotal } = useCart();
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      <div className="container p-4 text-center">
        <h2 className="mb-4 fw-bold">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="card mb-3 p-3">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "100px" }}
                    className="mb-2"
                  />
                )}
                <h5>{item.name}</h5>
                <p>
                  ₹{item.price} x {item.quantity}
                </p>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}

            <h4 className="mt-4">Total: ₹{getCartTotal()}</h4>
            <button
              className="btn btn-success mt-3"
              onClick={() => navigate("/payment")}
            >
              Proceed to Payment
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;