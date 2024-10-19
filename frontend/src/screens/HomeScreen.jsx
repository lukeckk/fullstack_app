import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

function HomeScreen() {

  const [products, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const {data} = await axios.get('/api/products');
      setProduct(data);
    };

    fetchProduct();

  }, [])


  return (
    <>
      <h1>All Products</h1>
      <Row>
        {products.map((productData) => (
          // key is to retrieve product._id in link tag in Product.jsx
          <Col key={productData._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={productData}/>
          </Col>
        ))}
      </Row>

    </>
  )
}

export default HomeScreen