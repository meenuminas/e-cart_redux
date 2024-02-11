import React, { useEffect, useState } from 'react'
import { Badge, Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { searchbyProduct } from '../Redux/Slices/productSlice';
function Header({insideHome}) {
  const wishlist=useSelector(state=>state.wishlistReducer)
  // const[wishlistCount,setwishlistCount]=useState(0)
  // useEffect(()=>{
  //   setwishlistCount(wishlist?.length)
  // },[wishlist])

  const cart=useSelector(state=>state.cartReducer)
  const dispatch=useDispatch()
  return (
    <div>
        <Navbar style={{zIndex:1}} expand="lg" className="bg-primary w-100 position-fixed top-0">
      <Container>
        <Link to={'/'} style={{textDecoration:'none'}} className='fw-bolder '><i class="fa-solid fa-truck-fast me-2 fa-xl"></i><Navbar.Brand className='text-light'>Daily Cart</Navbar.Brand></Link>
        <Form inline>
        <Row>
          <Col xs="auto" className='mt-2'>
           {insideHome&&<Form.Control
              type="text"
              placeholder="Search a product"
              className=" mr-sm-2"
              onChange={(e)=>dispatch(searchbyProduct(e.target.value.toLowerCase()))}
            />}
          </Col>
          
        </Row>
      </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav " className='mt-3' />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ms-auto ">
            <Nav.Link ><Link to={'/wishlist'} style={{textDecoration:'none', color:'white'}}>
            <i class="fa-solid fa-heart text-danger"></i> Wishlist <Badge className='bg-light text-dark'>{wishlist?.length}</Badge> </Link></Nav.Link>
          
            <Nav.Link ><Link to={'/cart'} style={{textDecoration:'none', color:'white'}}>
            <i class="fa-solid fa-cart-plus text-success"></i> Cart <Badge className='bg-light text-dark'>{cart?.length}</Badge> </Link></Nav.Link>
           
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header