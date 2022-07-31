import { useState,useEffect } from 'react' 
import ItemCard from './components/ItemCard'
import Nav from './components/Nav'

export default function Store() {

    const [products,setProducts] = useState(undefined)

    async function fetchProducts() {
       const response = await fetch('https://fakestoreapi.com/products')
       let data = await response.json()
       return data
       
    }
    
    const returnedProducts = async () => {
        try {
            let res = await fetchProducts();
            setProducts(res);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        returnedProducts();
    }, [])
    
    
    
  return (
      <main>
          <Nav />
          {products &&
              <ItemCard products={products} />
          }
      </main> 
  )
}
