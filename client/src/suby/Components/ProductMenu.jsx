

import React, { useState, useEffect } from 'react'
import { API_URl } from '../api'
import { useParams } from 'react-router-dom'
import NavBar from './NavBar'

const ProductMenu = () => {
    const [products, setProduct] = useState([])
    const { firmId } = useParams()
    const {firmName} =useParams()


    const productHandler = async () => {
        try {
            const response = await fetch(`${API_URl}/product/${firmId}/products`)
            const newproductData = await response.json()
            setProduct(newproductData.products);    
            // console.log(newproductData)
        } catch (error) {
            console.error(error)

        }
    }
    useEffect(() => {
        productHandler()

    }, [])
    return (
        <>
            <NavBar />
            <section className="productSection">
                <h3>{firmName}</h3>
                {products.map((item) => {
                    return (
                        <>
                            <div className="productBox">
                                <div>
                                    <strong>{item.productName}</strong>
                                    <div>₹ {item.price}</div>
                                    <div>{item.description}</div>

                                </div>

                                <div className="productGroup">
                                    <img src={`${API_URl}/uploads/${item.image}`} />
                                    <div className="addButton">ADD</div>
                                </div>
                            </div>
                        </>

                    )
                })}
            </section>
        </>
    )
}

export default ProductMenu