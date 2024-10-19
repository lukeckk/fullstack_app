import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import axios from 'axios';

function ProductScreen() {

  const [product, setProduct] = useState({});
  // get the product id
  const {id: productId} = useParams();

  useEffect (() => {
    const fetchProducts = async () => {
      const {data} = await axios.get(`/api/products/${productId}`);
      setProduct(data);
    }

    fetchProducts();
  }, [productId])
  
  return (
    <>
      <Link className='btn btn-light my-3' to="/">Go Back</Link>
      {/* use react Image to add fluid functionality for improved responsiveness */}
      <Image src={product.image} alt={product.name} fluid />
      <h1>Name : {product.name}</h1>
      <h1>Price : {product.price}</h1>
      <h1>Rating : {product.rating}</h1>

    </>
  )
}

export default ProductScreen