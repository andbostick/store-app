import React from 'react'
import '../styles/nav.css'
import { Link,  } from 'react-router-dom';
import Cart from './Cart';

export default function Nav() {
  return (
      <main>
          <section>
          <h1>Fake Store</h1>
      </section>
      <Cart />
          <section className='nav-links'>
          <Link to="/">Home</Link>
          <Link to ="/store">Products</Link>
      </section>
      
      </main>
  )
}
