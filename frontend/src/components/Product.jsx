import React from 'react'
import { Card } from 'react-bootstrap'

function Product({product}) {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} alt='name'/>
      </a>
      <div>
        <a href={`/product/${product._id}`}>
          <div as="div">
            <strong>{product.name}</strong>
          </div>
        </a>
        <div as="h3">
          ${product.price}
        </div>
      </div>
    </Card>
  )
}

export default Product