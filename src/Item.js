import React from 'react';


export default function Item(props) {
    console.log(props.cost);
    const price = (new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(props.price))
    return (
        <div>
        {props.name}
        {price}
        </div>)
    
}