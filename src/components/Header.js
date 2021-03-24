import React from 'react';
import CartIcon from '../svg/shopping-cart-solid.svg'
import {Link }from 'react-router-dom'
import Basket from './Basket';

export default function Header(props) {
  console.log(props)
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1 className=''>Learn Shopping Cart</h1>
        </a>
      </div>
      <div>
        <Link to={{ pathname: '/Basket', state: { cartItems:props.cartItems }  }}>
        <img src={CartIcon} alt="" width="30"/>{' '}
          {props.cartItems ? (
            <button className="badge">{props.cartItems.length}</button>
          ) : (
            ''
          )}
        </Link>{' '}
        
      </div>
    </header>
    
  );
}