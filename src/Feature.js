import React from 'react';
import Item from './Item';

export default class Feature extends React.Component {
    render(){
        const choices = this.props.choices.map((item, index) => {
            const selectedClass = item.name === this.props.selected[this.props.category].name? 'feature__selected' : '';
            const featureClass = 'feature__option' + selectedClass;
            return <Item 
                key={index} 
                category={this.props.category}
                item={item} 
                price={item.cost} ß
                featureClass={featureClass}
                change={this.props.change}
                />
                
    })
    return (

        
            <div className="feature" key={this.props.category}>
            <div className="feature__name">{this.props.category}</div>
            <ul className="feature__list">
                {choices}
            </ul>
        </div>   
       )
    }
}
