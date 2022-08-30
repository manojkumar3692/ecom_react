import React, {useState} from 'react'
import { CartState } from '../context/CartContext';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Rating from '../component/Rating';
import { FaRupeeSign } from 'react-icons/fa';
import RatingFilter from '../component/RatingFilter';

const Home = (props) => {
    const [rating, setRating] = useState(0)
    const { state: { products, cart }, dispatch, productState: { sortBy, byRating}, productDispatch } = CartState();
    const transformProduct = () => {
        let sortedProduct = products
        console.log('Printing', byRating)
        if(sortBy === 'low2high') {
            sortedProduct = sortedProduct.sort((a,b) => Number(a.price).toFixed(0) - Number(b.price).toFixed(0) )
        }

        if(sortBy === 'high2low') {
            sortedProduct = sortedProduct.sort((a,b) => Number(b.price).toFixed(0) - Number(a.price).toFixed(0) )
        }

        if(sortBy === 'popular') {
            sortedProduct = sortedProduct.filter((product) => product.rating >= 4)
        }

        if(sortBy === 'popular') {
            sortedProduct = sortedProduct.filter((product) => product.rating >= 4)
        }

        if(byRating) {
            console.log('B sorted', sortedProduct)
            sortedProduct = sortedProduct.map((product) => product.rating >= byRating)
            console.log('A sorted', sortedProduct)
            
        }

        return sortedProduct

    }

    const filterByRating = (index) => {
        productDispatch({type: 'FILTER_BY_RATING', payload: index + 1})
    }
    return (
        <div style={{ margin: '1rem' }}>
            <Container className='container container-fluid'>
                <Row>
                    <Col lg="3" className="bg-dark text-white p-3">
                        <p className='text-center'>Quick Filters</p>
                        <ul className="list-group">
                            <li className="list-group-item" style={{cursor: "pointer"}} onClick={() => productDispatch({type: 'SORT_BY', payload: 'low2high'})}>Low By Price</li>
                            <li className="list-group-item" style={{cursor: "pointer"}} onClick={() => productDispatch({type: 'SORT_BY', payload: 'high2low'})}>High By Price</li>
                            <li className="list-group-item" style={{cursor: "pointer"}} onClick={() => productDispatch({type: 'SORT_BY', payload: 'popular'})}>By Popular</li>
                            <li className="list-group-item" style={{cursor: "pointer"}} onClick={() => productDispatch({type: 'SORT_BY', payload: 'popular'})}>
                                <RatingFilter rating={byRating} onclick={filterByRating}/>
                            </li>

                        </ul>
                    </Col>
                    <Col lg="9">
                        <Container>
                            <Row xs={3}>
                                {
                                    transformProduct().map((each) => {
                                        return (
                                            <Col key={each.id} style={{ margin: '20px 0px 0px 0px' }}>
                                                <Card>
                                                    <Card.Img top width="100%" src={each.image} alt="Card image cap" />
                                                    <Card.Body>
                                                        <Card.Title tag="h5">{each.name}</Card.Title>
                                                        <Card.Subtitle tag="h6" className="mb-2 text-muted">
                                                            <FaRupeeSign />
                                                            {each.price}
                                                        </Card.Subtitle>
                                                        <Rating value={each.rating} />
                                                        {
                                                            cart.some((cart) => cart.id === each.id) ? <Button variant="secondary" onClick={() => dispatch({ type: 'REMOVE_FROM_CART', data: each.id })}>Remove From Cart</Button> :
                                                                <Button variant="primary" onClick={() => dispatch({ type: 'ADD_TO_CART', data: each.id })}>Add To Cart</Button>
                                                        }
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home