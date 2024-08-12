import React from 'react';
import Grid from '@mui/material/Grid';
import ProductItem from './ProductItem';

const ProductList = ({ products, cart, addToCart, removeFromCart }) => {
    return (
        <Grid container spacing={4}>
            {products.map(product => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                    <ProductItem
                        product={product}
                        isInCart={cart.some(cartItem => cartItem.id === product.id)}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductList;
