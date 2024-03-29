import React from 'react'
import {Link} from 'react-router-dom'
import CartItem from './CartItem/CartItem';
import Spinner from "../Spinner"

import "./Cart.css"

const Cart = ({cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart}) => {

    const EmptyCart = () => (
        <div className='empty__container'>
        <h3>You have no items in your shopping cart, start adding some!
            <Link to="/shop"> start adding some!</Link>
        </h3>
        </div>
    );

    const FilledCart = () => (
        <>
        <div className="filled__container">
        {cart.line_items.map((item) => (
            <div key={item.id}>
                <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
            </div>
        ))}
        </div>

        <div className="cart__details">
            <h2>Subtotal: {cart.subtotal.formatted_with_symbol}</h2>
            <div className='buttons'>
                <button className="empty__btn" onClick={handleEmptyCart}>Empty Cart</button>
                <button className="checkOut__btn"><Link className='link' to='/payment'>Checkout</Link></button>
            </div>  
        </div>
        </>
    )

    if(!cart.line_items) return <Spinner/>

  return (
    <div className='container'>
       <h1>Your Shopping Cart</h1> 
       { !cart.line_items.length ? <EmptyCart/> : <FilledCart/> }
        </div>
  )
}

export default Cart