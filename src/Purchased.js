import React from 'react';

export default function Purchased(props) {
   
    return (
        <div className="summary__option" key={props.i}>
            <div className="summary__option__label">{props.category}  </div>
            <div className="summary__option__value">{props.name}</div>
            <div className="summary__option__cost">
                {props.price}
            </div>
        </div>)
       

}