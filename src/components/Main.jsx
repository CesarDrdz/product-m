import React, {useState,useEffect}from 'react'
import axios from 'axios';
import {Link, Routes, Route} from 'react-router-dom'; 


const Main = (props) => {

  const [products, setProducts] = useState([]);

  useEffect(() =>{
    axios.get("http:/localhost:8000/api/prducts")
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
      products.map((car, _id) =>{
        return (
          <div key={products._id}>
            Name: {products.name} <br />
            Price $ {products.price}
            Description: {products.descript}

          </div>
        )
      })
    }


    </div>
  )
}

export default Main;