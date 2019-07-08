import React from 'react';
import Total from './Total'
import Purchased from './Purchased';

export default class Cart extends React.Component {
    render() {
       
        const summary = Object.keys(this.props.selected).map((category,i) => {
                return <Purchased
                        key={i}
                        category={category}
                        name={this.props.selected[category].name}
                        price={new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                               .format(this.props.selected[category].cost)}
                        />
                    
            })

        return (
            <section className="main__summary">
                <h3>NEW GREENLEAF 2018</h3>
                {summary}
                <Total selected={this.props.selected} />
            </section>
        )
    }

}