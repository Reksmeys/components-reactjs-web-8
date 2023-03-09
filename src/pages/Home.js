import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { fetchProducts } from '../actions/ProductActions'
import Cards from '../components/Cards'
import LoadingView from '../components/LoadingView'

export default function Home() {

    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    // The same as componentDidMount, Render
    useEffect(() => {
      // call function to get data from APIs
      fetchProducts()
      .then(res => res.json())
      .then(resp => {
        setProducts(resp)
        setLoading(false)
      })
      // console.log(movies);
    }, [])
  return (
    <Container>
        <h1 className='h1 mt-3'>Product Collection</h1>
        <Row className='g-3 mt-3'>
            {
                loading ? <LoadingView /> : <Cards products={products} title="Little Kid" />
            }
        </Row>
    </Container>
  )
}
