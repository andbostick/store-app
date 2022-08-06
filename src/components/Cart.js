import React from "react";
import Nav from "./Nav";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import "../styles/cart.css"

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  return (
    <main>
      <Nav />
      <section>
        <div>{
          cart.cartItems.length === 0 ? (
            <div className="cart-empty">
              <p>cart is currently empty</p>
              <div>
                <Link to="/">Return to shop</Link>
              </div>
            </div>
          ) : (<div>
            {cart.cartItems?.map(el => {
              return (
                <div className="cart-items">
                  <img src={el.image} alt={el.title}></img>
                  <h3>{el.title}</h3>
                  <p>{el.price}</p>
                  <p>{el.cartQuantity}</p>
                  <p>{el.price * el.cartQuantity}</p>
                  </div>
              )
                
                
          }
          )}
              <div>
                <button>Clear Cart</button>
                
              </div>
            </div>)
        }</div>
      </section>
    </main>
  );
}
