import React from 'react'
import '../styles/nav.css'
import { Link,  } from 'react-router-dom';


export default function Nav() {
  return (
      <main>
          <section>
          <h1>Fake Store</h1>
      </section>
      
          <section className='nav-links'>
          <Link to="/">Home</Link>
              <Link to="/store">Products</Link>
              <Link to='/cart'>Cart</Link>
      </section>
      
      </main>
  )
}
