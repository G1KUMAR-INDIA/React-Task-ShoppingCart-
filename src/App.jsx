import React, { useState } from 'react';
import Container from '@mui/material/Container';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
    const [products] = useState([
        { id: 1, name: 'Fancy Product', description: 'Description of Fancy Product', price: 80.00, image: 'https://via.placeholder.com/450x300' },
        { id: 2, name: 'Special Item', description: 'Description of Special Item', price: 18.00, image: 'https://via.placeholder.com/450x300' },
        { id: 3, name: 'Sale Item', description: 'Description of Sale Item', price: 25.00, image: 'https://via.placeholder.com/450x300' },
        { id: 4, name: 'Popular Item', description: 'Description of Popular Item', price: 40.00
          , image: 'https://via.placeholder.com/450x300' },
    ]);

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    };

    return (
        <>
            <Cart cart={cart} />
            <Container sx={{ mt: 4 }}>
                <ProductList
                    products={products}
                    cart={cart}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            </Container>
        </>
    );
};

export default App;
