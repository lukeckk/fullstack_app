import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import products from '../products';
import { Image } from 'react-bootstrap';

function ProductScreen() {
  // get the product id
  const {id: productId} = useParams();
  // get the product using product id
  const product = products.find((p) => p._id === productId);
  
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