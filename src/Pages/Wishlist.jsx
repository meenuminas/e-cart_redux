import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { removeFromWishlist } from '../Redux/Slices/wishlistSlice';
import { addtoCart } from '../Redux/Slices/cartSlice';
import Header from '../Components/Header';

function Wishlist() {
  //get wishlist from store
  const wishlist= useSelector(state=>state.wishlistReducer)
// console.log(wishlist);

const dispatch=useDispatch()

const handleRemoveWishlist=(product)=>{
  dispatch(removeFromWishlist(product.id))
  dispatch(addtoCart(product))
}

  return (
   <>
   <Header/>
      <div style={{paddingTop:'100px'}}  className='w-100 container ms-auto'>
              
      <Row >
        {wishlist?.length>0?wishlist?.map(product=>( 
        <Col className='mb-3' sm={12} md={6} lg={4} xl={4}>
           <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" height={'200px'} src={product?.thumbnail} />
                 <Card.Body>
                   <Card.Title>{product?.title.slice(0,20)}...</Card.Title>
                   <p>$ {product?.price}</p>
                    <div className='d-flex justify-content-between'>
                      <button onClick={()=> dispatch(removeFromWishlist(product?.id))} className='btn btn-link'>
                        <i className='fa-solid fa-heart-circle-minus text-danger'></i>
                      </button>
                      <button onClick={()=>handleRemoveWishlist(product)} className='btn btn-link'><i className='fa-solid fa-cart-plus text-success'></i></button>
                    </div>
                 </Card.Body>
           </Card>
        </Col>
        )) : 
        <div className='d-flex flex-column justify-content-center align-items-center w-100 mb-5'>
          <img height={'300px'} className='img-fluid' src="https://i.postimg.cc/mZHXM0vR/empty-cart-2130356-1800917.webp" alt="" />
          <h2>"your wishlist is empty"</h2></div>
  }
      </Row>
      
      
  
      </div>
   </>
  )
}

export default Wishlist