import React from 'react'
import { Link } from 'react-router-dom'
import { FormControl, Container, Navbar, Dropdown, Nav, Image, Row, Col, Button } from 'react-bootstrap';
import { FaRegTrashAlt, FaRupeeSign, FaShoppingCart } from 'react-icons/fa';
import { CartState } from '../context/CartContext';



const Header = (props) => {
    const { state: { cart, products }, dispatch, productState, productDispatch } = CartState();
    const triggerSearch = (e) => {
        let text = e.target.value;
        productDispatch({ type: 'FILTER_BY_SEARCH', payload: text })
    }
    return (
        <Navbar bg="dark" variant='dark' style={{ height: '80px' }}>
            <Container>
                <Link to="/">
                    <Navbar.Brand>
                        Shopping Website
                    </Navbar.Brand>
                </Link>
                <Navbar.Text className="search">
                    <FormControl style={{ width: 300 }} placeholder="Search products" onChange={(e) => triggerSearch(e)}>

                    </FormControl>
                </Navbar.Text>
                <Nav>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <FaShoppingCart color="white" fontSize={"24px"} />
                            {' '}
                            {cart.length}
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ left: '-300px', width: '400px' }}>
                            {
                                cart.map((cart) => (
                                    <Container>
                                        <Row>
                                            <Col lg="2">
                                                <Image
                                                    width={30}
                                                    height={30}
                                                    rounded={true}
                                                    src={cart.image}
                                                />
                                            </Col>
                                            <Col lg="8">
                                                <p style={{ marginBottom: '0px' }} className='col-12 text-truncate'>{cart.name}</p>
                                                <p style={{ fontSize: '12px' }}>
                                                    <FaRupeeSign />
                                                    {cart.price}
                                                </p>
                                            </Col>
                                            <Col lg="2">
                                                <FaRegTrashAlt cursor="pointer" onClick={() => dispatch({ type: 'REMOVE_FROM_CART', data: cart.id })} />
                                            </Col>
                                        </Row>
                                    </Container>
                                ))
                            }
                            <div style={{ width: '100%' }}>
                                <Link to="/cart">
                                    <Button className='btn btn-primary btn-block' style={{ margin: '0 auto', display: 'block', width: '350px' }} variant="primary">Cart</Button>
                                </Link>
                            </div>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>

        </Navbar>
    )
}

export default Header