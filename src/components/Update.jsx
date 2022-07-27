import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Update = (props) => {
    const navigate = useNavigate();
    // grab var from url :id :var :whatever
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [descript, setDescript] = useState("")


    useEffect(( ) => {
        // axios.get("http://localhost:8000/api/products/" + id)
        // Deconstruct ex  notice money hugs ${} use back ticks ``
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data.product);
                setName(res.data.product.name)
                setPrice(res.data.product.price)
                setDescript(res.data.product.description)
            })
            .catch(err => console.log(err))
    }, [id])
    const Update = (e) =>{
        const objupdate = {
            name,
            price,
            descript
        }
        console.log(objupdate);
        e.preventDefault();
        axios.put("http://localhost:8000/api/products/" +id , objupdate)
        // axios.put(`http://localhost:8000/api/products/ ${id}` , objupdate)
        .then(res => {
            console.log(res.data);
            navigate("/products")
        })
        .catch( err => console.log(err))
    }

    return (
        <div>

            {/* input type not defined its default is always text */}
            <form onSubmit={Update}>
                name:{product.name} <input onChange={(e) => setName(e.target.value)} value={name} /><br />
                price: $ <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} /><br />
                description: <input onChange={(e) => setDescript(e.target.value)} value={descript} /><br />
                <button>Update Product</button>
            </form>
        </div>
    )
}

export default Update