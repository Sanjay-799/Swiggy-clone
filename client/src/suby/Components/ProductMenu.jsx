

import React,{useState,useEffect} from 'react'
import { API_URl } from '../api'

const ProductMenu = () => {
    const [product,setProduct] =useState([])
    const productHandler=async()=>{
        try {
            const response = await fetch(`${API_URl}/product/${firmId}/products`)
            const newproductData = await response.json()
            setProduct(newproductData.products);
            console.log(newproductData)
        } catch (error) {
            alert("productMenu data not fetched")
            console.error(error)
            
        }
    }
  return (
    <div>ProductMenu</div>
  )
}

export default ProductMenu