import React from 'react'
import { Link } from 'react-router-dom'


const Cart = ({cart,setCart}) => {
  return (
   <>
   <div  className="container cart_page mt-5">
    {
    cart.length == 0 ? (
      <div className="text-center">
        <h1>Cart is a empty</h1>
        <Link to={"/"} className='btn btn-warning' >Continue Shopping...</Link>
      </div>
    ) :  cart.map((product, index) =>{
      return(
       
         <div key={`${product.id}-${index}`} className="add_to_cart card my-5">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={product.imgSrc} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body text-center">
        <h5 className="card-title">{ product.title}</h5>
        <p className="card-text">{product.description}</p>
        <button className="btn btn-primary mx-3">
                        {product.price} ₹
                      </button>
                      <button className="btn btn-warning mx-3">
                        Buy now
                      </button>        
      </div>
    </div>
  </div>
</div>
  
        
      )
    })}
    </div>

    {
      cart.length != 0 && (<div className="container cart_length text-center my-5">
  
        <button  className='btn btn-warning mx-5' >Checkout</button>
        <button onClick={() => setCart([])}  className='btn btn-danger' >Clear Cart</button>
      </div>)
    }
    
   </>
  )
}

export default Cart
