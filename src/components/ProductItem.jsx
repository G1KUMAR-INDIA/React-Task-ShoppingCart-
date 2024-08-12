import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const ProductItem = ({ product, isInCart, addToCart, removeFromCart }) => {
    return (
        <Card>
            <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
            />
            <CardContent>
                <Typography variant="h6" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
                <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                    ${product.price}
                </Typography>
            </CardContent>
            <CardActions>
                {isInCart ? (
                    <Button variant="outlined" color="secondary" onClick={() => removeFromCart(product.id)}>
                        Remove from Cart
                    </Button>
                ) : (
                    <Button variant="contained" color="primary" onClick={() => addToCart(product)}>
                        Add to Cart
                    </Button>
                )}
            </CardActions>
        </Card>
    );
};

export default ProductItem;
