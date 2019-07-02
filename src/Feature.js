import React from 'react';
import Item from './Item';

export default class Feature extends React.Component {
    render(){
        const choices = this.props.choices.map((item, index) => {
            return (
                <li key={index} className="feature__item">
                
                    <Item 
                    key={index} 
                    index={index} 
                    name={item.name} 
                    price={item.cost} 
                    change={this.props.changes}
                    currentChoices={this.props.currentChoices}/>
               
                </li>
           )
       })
         
        return(
            <div>
               {choices}
            </div>
            
        )
    }
    
}