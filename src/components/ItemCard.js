import React from "react";
import "../styles/itemcard.css";
export default function ItemCard({ products }) {
  return (
    <main className="item-container">
      {products.map((product) => (
        <section className="item-card">
              <p>{product.title}</p>
              <img src={product.image}></img>
              <p>{product.description}</p>
              <p>{product.price}</p>
        </section>
      ))}
    </main>
  );
}
