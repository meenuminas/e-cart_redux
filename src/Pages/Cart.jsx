import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { decQuantity, emptyCart, incQuantity, removeCart } from '../Redux/Slices/cartSlice'
import Header from '../Components/Header'

function Cart() {
  const cart=useSelector(state=>state.cartReducer)
const [totalcartAmount,settotalcartAmount]=useState(0)
const dispatch=useDispatch()
const navigate=useNavigate()
  useEffect(()=>{
if(cart?.length>0){
 settotalcartAmount(cart?.map(item=>item.totalPrice)?.reduce((p1,p2)=>p1+p2))
}
else{
  settotalcartAmount(0)
}
  },[cart])

const handleCheckout=()=>{
  alert("Order placed successfully..Thankyou for shopping with us!!!")
  dispatch(emptyCart())
  navigate('/')
}
const handleDecremnt=(product)=>{
  if(product.quantity==1){
    dispatch(removeCart(product.id))
  }
  else{
    dispatch(decQuantity(product))
  }
}

  return (
   <>
   <Header/>
      <div style={{marginTop:'100px'}}>
  
       { cart?.length>0?
        <div className="container">
          <h1>Cart Summery</h1>
          <div className="row">
         <div className="col-lg-8">
         <table className="table">
          <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>...</th>
            
          </tr>
          </thead>
          <tbody>
         {
          cart?.map((product,index)=>(
            <tr key={index}>
              <td>{index+1}</td>
              <td>{product?.title}</td>
              <td><img width={'60px'} src={product?.thumbnail} alt="no image" /></td>
              <td>
                <div className='d-flex align-items-center'>
                  <span style={{cursor:'pointer'}} className='me-1 fw-bolder' 
                  onClick={()=>dispatch(incQuantity(product))}>+</span>
                  <input style={{width:'60px'}} type="text" className='form-control'
                   value={product?.quantity}  readOnly/>
                   <span style={{cursor:'pointer'}}className='ms-1 fw-bolder'  onClick={()=>handleDecremnt(product)}>-</span>
                   </div>
               
              </td>
              <td>${product?.totalPrice}</td>
              <td> <button onClick={()=> dispatch(removeCart(product?.id))} className='btn btn-link' ><i className='fa-solid fa-trash text-danger'></i></button></td>
            </tr>
          ))
         }
          </tbody>
         </table>
         <div className="text-center mt-3">
          <button onClick={()=> dispatch(emptyCart())} className='btn btn-danger me-3'>Empty Cart</button>
         <Link to={'/'} className='btn btn-success'>Shop More</Link>
         </div>
         </div>
  
         <div className="col-lg-4">
       <div className='shadow border rounded p-4'>
          <h3>Total Product: {cart?.length}</h3>
          <h3>Total Amount: ${totalcartAmount}</h3>
          <hr />
          <div className='d-grid mt-4'>
            <button onClick={handleCheckout} className='btn btn-info w-75'>Check Out</button>
            </div>
       </div>
         </div>
        </div>
        
      </div>:
      <div className='d-flex flex-column justify-content-center align-items-center w-100 mb-5'>
          <img height={'300px'} className='img-fluid' src="https://i.postimg.cc/mZHXM0vR/empty-cart-2130356-1800917.webp" alt="" />
          <h2>"Your Cart is empty!!"</h2>
          </div>
          }
      </div>
   </>
  )
}

export default Cart