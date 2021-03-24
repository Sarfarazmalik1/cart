import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data'; //we r adding our products data
import { useState } from 'react';
import {Route} from "react-router-dom"
import {BrowserRouter as Router} from 'react-router-dom'
function App() {
  const { products } = data;  //we r using data here as products --> 1
  const [cartItems, setCartItems] = useState([]); // cartitems we r setting as empty --> 6
  const onAdd = (product) => {               //{/* // --> 10 */}
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };                                                   
  const onRemove = (product) => {                      //--> 12
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="app">
<Router>
<Header cartItems={cartItems}/>
<div>
<Main products={products} onAdd={onAdd}/>

<Route path='/Basket' cartItems={cartItems} // --> 7
            onAdd={onAdd} // --> 10 
          onRemove={onRemove} component={Basket} />
</div>
</Router>
</div>

  );
}

export default App;
