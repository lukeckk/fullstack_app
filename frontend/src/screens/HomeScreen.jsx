import React from 'react'
import products from '../products'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'

function HomeScreen() {
  return (
    <div>
      <h1>All Products</h1>
      <Row>
        {products.map((productData) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={productData}/>
          </Col>
        ))}
      </Row>

    </div>
  )
}

export default HomeScreen