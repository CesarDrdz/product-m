import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom'
function ShowProduct(props) {

// grab var from url :id :var :whatever
  const{id} = useParams();

  useEffect(() =>{
    axios.get("http://localhost:8000/api/products/" + id)

  },[])

  return (
    <div>
      <h1>ShowProduct</h1>


    </div>
  )
}

export default ShowProduct;