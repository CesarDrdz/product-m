import React, {useState,useEffect}from 'react'
import axios from 'axios';
import {Link, Routes, Route} from 'react-router-dom'; 


const Main = (props) => {

  const [products, setProducts] = useState([]);

  useEffect(() =>{
    axios.get("http://localhost:8000/api/products")
    .then(res =>{
      console.log(res.data);
      setProducts(res.data)
    } )
    .catch(err => console.log(err))
  },[])

  return (
    <div>

    <h1>All Products</h1>
    <hr />
    {
      products.map((products, _id) =>{
        return (
          <div key={products._id}>
            <Link to={`/products/${products._id}`}>
              Name: {products.name}
            </Link> <br />
            Price $ {products.price} <br />
            Description: {products.descript} <br />
            <Link to={`/update/${products._id}`}>UPDATE</Link>
            <hr />
          </div>
        )
      })
    }


    </div>
  )
}

export default Main;