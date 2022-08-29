import React from 'react'
import { CartState } from '../context/CartContext';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Rating from '../component/Rating';
import { FaRupeeSign } from 'react-icons/fa';

const Home = (props) => {
    const { state: { products, cart }, dispatch } = CartState();
    return (
        <Container>
            <Row xs={3}>
                {
                    products.map((each) => {
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
    )
}

export default Home