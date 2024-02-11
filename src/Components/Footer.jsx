
import React from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='container1 mt-5 bg-primary'>
      <Container className='p-3 text-black'>
        <Row>
          <Col md={6} lg={3}>
            <Navbar className="bg-body-black">
              <Container>
                <Navbar.Brand href="#home">
                  <span className='text-info'><i className="fa-solid fa-truck-fast me-1 text-white"></i> Daily</span><span className='text-white ms-1'>Cart</span>
                </Navbar.Brand>
              </Container>
            </Navbar>
            <p className='fst italic'>
              Designed and built with all the loves in the world by the Luminar team with the help of our contributors.
            </p>
          </Col>

          <Col md={6} lg={3}>
            <div>
              <h2 className='text-white ss'>Links</h2>
              <Link to={'/'} className='text-info mm' style={{ textDecoration: 'none' }}>Home</Link><br />
              <Link to={'/cart'} className='text-info mm' style={{ textDecoration: 'none' }}>Cart</Link><br />
              <Link to={'/wishlist'} className='text-info mm' style={{ textDecoration: 'none' }}>Wishlist</Link><br />
            </div>
          </Col>

          <Col md={6} lg={3}>
            <div>
              <h2 className='ss text-white'>Guides</h2>
              <Link to={'https://getbootstrap.com'} className='mm text-white' style={{ textDecoration: 'none' }}>React</Link> <br />
              <Link to={'https://react-bootstrap.github.io'} className='mm text-white' style={{ textDecoration: 'none' }}>React Bootstrap</Link> <br />
              <Link to={'https://react-bootstrap.github.io'} className='mm text-white' style={{ textDecoration: 'none' }}>Routing</Link>
            </div>
          </Col>

          <Col md={6} lg={3}>
            <div>
              <h2 className='ss text-white'>Contact Us</h2>
              <input className='w-100 p-2 mb-2' type="text" placeholder='enter email' /><br />
              <button className='bg-info w-100 p-2'>Send</button>
              <div className="mt-2">
                <Link to={'https://getbootstrap.com'}><i className="fa-brands fa-instagram me-3 text-white"></i></Link>
                <Link to={'https://react-bootstrap.github.io'} ><i className="fa-brands fa-facebook me-3 text-white"></i></Link>
                <Link to={'https://react-bootstrap.github.io'} ><i className="fa-brands fa-twitter me-3 text-white"></i></Link>
                <Link to={'https://react-bootstrap.github.io'} ><i className="fa-brands fa-github me-3 text-white"></i> </Link>
              </div>
            </div>
          </Col>
        </Row>
        <p className='text-center'>Copyright @ 2024 Daily Cart. Built with React.</p>
      </Container>
    </div>
  );
}

export default Footer;