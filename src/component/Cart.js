import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import { CartState } from '../context/CartContext'
import { FaRegTrashAlt, FaRupeeSign, FaShoppingCart } from 'react-icons/fa';

export default function Cart() {
    const { state: { cart }, dispatch } = CartState();
    return (
        <Container>
            <Row>
                <Col lg="8">
                    <Container>
                        {
                            cart.map((cart) => (
                                <Row style={{ margin: '1rem 0rem' }} className="align-items-center">
                                    <Col lg="2">
                                        <Image
                                            width="100px"
                                            height="100px"
                                            rounded={true}
                                            src={cart.image}
                                        />
                                    </Col>
                                    <Col lg="6">
                                        <p className='col-12'> {cart.name} </p>
                                    </Col>
                                    <Col lg="2">
                                        <p className='col-12'>
                                            <FaRupeeSign />
                                            {cart.price}
                                        </p>
                                    </Col>
                                    <Col lg="2">
                                        <FaRegTrashAlt cursor="pointer" onClick={() => dispatch({ type: 'REMOVE_FROM_CART', data: cart.id })} />
                                    </Col>
                                </Row>
                            ))
                        }

                    </Container>
                </Col>
                <Col lg="4" style={{ background: '#aeaeae' }}>
                    <h3 className='text-center' style={{ margin: '1rem 0rem', fontWeight: '400' }}>Shopping Details</h3>
                    <h4 className='text-left'> Total Item : {cart.length} </h4>
                    <h4 className='text-left' style={{ marginBottom: '1rem' }}>
                        <FaRupeeSign />
                        Total : {cart.reduce((a, b) => a + Number(b.price), 0)}
                    </h4>
                    <Button className="btn btn-primary btn-inline" style={{ margin: '0 auto', display: 'block', width: '100%' }} varient="primary">Checkout</Button>
                </Col>
            </Row>
        </Container>
    )
}
