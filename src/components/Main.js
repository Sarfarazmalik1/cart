import React from 'react';
import Product from './Product';

export default function Main(props) {
  const { products, onAdd } = props; // we r displaying products in main content using props --> 2    {/* 10 */}
  return (
    <main className='col-1'>
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (                   // --> 3
          <Product key={product.id} product={product} onAdd={onAdd}></Product>// in product.js we r implementing products details is --> 4 {/* 10 */}
        ))}
      </div>
    </main>
  );
}
