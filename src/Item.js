import React from 'react';


export default function Item(props) {
    const item = props.item
    const header = props.featureHeader;
    
    console.log(typeof props.price ,'price from item')
    return(
        <li className="feature__item">
        <div className={props.featureClass}
            onClick={e => props.change(header, item)}>
        {item.name}
        {(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(props.price))}
        </div>
        </li>
    )
}