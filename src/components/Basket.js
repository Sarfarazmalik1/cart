import React from 'react';
import { render } from 'react-dom';
import product from './Product'
export default function Basket(props) {
  
    
    console.log(props)
    const { cartItems, onAdd, onRemove } = props.location.state; // fetch cartitems from props--> 8 {/* 10 */}
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0); //--> 13
    const taxPrice = itemsPrice * 0.14; //--> 14
    const shippingPrice = itemsPrice > 2000 ? 0 : 20; //--> 15
    const totalPrice = itemsPrice + taxPrice + shippingPrice; //--> 16
    return (
    <div className="col-1 bg-light">
    <h2>Cart Items</h2>
    
    <div>
    {cartItems.length === 0 && <div>Cart is empty</div>} {/* // --> 9 */} 
    {cartItems.map((item) => ( //--> 11
    <div key={item.id} className="row">
    <div className="col-2">{item.name}</div>
    <div className="col-2">
    <button onClick={() => onRemove(item)} className="remove"> {/* // --> 12 */} 
    -
    </button>{' '}
    <button onClick={() => onAdd(item)} className="add">
    +
    </button>
    </div>
    
    <div className="col-2 text-right">
    {item.qty} x &#8377;{item.price.toFixed(2)}
    </div>
    </div>
    ))}
    
    {cartItems.length !== 0 && ( // design for cart items price list 
    <>
    <hr></hr>
    <div className="row"> {/* // --> 13 */}
    <div className="col-2">Items Price</div>
    <div className="col-1 text-right">&#8377;{itemsPrice.toFixed(2)}</div>
    </div>
    <div className="row"> {/* // --> 14 */}
    <div className="col-2">Tax Price</div>
    <div className="col-1 text-right">&#8377;{taxPrice.toFixed(2)}</div>
    </div>
    <div className="row"> {/* // --> 15 */}
    <div className="col-2">Shipping Price</div>
    <div className="col-1 text-right">
    &#8377;{shippingPrice.toFixed(2)}
    </div>
    </div>
    
    <div className="row"> {/* // --> 16 */}
    <div className="col-2">
    <strong>Total Price</strong>
    </div>
    <div className="col-1 text-right">
    <strong>&#8377;{totalPrice.toFixed(2)}</strong>
    </div>
    </div>
    <hr />
    <div className="row"> {/* last part */}
    <button onClick={() => alert('Implement Checkout!')}>
    Checkout
    </button>
    </div>
    </>
    )}
    </div>
    </div>
    )    

}
