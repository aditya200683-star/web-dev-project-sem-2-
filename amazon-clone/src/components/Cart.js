import React from "react";

function Cart({ cart, removeFromCart }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        cart.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
              borderBottom: "1px solid gray",
              paddingBottom: "10px",
            }}
          >
            <span>{item.name}</span>

            <button
              onClick={() =>
                removeFromCart(index)
              }
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;