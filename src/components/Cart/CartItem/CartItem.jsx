import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import useStyle from './styles';


const CartItem = ({ item, handleUpdateCartQuantity, handleRemoveCartItem }) => {
    const classes = useStyle();
    return (
        <Card>
            <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
            <CardContent className={classes.cartContent}>
                <Typography variant="h5">{item.name}</Typography>
                <Typography variant="h6">{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={() => handleUpdateCartQuantity(item.id, item.quantity - 1)} >-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small" onClick={() => handleUpdateCartQuantity(item.id, item.quantity + 1)} >+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveCartItem(item.id)}>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem
