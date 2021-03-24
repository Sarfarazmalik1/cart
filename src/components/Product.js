import React from 'react';
import { useState } from 'react';
export default function Product(props) {  // all details fetching here --> 5
  const { product, onAdd } = props;          //--> 10 
  
  
  return (
    <div>
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
  <div>&#8377;{product.price} </div> <div className='text-right' >{product.discount}%<span>off</span></div>

      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>   {/* 10 */}
      </div>
    </div>
  );
}
