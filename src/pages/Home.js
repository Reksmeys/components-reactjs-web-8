import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import Cards from '../components/Cards'
import LoadingView from '../components/LoadingView'

export default function Home() {

    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const fetchProducts = () => {
      fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(response => {
          setProducts(response)
          setLoading(false)
      })
  }
    // The same as componentDidMount, Render
    useEffect(() => {
      // call function to get data from APIs
      fetchProducts()
      // console.log(movies);
    }, [])
  return (
    <Container>
        <Row className='g-3'>
            {
                loading ? <LoadingView /> : <Cards products={products} title="Little Kid" />
            }
        </Row>
    </Container>
  )
}
