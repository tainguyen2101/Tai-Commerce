import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { NavBar, Products, Cart } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    };

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    }

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);

        setCart(item.cart);
    }

    const handleRemoveCartItem = async (productId) => {
        const { cart } = await commerce.cart.remove(productId);
        setCart(cart);
    }

    const handleUpdateCartQuantity = async(productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, { quantity })

        setCart(cart);
    }

    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();
        setCart(cart);
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, [])


    return (
        <Router>
            <div>
                <NavBar totalItems={cart.total_items} />
                <Switch>
                    <Route exact path="/">
                        <Products products={products} onAddToCart={handleAddToCart} />
                    </Route>
                    <Route exact path="/cart">
                        <Cart 
                        cart={cart} 
                        handleUpdateCartQuantity={handleUpdateCartQuantity} 
                        handleEmptyCart={handleEmptyCart}
                        handleRemoveCartItem={handleRemoveCartItem}/>
                    </Route>
                </Switch>
            </div>
        </Router>

    )
}

export default App
