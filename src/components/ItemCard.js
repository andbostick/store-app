import React from "react";
import "../styles/itemcard.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

export default function ItemCard({ products }) {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <main className="item-container">
      {products.map((product) => (
        <section className="item-card" key={product.id}>
          <p>{product.title}</p>
          <img src={product.image} alt="product"></img>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
        </section>
      ))}
    </main>
  );
}
