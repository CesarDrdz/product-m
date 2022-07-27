
import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link, Routes, Route, Navigate} from 'react-router-dom'; 
import Main from './components/Main';
import Create from './components/Create';
import ShowProduct from './components/ShowProduct';
import Update from './components/Update';

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
        {/* UPDATE */}
        <Route path="/update/:id" element={<Update/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
