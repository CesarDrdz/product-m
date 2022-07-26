
import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

// axios and react-router-dom always needed foo


function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err))
  }, [])


  return (
    <div className="App">
      <h1>Hello MERN</h1>
      <hr />
      <div>
        products: {JSON.stringify(products)}
      </div>
      {
        products.map(product =>{
          return (
            <div key={_id}>
              name: {product.name} <br />
              price: {product.price} <br />
              description:{product.description}
            </div>
          )
        })
      }

    </div>
  );
}

export default App;
