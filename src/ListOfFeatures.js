import React from 'react';
import Item from './Item';

export default class ListOfFeatures extends React.Component {
    render() {
        const features = Object.keys(this.props.features).map(category => {
            const choices = this.props.features[category].map((item, index) => {
                const selectedClass = item.name === this.props.selected[category].name? 'feature__selected' : '';
                const featureClass = 'feature__option' + selectedClass;
            return <Item 
                    key={index} 
                    featureHeader={category}
                    item={item} 
                    price={item.cost} ß
                    featureClass={featureClass}
                    change={this.props.handleChange}
                    />
        })
        return (
            <div className="feature" key={category}>
                <div className="feature__name">{category}</div>
                <ul className="feature__list">
                    {choices}
                </ul>
            </div>   
           )
       })
       
       return (
        <section className="main__form">
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                {features}
              </section>
             
      )
    }
}