import React from 'react';


export default class Item extends React.Component {
    render(){
        const currentChoices = this.props.currentChoices
        const item = this.props.name;
      
        const price = (new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(this.props.price))
        return (
            <div onClick={e => this.props.change(item)}>
            {item}
            {price}
            </div>
        )
    }
}