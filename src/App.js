
import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link, Routes, Route, Navigate} from 'react-router-dom'; 
import Main from './components/Main';
import Create from './components/Create';
import ShowProduct from './components/ShowProduct';

// axios and react-router-dom always needed foo


function App() {

  const [products, setProducts] = useState([])
  const [name, setName] = useState("")
  const [price, setPrice] = useState(0)
  const [descript, setDescript] = useState("")

  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
      .then(res => {
        console.log(res.data);
        setProducts(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  const createProduct = (e) =>{
    e.preventDefault();
    // console.log("Hello");
    const newProduct ={
      name,
      price,
      descript
    }
    // console.log(newProduct);

    axios.post("http://localhost:8000/api/products", newProduct)
    .then(res =>{
      console.log("Winning", res.data);
    })
    .catch(err =>{
      console.log("Client Error", err);
    })
    
  }


  return (
    <div className="App">
      <h1>Hello MERN</h1>
      <hr />
      <br />
      <hr />
      <Link to="/products">Home</Link>
      <Link to="/create">Add Products</Link>

      <Routes>
        {/* Main */}
        <Route path="/products" element={<Main/>}/>
        {/* redirect  */}
        <Route path="*" element={<Navigate to="/products" replace/>}/>
        {/* create */}
        <Route path="/create" element={<Create/>}/>
        {/* SHOW One */}
        <Route path="/products/:id" element={<ShowProduct/>}/>
        
      </Routes>

      <div>
        {/* input type not defined its default is always text */}
        <form onSubmit={createProduct}>
          name: <input onChange={(e) => setName(e.target.value)} value={name}/><br />
          price <input type="number" onChange={(e) => setPrice(e.target.value)} value={price}/><br />
          description <input onChange={(e) => setDescript(e.target.value)} value={descript}/><br />
          <button>Create Product</button>
        </form>
        <hr />
        <br />

        <hr />
        <br />
      </div>
      {
        products.map(product =>{
          return (
            <div key={product._id}>
              {/* <Link to="/products/" + product._id */}
              name: {product.name} <br />
              price: {product.price} <br />
              description:{product.description}
              <hr />
            </div>
          )
        })
      }

    </div>
  );
}

export default App;
