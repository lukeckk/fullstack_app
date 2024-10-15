import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Product({product}) {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} alt='name'/>
      </Link>
      <div>
        <Link to={`/product/${product._id}`}>
          <div as="div">
            <strong>{product.name}</strong>
          </div>
        </Link>
        <div as="h3">
          ${product.price}
        </div>
      </div>
    </Card>
  )
}

export default Product