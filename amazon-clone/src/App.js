import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Cart from "./components/Cart";
import "./App.css";

function App() {

  const products = [
    {
      id: 1,
      name: "iPhone 15",
      price: 79999,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    },
    {
      id: 2,
      name: "Headphones",
      price: 1999,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 3999,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    },
    {
      id: 4,
      name: "Running Shoes",
      price: 2999,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    },
  ];

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));

    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <div>
      <Navbar count={cart.length} />

      <div className="banner">
        <h1>Welcome to Amazon Clone</h1>
      </div>

      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
  
}

export default App;
