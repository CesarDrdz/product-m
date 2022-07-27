import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Create = (props) => {

const navigate = useNavigate()


    const [products, setProducts] = useState([])
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [descript, setDescript] = useState("")

    const createProduct = (e) => {
        e.preventDefault();
        // console.log("Hello");
        const newProduct = {
            name,
            price,
            descript
        }
        // console.log(newProduct);

        axios.post("http://localhost:8000/api/products", newProduct)
            .then(res => {
                console.log("Winning", res.data);
                setProducts(res.data)
                navigate("/products")
            })
            .catch(err => {
                console.log("Client Error", err);
            })

    }

    return (
        <div>
            {/* input type not defined its default is always text */}
            <form onSubmit={createProduct}>
                name: <input onChange={(e) => setName(e.target.value)} value={name} /><br />
                price <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} /><br />
                description <input onChange={(e) => setDescript(e.target.value)} value={descript} /><br />
                <button>Create Product</button>
            </form>
            <hr />
        </div>
    )
}

export default Create;