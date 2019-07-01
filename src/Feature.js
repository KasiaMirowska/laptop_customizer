import React from 'react';
import Item from './Item';

export default class Feature extends React.Component {
    render(){
        console.log(this.props.choices)
        const choices = this.props.choices.map((item, index) => {
            return (
                <li key={index} className="feature__item">
                
                    <Item key={index} name={item.name} price={item.cost}/>
               
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