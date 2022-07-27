import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom'
function ShowProduct(props) {

  const navigate = useNavigate();
  // grab var from url :id :var :whatever
  const  {id}  = useParams();
  console.log(id);
  const [product, setProduct] = useState({});

  useEffect((  ) => {
    axios.get("http://localhost:8000/api/products/" + id)
    // Deconstruct ex  notice money hugs ${} use back ticks ``
    // axios.get(`http://localhost:8000/api/products/${id}`)
      .then(res => {
        console.log(res.data.product);
        setProduct(res.data.product)
      })
      .catch(err => console.log(err))
  }, [])

  const deleteProduct = (_id)=>{
    console.log(id);
    axios.delete("http://localhost:8000/api/products/"+id)
    .then(res => {
      console.log(res.data);
      setProduct(res.data);
      navigate("/products")
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
      <h1>ShowProduct</h1>
      {
        product ? (
          <div>
            Name: {product.name} <br />
            Price $ {product.price} <br />
            Description: {product.descript} <br />
            <hr />

            <button onClick={() => deleteProduct(product._id)} >DELETE</button>
          </div>
        ) : <p>Loading...</p>
        
      }
        </div>
        )
      }
      
export default ShowProduct;